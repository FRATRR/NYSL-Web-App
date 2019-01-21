import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAKdLouy9ZRcDYUgHaB2xH9srkoae2-KmU",
  authDomain: "nysl-web-app-76c6a.firebaseapp.com",
  databaseURL: "https://nysl-web-app-76c6a.firebaseio.com",
  projectId: "nysl-web-app-76c6a",
  storageBucket: "nysl-web-app-76c6a.appspot.com",
  messagingSenderId: "980174129726"
};
firebase.initializeApp(config);

// Required for side-effects
// Initialize Cloud Firestore through Firebase

var db = firebase.firestore();
window.db = db;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
