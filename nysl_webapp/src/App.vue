<template>

  <v-app style="background-color: #D9D9D6;">

    <template>

      <v-layout row>
        <v-flex>
          <v-container>
            <v-layout>
              <v-btn
                dark
                icon
                @click.stop="drawer = !drawer"
              >
                <v-icon color="#033949">menu</v-icon>
              </v-btn>
            </v-layout>
          </v-container>

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
          >
            <v-layout
              align-center
              justify-center
              class="logo_drawer"
            >
              <img src="./assets/nysl_logo.png">
            </v-layout>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :to='item.path'
            >
              <v-layout
                align-center
                justify-center
              >
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-layout>

            </v-list-tile>

          </v-navigation-drawer>
        </v-flex>

        <div class="nysl_title">

          <h1>Northside Youth Soccer League</h1>

        </div>
      </v-layout>
    </template>
    <router-view />
    </v-content>

    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      fixed
      color="#033949;"
    >

      <v-btn
        flat
        color=#5a59d8
        to="/"
      >
        <span>Home</span>
        <v-icon color=#002661>home</v-icon>
      </v-btn>

      <v-btn
        flat
        color=#5a59d8
        to="/schedule"
      >
        <span>Schedule</span>
        <v-icon color=#002661>calendar_today</v-icon>
      </v-btn>

      <v-btn
        flat
        color=#5a59d8
        to="/statistics"
      >
        <span>Stats</span>
        <v-icon color=#002661>insert_chart</v-icon>
      </v-btn>
      <v-btn
        flat
        color=#5a59d8
        to="/profile"
      >
        <span>Profile</span>
        <v-icon color=#002661>account_box</v-icon>
      </v-btn>
    </v-bottom-nav>
    </div>

  </v-app>

</template>

<script>
import Home from "./views/Home.vue";
export default {
  components: {
    Home
  },
  data() {
    return {
      drawer: null,
      activeBtn: 1,
      showNav: true,
      items: [
        { title: "About NYSL", icon: "fingerprint", path: "/about" },
        { title: "Contact Us", icon: "email", path: "/contacts" },
        { title: "FIFA Rules", icon: "library_books", path: "/rules" }
      ]
    };
  }
};
</script>

</<style scoped>
@import url("https://fonts.googleapis.com/css?family=Teko");
@import url("https://fonts.googleapis.com/css?family=Montserrat");

.nysl_title {
  color: #033949 ;
  text-align: center;
}
.nysl_title h1{
  align-self: center;
  font-family: "Teko", sans-serif;
  font-size: 25px;

}
.logo_drawer{
margin: 2%;
}

.layout{
flex: 0 0 auto;
}

</style>

