import React, { Component, Fragment } from 'react'
import SearchBar from '../content/SearchBar'
import NoResults from '../content/NoResults'
import LoadingItem from '../content/LoadingItem'
import Categories from '../content/Categories'
import ItemDetail from '../content/ItemDetail'
import SEO from '../content/SEO'

export default class itemDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: false,
            item: {},
            categories: []
        };
        this._handleSearch = this._handleSearch.bind(this);
    }

    async componentWillMount() {
        const { pathname } = this.props.location;
        const productId = pathname.replace('/items/', '');
        if(productId)
        {
            await this.getItem(productId);
        }
    }

    async getItem(itemId) {
        this.setState({ isLoading: true });
        try {
            const response = await fetch(`/api/items/${itemId}`);
            let data = await response.json();
            const category = await fetch(`/api/categories/${data.category_id}`);
            let dataCat = await category.json();
            console.log(data);
            console.log(dataCat);
            this.setState({
                isLoading: false,
                item: data,
                categories: dataCat
            });
        }
        catch (error) {
            console.log(error);
            this.setState({ error: true })
        }
    }

    _renderComponents() {
        const { isLoading, categories, item, error } = this.state
        if (isLoading) {
            return <LoadingItem></LoadingItem>
        }
        else {
            if (item === {} || error) {
                return <NoResults></NoResults>
            }
            else {
                if(categories.length === 0)
                {
                    categories.push('Sin categoría')
                }
                return (
                    <Fragment>
                        <Categories categories={categories} />
                        <ItemDetail item={item}></ItemDetail>
                    </Fragment>
                )
            }
        }
    }

    async _handleSearch(searchText) {
        if (searchText) {
            this.props.history.push(`/items?search=${searchText}`);
        }
        else{
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <Fragment>
                <SEO categories={this.state.categories}></SEO>
                <SearchBar onSearch={this._handleSearch}></SearchBar>
                <main className="flex flex-center flex-row bk-secondary">
                    {this._renderComponents()}
                </main>
            </Fragment>
        );
    }
}
