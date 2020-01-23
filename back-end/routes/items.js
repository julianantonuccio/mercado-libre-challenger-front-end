const express = require('express');
const router = express.Router();
const axios = require("axios");
const { newItem, newSubItem, handleError, APIURL } = require("../utils/utils");

const API = axios.create({ baseURL: APIURL })

//OBTENGO LOS PRODUCTOS QUE BUSCARON
router.get("/", async (req, res) => {
  try {
    let response = await API.get(`sites/MLA/search?q=${req.query.q}&limit=4`);
    const categories = response.data.filters.find(
      filter => filter.id === "category"
    );
    console.log(categories);
    //Logica para obtener las imagenes en buena calidad
    const result = await getItemImage(response.data.results);
    res.json(newItem(result, categories));
  }
  catch (error) {
    handleError(error);
  }
});

const getItemImage = async (data) => {
  return Promise.all(
    data.map(async item => {
      const itemDetail = await API.get(`items/${item.id}`);
      item.thumbnail = itemDetail.data.pictures[0].secure_url;
      return item;
    })
  )
}

//OBTENGO EL DETALLE DE UN PRODUCTO
router.get("/:id", async (req, res) => {
  try {
    const item = await API.get(`items/${req.params.id}`);
    const description = await API.get(`items/${req.params.id}/description`);
    const response = newSubItem(item.data);
    response.description = description.data.plain_text.replace(/\n/ig, '</br>');
    response.picture =  item.data.pictures[0].secure_url;
    res.json(response);
  }
  catch (error) {
    handleError(error);
  }
});

module.exports = router;