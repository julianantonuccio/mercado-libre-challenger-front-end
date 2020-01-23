import React, { Component } from 'react'

export default class ItemDetail extends Component {
    render() {
        const { item } = this.props
        return (
            <section className="col-8 br-1 bk-default mb-2">
                <article className="flex flex-start flex-resp text-center">
                    <div className="col-6 max-thumbnail">
                        <img src={item.picture} alt={item.title}></img>
                    </div>
                    <div className="col-3 col-resp-9 flex flex-row mt-2 mr-2 text-left">
                        <div className="mb-1 col-f">
                            <span className="text-1 color-0">{item.condition}</span>
                            {item.sold_quantity > 0
                            ? <span className="text-1 color-0"> - {item.sold_quantity} vendidos</span>
                            : null}
                        </div>
                        <div className="mb-2 col-f">
        <h2 className="text-4 color-1">{item.title}</h2>
                        </div>
                        <div className="mb-2 col-f">
        <h1 className="text-6 text-normal color-1">$ {item.price.amount}</h1>
                        </div>
                        <div className="col-f ">
                            <button className="btn br-1">Comprar</button>
                        </div>
                    </div>
                </article>
                <article className="ml-2 mt-2 mb-2 flex">
                    <div className="col-7">
                        <div className="mb-2">
                            <h1 className="text-5 text-normal color-1">Descripción del producto</h1>
                        </div>
                        <div className="text-2 color-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                </article>
            </section>
        );
    }
}

ItemDetail.defaultProps = {
    item: {}
}