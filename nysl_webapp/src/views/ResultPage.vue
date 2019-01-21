<template>
  <div class="body">
    <v-layout
      justify-space-between
      row
    >
      <div class="teams">
        <img :src="require(`@/assets/${currentHomeTeam.logo}`)" />
        <h3>{{currentMatch.home_team}}</h3>
        <h3>{{currentMatch.home_score}}</h3>

      </div>
      <div class="vs_txt">
        <img src="../assets/vs.png">
      </div>
      <div class="teams">
        <img :src="require(`@/assets/${currentAwayTeam.logo}`)" />
        <h3>{{currentMatch.away_team}}</h3>
        <h3>{{currentMatch.away_score}}</h3>

      </div>
    </v-layout>

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

    <v-card class="match_vcard">
      <v-layout justify-space-between>
        <v-avatar><img :src="require(`@/assets/${currentHomeTeam.logo}`)" /> </v-avatar>

        <v-avatar><img :src="require(`@/assets/${currentAwayTeam.logo}`)" /> </v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Shots</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_shots}}</v-avatar>

        <v-avatar>{{currentMatch.away_shots}}</v-avatar>
      </v-layout>

      <v-layout justify-center="">
        <h2>Shots On Goal</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_shots_on_goal}}</v-avatar>

        <v-avatar>{{currentMatch.away_shots_on_goal}}</v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Corners</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_corners}}</v-avatar>

        <v-avatar>{{currentMatch.away_corners}}</v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Free Kicks</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_freekicks}}</v-avatar>

        <v-avatar>{{currentMatch.away_freekicks}}</v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Fouls</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_fouls}}</v-avatar>

        <v-avatar>{{currentMatch.away_fouls}}</v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Yellow Cards</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_yellowcard}}</v-avatar>

        <v-avatar>{{currentMatch.away_yellowcard}}</v-avatar>
      </v-layout>
      <v-layout justify-center="">
        <h2>Red Cards</h2>
      </v-layout>

      <v-layout
        justify-space-between
        class="match_vcard_content"
      >
        <v-avatar>{{currentMatch.home_red_card}}</v-avatar>

        <v-avatar>{{currentMatch.away_red_card}}</v-avatar>
      </v-layout>

    </v-card>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["results", "matches", "teams", "clubs"]),
    currentMatch() {
      return this.results.find(obj => obj.id === this.id);
    },
    currentHomeTeam() {
      return this.teams.find(obj => obj.name === this.currentMatch.home_team);
    },
    currentAwayTeam() {
      return this.teams.find(obj => obj.name === this.currentMatch.away_team);
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Teko");

.body {
  margin-bottom: 100px;
}
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
