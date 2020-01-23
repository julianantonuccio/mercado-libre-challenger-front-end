import React, { Component, Fragment } from 'react'
import SearchBar from '../content/SearchBar'
import NoResults from '../content/NoResults'
import EmptyContent from '../content/EmptyContent'
import LoadingList from '../content/LoadingList'
import Categories from '../content/Categories'
import List from '../content/List'
import SEO from '../content/SEO'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            usedSearch: false,
            error: false,
            searchText: '',
            items: [],
            categories: []
        };
        this._handleSearch = this._handleSearch.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state === 'refreshPage') {
            this.setState({
                usedSearch: false,
            });
            document.getElementById("SearchInput").value = "";
        }
    }

    //En caso de acceder directo por url
    async componentWillMount() {
        let searchText = new URLSearchParams(this.props.location.search).get("search")
        if (searchText) {
            if (searchText !== this.state.searchText) {
                await this.setState({ searchText, usedSearch: true })
                await this.getItems(searchText)
                document.getElementById("SearchInput").value = new URLSearchParams(this.props.location.search).get("search");
            }
        }
        else {
            this.setState({ usedSearch: false })
        }
    }

    async componentDidUpdate(prevProps, newState) {
        if (this.state.searchText === newState.searchText) {
            return false;
        }
    }

    async _handleSearch(searchText) {
        if (searchText) {
            this.props.history.push(`/items?search=${searchText}`);
            await this.setState({ searchText, usedSearch: true })
            await this.getItems(searchText);
        }
        else {
            this.props.history.push("/");
            this.setState({ searchText: '' });
        }
    }

    async getItems(searchText) {
        this.setState({ isLoading: true });
        try {
            const response = await fetch(`/api/items?q=${searchText}`);
            let data = await response.json();
            this.setState({
                isLoading: false,
                items: data.items,
                categories: data.categories
            });
        }
        catch (error) {
            console.log(error);
            this.setState({ error: true })
        }
    }

    _renderComponents() {
        if (!this.state.searchText) {
            return <NoResults></NoResults>
        }
        if (this.state.isLoading) {
            return <LoadingList></LoadingList>
        }
        else {
            if (this.state.items.length === 0 || this.state.error) {
                return <NoResults></NoResults>
            }
            else {
                if (this.state.categories.length === 0) {
                    this.state.categories.push(this.state.searchText)
                }
                return this._renderResults()
            }
        }
    }

    _renderResults() {
        const { items, categories } = this.state
        return (
            <Fragment>
                <Categories categories={categories} />
                <List items={items} />
            </Fragment>
        )
    }

    render() {
        return (
            <Fragment>
                <SEO categories={this.state.categories}></SEO>
                <SearchBar onSearch={this._handleSearch}></SearchBar>
                <main className="flex flex-center flex-row bk-secondary">
                    {this.state.usedSearch
                        ? this._renderComponents()
                        : <EmptyContent></EmptyContent>}
                </main>
            </Fragment>
        )
    }
}
