<template>

  <v-container>

    <v-layout
      class="vcard_title"
      justify-center
    >
      <h2>Upcoming Matches</h2>
    </v-layout>
    <v-card
      v-for="match in currentMatch"
      :key="match.id"
      :to="`/match/${match.id}`"
      class="matches_vcard"
    >
      <div>
        <div>
          <h2> {{match.date}}
          </h2>
        </div>
        <div>
          <v-layout row>
            <v-layout
              align-center
              column
            >
              <v-avatar><img :src="require(`@/assets/${getLogo(match.home_team)}`)" /></v-avatar>
              <h5>{{match.home_team}}</h5>
            </v-layout>
            <div class="vs_txt">
              <h5>VS</h5>
            </div>
            <v-layout
              align-center
              column
            >
              <v-avatar><img :src="require(`@/assets/${getLogo(match.away_team)}`)" /></v-avatar>

              <h5> {{match.away_team}}</h5>
            </v-layout>
          </v-layout>
        </div>
      </div>
    </v-card>

  </v-container>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["matches", "teams", "clubs"]),
    currentMatch() {
      return this.matches;
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

.matches_vcard {
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
.matches_vcard h5 {
  font-family: "Montserrat", sans-serif;
  color: white;
  font-size: 13px;
}

.vcard_title {
  font-family: "Teko", sans-serif;
}
.vs_txt {
  align-self: center;
}
</style>
