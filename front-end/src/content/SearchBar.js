import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/Logo_ML.png"
import searchIcon from "../assets/ic_Search.png"

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSearch(document.getElementById("SearchInput").value)
  }

  _handleInput = (e) => {
    const search = e.target.value;
    if (search) {
      this.setState({
        search
      });
    }
  }

  render() {
    return (
      <header className="flex flex-center bk-principal pt-min-3 pb-min-3">
        <nav className="flex flex-bt col-8">
          <Link to={{ pathname: '/', state: 'refreshPage' }} className="pt-min-5 mr-1">
            <img src={logo} alt="Mercado libre"></img>
          </Link>
          <form
            className="pt-min-3 pb-min-3 flex flex-center col-cust-9"
            onSubmit={this._handleSubmit}
            onChange={this._handleInput}
          >
            <input
              id="SearchInput"
              autoFocus
              placeholder="Nunca dejes de buscar"
              type="text"
              name="search"
              className="control full"
            ></input>
            <button type="submit" className="control-icon bk-secondary">
              <img src={searchIcon} alt="Search"></img>
            </button>
          </form>
        </nav>
      </header>
    );
  }
}
