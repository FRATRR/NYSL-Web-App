<template>
  <div class="body">

    <v-layout
      class="vcard_title"
      justify-center
    >
      <h2>Results</h2>
    </v-layout>
    <v-card
      v-for="result in currentResults"
      :key="result.id"
      :to="`/result/${result.home_team}-${result.away_team}`"
      class="results_vcard"
    >
      <div>
        <div>
          <h2>{{result.date}}</h2>
        </div>
        <div>
          <v-layout row>
            <v-layout
              align-center
              column
            >
              <v-avatar><img :src="require(`@/assets/${getLogo(result.home_team)}`)" /></v-avatar>
              <h5>{{result.home_team}}</h5>
            </v-layout>
            <div class="vs_txt">
              <h5>VS</h5>
            </div>
            <v-layout
              align-center
              column
            >
              <v-avatar><img :src="require(`@/assets/${getLogo(result.away_team)}`)" /></v-avatar>
              <h5> {{result.away_team}}</h5>
            </v-layout>
          </v-layout>
        </div>
      </div>
    </v-card>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["results", "matches", "teams", "clubs"]),
    currentResults() {
      return this.results;
    }
  },
  methods: {
    getLogo(teamName) {
      var str = this.teams.find(obj => obj.name === teamName);

      return str.logo;
    }
  },

  watch: {}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
@import url("https://fonts.googleapis.com/css?family=Teko");
.body {
  margin-top: 100px;
  margin-bottom: 100px;
}
.result_display {
  background-color: #ecf0f1;
  color: #033949;
  text-align: center;
}
.display_title {
  color: #ecf0f1;
  text-align: center;
  padding: 2%;
}
.results_vcard {
  margin: 3%;
  padding: 3%;
  background-color: #0abcf9;
  background-image: linear-gradient(315deg, #0abcf9 0%, #2c69d1 74%);
  color: white;
  border-radius: 10px;
  font-family: "Teko", sans-serif;
  text-align: center;
  color: white;
  font-size: 15px;
}
.results_vcard h5 {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 13px;
}

.vcard_title {
  font-family: "Teko", sans-serif;
  font-size: 30px;
  color: #033949;
}
.vs_txt {
  align-self: center;
}
</style>
