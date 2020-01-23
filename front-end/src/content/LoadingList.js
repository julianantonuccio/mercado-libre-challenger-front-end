import React, { Component } from 'react'

export default class LoadingList extends Component {

    createItems = () => {
        let items = []
        for (let i = 0; i < 4; i++) {
            items.push(<li key={i} className="list">
                <div className="flex flex-left flex-resp">
                    <div className="inline thumbnail m-1 animated-background">
                    </div>
                    <div className="list-content">
                        <div className="mb-2 mt-2" >
                            <div className="animated-background animate-box-full mb-2"></div>
                            <div className="animated-background animate-box mb-1"></div>
                            <div className="animated-background animate-box-full mb-1"></div>
                            <div className="animated-background animate-box-middle"></div>
                        </div>
                    </div>
                </div>
            </li>)
        }
        return items;
    }

    render() {
        return (
            <section className="col-8 br-1 bk-default mb-2 mt-2">
                <ol className="list-container">
                    {this.createItems()}
                </ol>
            </section>
        );
    }
}
