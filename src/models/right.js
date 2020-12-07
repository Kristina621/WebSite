import firebase from "../db/fbDb"
import React, { Component } from 'react';

export default class Right extends Component {
    constructor(props) {
        super(props)

        this.data = {}

        this.fillFeedback()
        this.state = {
            names: [],
            comments: [],
            ratings: [],
        };
    }
    updateFeedback = (data) => {
        const JSONFeedback = JSON.parse(data)
        console.log(JSONFeedback);
        let comments = []
        let ratings = []
        let names = []
        for (let users in JSONFeedback) {
            names.unshift(users)
            ratings.unshift(JSONFeedback[users]['rating'])
            comments.unshift(JSONFeedback[users]['comment'])
        }

        this.setState({ names: names, comments: comments, ratings: ratings })
    }

    fillFeedback = async () => {
        await firebase.readFeedback(this.updateFeedback)

        // const JSONFeedback = JSON.parse(this.data)
        // console.log(JSONFeedback);
        // let comments = []
        //     let ratings = []
        //     let names = []
        //     for (let users in JSONFeedback) {
        //         names.unshift(users)
        //         ratings.unshift(JSONFeedback[users]['rating'])
        //         comments.unshift(JSONFeedback[users]['comment'])
        //     }

        //     this.setState({ names: names, comments: comments, ratings: ratings })
    }
    setColor = (rating) => {
        let color = ''

        switch (rating) {
            case 1:
                color = "#F08080"
                break;
            case 2:
                color = "#CD853F"
                break;
            case 3:
                color = "#FFD700"
                break;
            case 4:
                color = "#F0E68C"
                break;
            case 5:
                color = "#98FB98"
                break;
        }
        return { backgroundColor: color }
    }
    render() {
        return (
            <div className="col-md-2 sticky py-3 bg-light" style={{ marginTop: '50px' }}>
                <h5>Отзывы</h5>
                {

                }
                {this.state.names.map((name, i) =>
                    <div className="card card-body mb-4 border-0" style={this.setColor(this.state.ratings[i])}>
                        <h5>{name}</h5>
                        <p> {this.state.comments[i]}</p>
                    </div>
                    //1-#F08080
                    //2-#CD853F
                    //3-#FFD700
                    //4-#F0E68C
                    //5-#98FB98
                )}

            </div>
        )
    }
}