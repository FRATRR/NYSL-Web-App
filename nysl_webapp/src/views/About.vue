<template>
  <div class="body">

    <v-layout
      justify-center
      column
    >
      <v-card class="about_vcard">
        <v-layout
          justify-space-between
          row
          class="vcard_title"
        >
          <h2>Mission</h2>
          <img src="../assets/mission.png">

        </v-layout>

        <h5> To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.
        </h5>
      </v-card>
      <v-card class="about_vcard">
        <v-layout
          justify-space-between
          row
          class="vcard_title"
        >
          <h2>Vision</h2>

          <img src="../assets/vision.png">
        </v-layout>

        <h5> The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.

        </h5>
      </v-card>
      <v-card class="about_vcard">
        <v-layout
          justify-space-between
          row
          class="vcard_title"
        >
          <h2>General Info</h2>

          <img src="../assets/info.png">
        </v-layout>
        <h5> The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run by a small full-time staff, and relies on the generous volunteer time of parents and previous league members.</h5>
      </v-card>
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
  font-family: "Montserrat", sans-serif;
}
.about_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
}
.about_vcard h5 {
  text-align: justify;
  padding: 2%;
  font-size: 13px;
}
.vcard_title {
  display: flex;
  margin-bottom: 5%;
}
.vcard_title h2 {
  align-self: center;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  font-size: 35px;
}
</style>