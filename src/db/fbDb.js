import {DB} from './fbConfig'

function getNewIdFeedback() {
  return DB.ref('/feedback/').once('value').then((data) => {
    if (data.exists())
      return data.val().length;
    return 1
  });
}

async function setFeedback(comment, rating, userId){
  let id = await getNewIdFeedback()
    DB.ref('/feedback/' + id).set({
        comment: comment,
        rating: rating,
        userId: userId
      })
}

function getFullFeedback(){
    
}

export {setFeedback} 