import React from 'react'
import firebase from "../db/fbDb"
import { Form, Button } from 'react-bootstrap'
import Alert from '../models/alert';
class Feedback extends React.Component {
    constructor(props) {
        super(props)
        // setFeedback('comment', 2, 4);
        // console.log(this.isFeedbackValid('comment', 5, '123'))
        this.state = {
            alertMessage: "Ошбика",
            alertVisible: false,
            comment: "",
            rating: 5,
            send: false
        }
    }

    isFeedbackValid = function (comment, rating, userId) {
        if (comment && comment.length > 0 && comment.length < 300)
            if (rating && rating >= 0 && rating < 6)
                if (userId && userId.length > 0)
                    return true
        return false
    }


    sendFeedback = async () => {
        if (!firebase.getCurrentUsername())
            this.setState({
                alertMessage: "Отзывы могут оставлять лишь зарегестрированные пользователи!",
                alertVisible: true
            })

        else if (!this.state.comment)
            this.setState({
                alertMessage: "Отзыв не может быть пустым!",
                alertVisible: true
            })
        else {
            firebase.writeFeedback(this.state.comment, this.state.rating);
            this.setState({
                send: true
            })
        }
    }

    ca = () => {
        this.setState({
            alertVisible: false
        })
    }
    render() {

        return (
            this.state.send ?
                <div>
                    <h1>Мы стараемся для вас!</h1>
                </div> :
                <div>
                    <Alert callBack={this.ca} message={this.state.alertMessage} visible={this.state.alertVisible} />
                    <h2 className="hidden-sm-down">Оставить отзыв</h2>
                    <Form.Group controlId="feedbackRating">
                        <Form.Label>Оценка</Form.Label>
                        <Form.Control as="select" onChange={e => this.setState({ rating: e.target.value })}>
                            <option>5</option>
                            <option>4</option>
                            <option>3</option>
                            <option>2</option>
                            <option>1</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Текст отзыва</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Очень супер! Очень пупер!" id="ibText" onChange={e => this.setState({ comment: e.target.value })} />
                    </Form.Group>
                    <Button onClick={this.sendFeedback}>Отправить</Button>

                </div>

        )
    }
}

export default Feedback