const APIURL = 'https://api.mercadolibre.com';

const author = {
  name: "Julian M.",
  lastname: "Antonuccio"
}

const newItem = (items, categories) => {
  return {
    author,
    categories: categories
      ? categories.values[0].path_from_root.map(c => c.name)
      : [],
    items: items.map(item => newSubItem(item))
  };
};

const newSubItem = ({
  id,
  title,
  currency_id,
  price,
  thumbnail,
  condition,
  shipping,
  address,
  sold_quantity,
  category_id
}) => {
  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: padLeftDecimal(price.formatToPrice()),
      decimals: price.countDecimals()
    },
    picture: thumbnail,
    condition: condition == "new" ? "Nuevo" : "Usado",
    free_shipping: shipping.free_shipping,
    address: address ? address.state_name : null, //no se espefica pero es necesario segun el mockup
    sold_quantity,
    category_id
  };
};

const handleError = (error) => {
  if (error.response) {
    res.status(error.response.status).json({ error: error.response.data.message });
  }
}

Number.prototype.countDecimals = function () {
  if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0;
}

Number.prototype.formatToPrice = function () {
   return this.toString().replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function padLeftDecimal(value) {
  if(value.includes(','))
  {
     var sp = value.split(',');
     while (sp[1].length < (2)) {sp[1] = "0" + sp[1];}
     return (sp[0] + "," + sp[1]);
  }
  return value;
}

module.exports = { newSubItem, newItem, handleError, APIURL };