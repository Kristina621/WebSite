import React from 'react'
import {setFeedback} from '../db/fbDb'
import {Form, Button} from 'react-bootstrap'
import Alert from '../models/alert';
class Feedback extends React.Component{
    constructor(props){
        super(props)
        // setFeedback('comment', 2, 4);
        // console.log(this.isFeedbackValid('comment', 5, '123'))
    }

    isFeedbackValid = function(comment, rating, userId) {
        if(comment && comment.length > 0 && comment.length < 300)
            if(rating && rating >= 0 && rating < 6)
                if(userId && userId.length > 0)
                    return true
        return false
    }

    render(){
        return(
            <div> 
                <Alert message="123" visible={true}/>
                <h2 class="hidden-sm-down">Оставить отзыв</h2>
                <Form.Group controlId="feedbackRating">
                    <Form.Label>Оценка</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Текст отзыва</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button>Отправить</Button>
                      
            </div>   
        )
    }
}

export default Feedback