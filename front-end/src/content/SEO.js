import React, { Component } from 'react'
import { Helmet } from "react-helmet";

export default class SEO extends Component {
    render() {
        const seoText = this.props.categories.length > 0 ? this.props.categories.join(', ') : "Mercado Libre Challenger"

        return (
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="description" content={seoText} />
                <meta name="keywords" content={seoText} />
                <meta name="author" content="Julian M. Antonuccio" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{seoText}</title>
            </Helmet>
        )
    }
}

SEO.defaultProps ={
    categories: []
}