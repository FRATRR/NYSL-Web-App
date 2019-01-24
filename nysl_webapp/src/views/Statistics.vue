<template>
  <div class="body">
    <v-layout
      class="vcard_title"
      justify-center
    >
      <h2>Wins</h2>
    </v-layout>
    <v-card class="match_vcard">
      <v-layout
        justify-space-between
        row
        v-for="(club,index) in standings"
        :key="index"
        class="teams_vlayout"
      >
        <div class="teams">
          <img :src="require(`@/assets/${club.logo}`)" />
          <h3>{{club.name}}</h3>

        </div>

        <div class="wins">
          <h3>{{club.wins}}</h3>

        </div>
      </v-layout>
    </v-card>
  </div>
</template>


  //  $( window ).on( "orientationchange", function( event ){
  //   console.log("landscape mode");



<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      standings: [],
      gameWon: 0
    };
  },
  computed: {
    ...mapState(["results", "matches", "teams", "clubs"])
  },
  created() {
    for (var x = 0; x < this.results.length; x++) {
      if (
        (this.results[x].home_team == "Wolves" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Wolves" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[0].wins++;
      } else if (
        (this.results[x].home_team == "Hawks" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Hawks" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[1].wins++;
      } else if (
        (this.results[x].home_team == "Mustangs" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Mustangs" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[2].wins++;
      } else if (
        (this.results[x].home_team == "Owls" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Owls" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[3].wins++;
      } else if (
        (this.results[x].home_team == "Rhinos" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Rhinos" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[4].wins++;
      } else if (
        (this.results[x].home_team == "Grizzlies" &&
          this.results[x].home_score > this.results[x].away_score) ||
        (this.results[x].away_team == "Grizzlies" &&
          this.results[x].home_score < this.results[x].away_score)
      ) {
        this.teams[5].wins++;
      }
    }

    this.sortTeams();
  },
  methods: {
    sortTeams() {
      this.standings = Array.from(this.teams);
      var most = Array.from(this.standings);
      console.log(most);
      this.standings.sort(function(a, b) {
        return b.wins - a.wins;
      });
    }
  }
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css?family=Teko");

.body {
  margin-top: 100px;
  margin-bottom: 100px;
}
.match_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
}

.vcard_title {
  font-family: "Teko", sans-serif;
  font-size: 30px;
  color: #033949;
}
.teams_vlayout {
  margin: 3%;
}
.teams {
  text-align: center;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  font-size: 20px;
}
.wins {
  text-align: center;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  font-size: 50px;
  align-self: center;
}
.vcard_title {
  font-family: "Teko", sans-serif;
  font-size: 30px;
  color: #033949;
}
</style>
