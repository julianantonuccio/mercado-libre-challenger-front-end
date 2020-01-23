import React, { Component } from 'react'

export default class Categories extends Component {

	_renderCategories = () => {
		return this.props.categories.map((item) =>
			<li
				className="badgets-item color-0 text-capitalize"
				key={item.toString()} >
				<a href={`/items?search=${item}`}>{item}</a>
			</li>
		);
	}

	render() {
		return (
			<section className="flex flex-left col-8 pb-1 pt-1 ">
				<ol className="badgets color-0 text-1 flex-row">
					{this._renderCategories()}
				</ol>
			</section>
		);
	}
}

Categories.defaultProps = {
	categories: []
}