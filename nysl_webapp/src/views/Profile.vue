<template>
  <div class="body">
    <div class="txt_title">
      <h2>Message Board</h2>
    </div>

    <!--...........................CHAT.................................................-->
    <div
      id="container"
      class="msg_box"
    >
      <v-layout row>
        <v-flex xs12>
          <v-card
            v-for="(msg, index) in messages"
            :key="index"
            class="msg_vcard"
          >
            <v-layout row>
              <v-layout
                justify-center
                class="txt_post"
              >
                <h2>{{msg.message}}</h2>

              </v-layout>
              <div class="txt_name">
                <h5> {{msg.name}}</h5>
              </div>

              <v-avatar><img :src="(`${msg.avatar}`)" /></v-avatar>
            </v-layout>

          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <!--...........................TEXT AREA.................................................-->

    <div class="txtarea">
      <v-text-field
        v-model="textToSend"
        @keyup.enter="sendmsg"
        box
        color="#2c69d1"
        label="Post in the forum..."
        style="min-height: 96px"
      ></v-text-field>
    </div>
    <div class="signout">
      <button v-on:click="signOut">Sign out</button>
    </div>
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
        avatar: this.authUser.photoURL,
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
          setTimeout(() => {
            this.scrollToEnd();
          }, 600);
        });
    },
    scrollToEnd() {
      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
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
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Teko");
.body {
  margin-top: 100px;
  margin-bottom: 100px;
}
.msg_box {
  overflow-y: scroll;
  height: 80%;
}
.msg_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  font-family: "Teko", sans-serif;
  text-align: center;
  color: white;
}
.msg_vcard h2 {
  font-family: "Montserrat", sans-serif;
}
.txtarea {
  margin-top: 5%;
}
.txt_post {
  margin-top: 50px;
  text-align: start;
  font-size: 13px;
}
.txt_name {
  align-self: flex-start;
  position: absolute;
  margin-top: 10px;
  font-size: 20px;
}
.txt_title {
  font-family: "Teko", sans-serif;
  font-size: 30px;
  text-align: center;

  color: #033949;
}
.signout {
  margin: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  border-width: 3px;
  font-family: "Teko", sans-serif;
  text-align: center;
  font-size: 20px;
}
</style>
