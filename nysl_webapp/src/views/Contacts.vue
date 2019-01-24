<template>
  <div class="body">

    <v-card class="contact_vcard">
      <v-layout
        justify-space-between=""
        row
        class="vcard_title"
      >

        <h2>Contact Us</h2>
        <img src="../assets/mail.png">
      </v-layout>

      <p>Please contact us at <a href="mailto:nysl@chisoccer.org"> nysl@chisoccer.org </a></p>
      <p>We will reply to your email as soon as we can.</p>
      <div class="img_vcard"></div>

      </h5>
    </v-card>

    <v-layout
      align-space-around
      justify-center
      column
    />

    </v-layout>
  </div>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Teko");
.body {
  margin-top: 100px;
  margin-bottom: 100px;
  color: white;
}
.contact_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
}
.vcard_title {
  align-self: center;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  font-size: 30px;
}
a {
  text-decoration: none;
  color: white;
}
.img_vcard {
  justify-content: center;
}
</style>
