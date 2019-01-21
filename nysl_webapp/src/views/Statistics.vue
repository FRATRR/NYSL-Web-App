<template>

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
  }
};
</script>



<style scoped>
</style>
