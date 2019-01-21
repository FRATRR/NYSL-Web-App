<template>
  <div>
    <div class="signout">
      <button v-on:click="signOut">Sign out</button>
    </div>
    <h2>Post in the group</h2>
    <v-card v-for="msg in messages">
      {{msg.message}}
      {{msg.name}}

    </v-card>
    <v-card>
      <input
        @keyup.enter="sendmsg"
        v-model="textToSend"
        placeholder="Enter Message"
      >
    </v-card>
  </div>
</template>

<script>
import firebase, { firestore } from "firebase";
export default {
  data() {
    return {
      textToSend: null,
      messages: [],
      authUser: {},
      logTxt: "Log In"
    };
  },
  methods: {
    sendmsg() {
      var message = {
        message: this.textToSend,
        name: this.authUser.displayName,
        createdAt: new Date()
      };

      console.log(message);
      //
      //
      db.collection("nsylChat")
        .add(message)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });

      console.log("write");
      this.textToSend = null;
    },
    fetchMessages() {
      db.collection("nsylChat")
        .orderBy("createdAt")
        .onSnapshot(querySnapshot => {
          let allMessages = [];
          querySnapshot.forEach(msg => {
            allMessages.push(msg.data());
          });
          console.log(allMessages);
          this.messages = allMessages;
        });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = user;
      } else {
        this.authUser = {};
      }
    });
    this.fetchMessages();
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  }
};
</script>

<style scoped>
.chatstyle {
  margin-bottom: 0px;
  color: red;
}
.signout {
  padding: 100px;
  color: red;
  border: solid, red;
}
</style>
