<template>
  <div>
    <v-layout justify-center>
      <v-card
        v-on:click="login"
        class="loginstyle"
      >
        <h2>Please log in </h2>
      </v-card>
    </v-layout>
  </div>
</template>



<script>
import firebase, { firestore } from "firebase";
export default {
  methods: {
    login() {
      // https://firebase.google.com/docs/auth/web/google-signin

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...

          this.$router.push("/profile");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style scoped>
.loginstyle {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 200px;
}
</style>
