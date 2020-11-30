import {DB} from './fbConfig'

function setFeedback(comment, rating, userId){
    firebase.database().ref('feedback/').set({
        comment: comment,
        rating: rating,
        userId: userId
      });
}

function getFullFeedback(){
    
}