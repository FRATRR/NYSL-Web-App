<template>
  <v-layout
    justify-center
    column
  >

    <v-layout row>

      <img :src="require(`@/assets/${currentClub.logo}`)" />

      <div class="club_name">

        <h3>{{currentClub.name}}</h3>

      </div>

    </v-layout>

    <v-icon>right_arrow</v-icon>

    <h3>Field</h3>

    <h3>{{currentClub.stadium}}</h3>

  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id", "name", "lastname"],

  data() {
    return {};
  },

  computed: {
    ...mapState(["results", "matches", "teams"]),

    currentClub() {
      return this.teams.find(obj => obj.name === this.name);
    }
  }
};
</script>


<style>
</style>
