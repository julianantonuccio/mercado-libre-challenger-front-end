import React, { Component } from 'react'
import { Link } from "react-router-dom";
import shipping from "../assets/ic_shipping.png"

export default class List extends Component {

  _renderItems = () => {
    return this.props.items.map((item) =>
      <li key={item.id} className="list">
        <Link to={`/items/${item.id}`} className="flex flex-left flex-resp">
          <div className="inline thumbnail m-1">
            <img className="br-1" src={item.picture} alt={item.title}></img>
          </div>
          <div className="list-content">
            <div className="mb-2" >
              <h1 className="inline text-4 mr-1 text-normal color-1">$ {item.price.amount}</h1>
              {item.free_shipping 
              ?<img className="mini-thumbnail" src={shipping} alt="shipping"></img>
              : null}     
              <div className="list-item-rigth text-0">
                {item.address}
              </div>
            </div>
            <h2 className="text-3">{item.title}</h2>
            <h2 className="text-3 text-normal">Completo Único!</h2>
          </div>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <section className="col-8 br-1 bk-default mb-2">
        <ol className="list-container">
          {this._renderItems()}
        </ol>
      </section>
    );
  }
}

List.defaultProps = {
  items: []
}