<template>
  <div class="body">
    <!---.....................................................TEAMS..............................................................-->

    <v-layout
      justify-space-between
      row
    >
      <div class="teams">

        <img :src="require(`@/assets/${currentHomeTeam.logo}`)" />
        <h3>{{currentMatch.home_team}} </h3>

      </div>
      <div class="vs_txt">
        <img src="../assets/vs.png">

      </div>
      <div class="teams">
        <img :src="require(`@/assets/${currentAwayTeam.logo}`)" />
        <h3>{{currentMatch.away_team}}</h3>
      </div>
    </v-layout>

    <!---.....................................................DATE...............................................................-->
    <v-layout row>
      <v-flex xs12>
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
      </v-flex>

    </v-layout>
    <!---.....................................................LOCATION...............................................................-->

    <v-layout>
      <v-card class="location_vcard">
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
          <a v-bind:href="`${currentHomeTeam.location_url}`">

            <img src="../assets/stadium.png">
          </a>

        </v-layout>

      </v-card>
    </v-layout>
    <!---.....................................................END...............................................................-->

  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  props: ["id", "name", "lastname", "home_team", "away_team"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["results", "matches", "teams", "clubs"]),
    currentMatch() {
      return this.matches.find(
        obj => obj.home_team + "-" + obj.away_team === this.id
      );
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

.body {
  margin-top: 100px;
  margin-bottom: 100px;
}
.teams {
  margin: 2%;
  text-align: center;
  color: #033949;
  font-size: 30px;
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
}

.match_vcard h2 {
  font-family: "Teko", sans-serif;
}

.location_vcard {
  width: 100%;
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
}
.location_vcard h2 {
  font-family: "Teko", sans-serif;
}
</style>
