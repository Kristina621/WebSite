// import {DB, authh} from './fbConfig'
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    //Настройка конфига Firebase
    apiKey: "AIzaSyCheftZRa9A9-VUNwcMFITElqxXH_CwWwA",
    authDomain: "worldofbeauty-521a1.firebaseapp.com",
    databaseURL: "https://worldofbeauty-521a1.firebaseio.com",
    projectId: "worldofbeauty-521a1",
    storageBucket: "worldofbeauty-521a1.appspot.com",
    messagingSenderId: "1082397067315",
    appId: "1:1082397067315:web:6186025f2f6f330c6afb46"
};

// function getNewIdFeedback() {
//   return DB.ref('/feedback/').once('value').then((data) => {
//     if (data.exists())
//       return data.val().length;
//     return 1
//   });
// }

// async function setFeedback(comment, rating, userId){
//   let id = await getNewIdFeedback()
//     DB.ref('/feedback/' + id).set({
//         comment: comment,
//         rating: rating,
//         userId: userId
//       })
// }

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth()
        this.db = firebase.database();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    }

    login(email, password) {
        return this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => this.auth.signInWithEmailAndPassword(email, password))

    }

    logout() {
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        alert(`Аккаунт ${email} успешно зарегестрирован!`)
        return this.auth.currentUser.updateProfile({
            displayName: name
        });
    }

    isInitialized() {
        return this.auth.currentUser;
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }

    async getStateuser(SetNameUser) {
        return await this.auth.onAuthStateChanged(user => {
            if (user) {
                SetNameUser(user.displayName);
            } else {
                console.log("No Auth");
            }
        });
    }


    readFeedback(callBack) {
        return this.db.ref('feedback').on('value', async (snapshot) => {
            let data = JSON.stringify(snapshot.val())
            callBack(data)
        })
        // .then(snapshot => { return JSON.stringify(snapshot.val()) })
        // .then((val) => this.feedbackCallback(val));

    }

    feedbackCallback(val) {
        this.feedback = val;
    }

    async writeFeedback(comment, rating) {
        return await this.db.ref('feedback/' + this.getCurrentUsername()).set({
            comment: comment,
            rating: rating
        }).then(() => alert('Спасибо за ваш отзыв)')).catch(err => console.log(err.message));
    }
}
export default new Firebase()
// export {setFeedback}