<template>
  <div>
    <v-layout
      justify-space-between
      row
    >
      <div class="teams">
        <img :src="require(`@/assets/${currentHomeTeam.logo}`)" />
        <h3>{{currentMatch.home_team}}</h3>
      </div>
      <div class="vs_txt">
        <img src="../assets/vs.png">

      </div>
      <div class="teams">
        <img :src="require(`@/assets/${currentAwayTeam.logo}`)" />
        <h3>{{currentMatch.away_team}}</h3>
      </div>
    </v-layout>

    <v-layout>
      <v-card class="match_vcard">
        <v-layout row>
          <v-layout
            justify-center
            column
            class="match_vcard_content"
          >
            <h2>Date</h2>
            <h5>{{currentMatch.date}} {{currentMatch.hour}}</h5>
          </v-layout>
          <img src="../assets/time.png">

        </v-layout>

      </v-card>

    </v-layout>
    <v-layout>
      <a v-bind:href="`${currentHomeTeam.location_url}`">
        <v-card class="match_vcard">
          <v-layout row>
            <v-layout
              justify-center
              column
            >
              <h2>Location</h2>
              <h5>
                {{currentHomeTeam.stadium}}
              </h5>
            </v-layout>
            <img src="../assets/stadium.png">

          </v-layout>

        </v-card>
      </a>
    </v-layout>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  props: ["id", "name", "lastname"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["results", "matches", "teams", "clubs"]),
    currentMatch() {
      return this.matches.find(obj => obj.id === this.id);
    },
    currentHomeTeam() {
      return this.teams.find(obj => obj.name === this.currentMatch.home_team);
    },
    currentAwayTeam() {
      return this.teams.find(obj => obj.name === this.currentMatch.away_team);
    },

    currentHomeRoster() {
      if (this.currentHomeTeam.name in this.clubs) {
        return this.clubs[this.currentHomeTeam.name];
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Teko");

.teams {
  margin: 2%;
  text-align: center;
  color: #033949;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
}
.vs_txt {
  align-self: center;
}
.match_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  width: 325px;
}

.match_vcard h2 {
  font-family: "Teko", sans-serif;
}
.match_vcard_content {
}
</style>
