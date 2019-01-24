<template>
  <div class="body">
    <v-layout
      justify-center
      column
    >
      <!-- // <v-card :to="`/club/${name}`">GOD DAMN IT WORK</v-card> -->
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
    ...mapState(["results", "clubs", "teams"]),

    currentClub() {
      return this.clubs.find(obj => obj.name === this.name);
    }
  }
};
</script>


<style scoped>
.body {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
