import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [
      {
        id: "1",
        date: "August 4th ",
        home_team: "Hawks",
        away_team: "Wolves",
        home_score: "1",
        away_score: "1",
        home_shots_on_goal: "3",
        away_shots_on_goal: "4",
        home_shots: "10",
        away_shots: "13",
        home_fouls: "18",
        away_fouls: "14",
        home_corners: "9",
        away_corners: "9",
        home_freekicks: "2",
        away_freekicks: "0",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "0",
        away_yellowcard: "1",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "2",
        date: "August 4th ",
        home_team: "Owls",
        away_team: "Hawks",
        home_score: "0",
        away_score: "2",
        home_shots_on_goal: "3",
        away_shots_on_goal: "4",
        home_shots: "9",
        away_shots: "7",
        home_fouls: "18",
        away_fouls: "23",
        home_corners: "10",
        away_corners: "3",
        home_freekicks: "0",
        away_freekicks: "2",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "2",
        away_yellowcard: "2",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "3",
        date: "August 11th ",
        home_team: "Rhinos",
        away_team: "Hawks",
        home_score: "0",
        away_score: "1",
        home_shots_on_goal: "7",
        away_shots_on_goal: "4",
        home_shots: "14",
        away_shots: "5",
        home_fouls: "18",
        away_fouls: "18",
        home_corners: "9",
        away_corners: "6",
        home_freekicks: "2",
        away_freekicks: "1",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "0",
        away_yellowcard: "2",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "4",
        date: "August 11th ",
        home_team: "Grizzlies",
        away_team: "Owls",
        home_score: "3",
        away_score: "2",
        home_shots_on_goal: "6",
        away_shots_on_goal: "4",
        home_shots: "14",
        away_shots: "7",
        home_fouls: "28",
        away_fouls: "14",
        home_corners: "5",
        away_corners: "8",
        home_freekicks: "1",
        away_freekicks: "2",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "0",
        away_yellowcard: "1",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "5",
        date: "August 18th",
        home_team: "Grizzlies",
        away_team: "Hawks",
        home_score: "1",
        away_score: "0",
        home_shots_on_goal: "4",
        away_shots_on_goal: "5",
        home_shots: "9",
        away_shots: "10",
        home_fouls: "24",
        away_fouls: "23",
        home_corners: "4",
        away_corners: "6",
        home_freekicks: "1",
        away_freekicks: "5",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "2",
        away_yellowcard: "0",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "6",
        date: "August 18th",
        home_team: "Wolves",
        away_team: "Rhinos",
        home_score: "1",
        away_score: "0",
        home_shots_on_goal: "5",
        away_shots_on_goal: "3",
        home_shots: "7",
        away_shots: "9",
        home_fouls: "27",
        away_fouls: "26",
        home_corners: "4",
        away_corners: "2",
        home_freekicks: "1",
        away_freekicks: "0",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "2",
        away_yellowcard: "3",
        home_red_card: "1",
        away_red_card: "0"
      },
      {
        id: "7",
        date: " July 28th",
        home_team: "Owls",
        away_team: "Wolves",
        home_score: "2",
        away_score: "1",
        home_shots_on_goal: "8",
        away_shots_on_goal: "6",
        home_shots: "8",
        away_shots: "6",
        home_fouls: "14",
        away_fouls: "21",
        home_corners: "4",
        away_corners: "4",
        home_freekicks: "0",
        away_freekicks: "0",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "1",
        away_yellowcard: "1",
        home_red_card: "0",
        away_red_card: "0"
      },
      {
        id: "8",
        date: "July 28th",
        home_team: "Hawks",
        away_team: "Mustangs",
        home_score: "3",
        away_score: "1",
        home_shots_on_goal: "9",
        away_shots_on_goal: "8",
        home_shots: "12",
        away_shots: "17",
        home_fouls: "14",
        away_fouls: "17",
        home_corners: "8",
        away_corners: "5",
        home_freekicks: "1",
        away_freekicks: "0",
        home_owngoal: "0",
        away_homegoal: "0",
        home_yellowcard: "1",
        away_yellowcard: "1",
        home_red_card: "0",
        away_red_card: "0"
      }
    ],
    matches: [
      {
        date: "1st Sept",
        hour: "9:30",
        home_team: "Wolves",
        away_team: "Owls",
        id: "1"
      },
      {
        date: "1st Sept",
        hour: "13:00",
        home_team: "Mustangs",
        away_team: "Hawks",
        id: "2"
      },
      {
        date: "8th Sept",
        hour: "9:30",
        home_team: "Rhinos",
        away_team: "Grizzlies",
        id: "3"
      },
      {
        date: "8th Sept",
        hour: "13:00",
        home_team: "Grizzlies",
        away_team: "Wolves",
        id: "4"
      },
      {
        date: "15th Sept",
        hour: "9:30",
        home_team: "Hawks",
        away_team: "Owls",
        id: "5"
      },
      {
        date: "15th Sept",
        hour: "13:00",
        home_team: "Mustangs",
        away_team: "Rhinos",
        id: "6"
      },
      {
        date: "22nd Sept",
        hour: "9:30",
        home_team: "Wolves",
        away_team: "Mustangs",
        id: "7"
      },
      {
        date: "22nd Sept",
        hour: "13:00",
        home_team: "Hawks",
        away_team: "Grizzlies",
        id: "8"
      },
      {
        date: "29th Sept",
        hour: "9:30",
        home_team: "Owls",
        away_team: "Rhinos",
        id: "9"
      },
      {
        date: "10th Oct",
        hour: "9:30",
        home_team: "Hawks",
        away_team: "Rhinos",
        id: "10"
      },
      {
        date: "10th Oct",
        hour: "13:00",
        home_team: "Wolves",
        away_team: "Grizzlies",
        id: "11"
      },
      {
        date: "13th Oct",
        hour: "9:30",
        home_team: "Mustangs",
        away_team: "Owls",
        id: "12"
      },
      {
        date: "13th Oct",
        hour: "13:00",
        home_team: "Rhinos",
        away_team: "Wolves",
        id: "13"
      },
      {
        date: "20th Oct",
        hour: "9:30",
        home_team: "Grizzlies",
        away_team: "Mustangs",
        id: "14"
      },
      {
        date: "20th Oct",
        hour: "13:00",
        home_team: "Owls",
        away_team: "Hawks",
        id: "15"
      },
      {
        date: "27th Oct",
        hour: "9:30",
        home_team: "Mustangs",
        away_team: "Wolves",
        id: "16"
      },
      {
        date: "27th Oct",
        hour: "13:00",
        home_team: "Grizzlies",
        away_team: "Rhinos",
        id: "17"
      },
      {
        date: "3rd Nov",
        hour: "9:30",
        home_team: "Owls",
        away_team: "Grizzlies",
        id: "18"
      },
      {
        date: "3rd Nov",
        hour: "13:00",
        home_team: "Rhinos",
        away_team: "Hawks",
        id: "19"
      },
      {
        date: "10th Nov",
        hour: "9:30",
        home_team: "Rhinos",
        away_team: "Owls",
        id: "20"
      },
      {
        date: "10th Nov",
        hour: "13:00",
        home_team: "Wolves",
        away_team: "Hawks",
        id: "21"
      },
      {
        date: "17th Nov",
        hour: "9:30",
        home_team: "Wolves",
        away_team: "Rhinos",
        id: "22"
      },
      {
        date: "17th Nov",
        hour: "13:00",
        home_team: "Mustangs",
        away_team: "Grizzlies",
        id: "23"
      }
    ],
    teams: [
      {
        name: "Wolves",
        logo: "wolves.png",
        stadium: "AJ Katzenmaier",
        stadium_location: " 24 W. Walton St., Chicago, IL 60610",
        location_url: "https://goo.gl/maps/t4L1g2EXeZp",
        jersey: "YOU DID IT",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      },
      {
        name: "Hawks",
        logo: "hawks.png",
        stadium: "Howard A Yeager Elementary",
        stadium_location: "2245 N. Southport Ave., Chicago, IL 60614",
        location_url: "https://goo.gl/maps/fCLXMfnZZWE2",
        jersey: "",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      },
      {
        name: "Mustangs",
        logo: "mustangs.png",
        stadium: "Greenbay Elementary",
        stadium_location: "1734 N. Orleans St., Chicago, IL 60614",
        location_url: "https://goo.gl/maps/AV2fYn3xqSG2",
        jersey: "",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      },
      {
        name: "Owls",
        logo: "owls.png",
        stadium: "Marjorie P Hart Elementary",
        stadium_location: "2625 N. Orchard St., Chicago, IL 60614",
        location_url: "https://goo.gl/maps/75Cv8YhSbUr",
        jersey: "",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      },
      {
        name: "Rhinos",
        logo: "rhinos.png",
        stadium: "South Elementary",
        stadium_location: "2101 N. Fremont St., Chicago, IL 60614",
        location_url: "https://goo.gl/maps/6S6S58ky9vD2",
        jersey: "",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      },
      {
        name: "Grizzlies",
        logo: "grizzlies.png",
        stadium: "North Elementary",
        stadium_location: "2101 N Fremont St, Chicago, IL 60614, USA",
        location_url: "https://goo.gl/maps/kmPf8BPVHDN2",
        jersey: "",
        mp: "",
        wins: 0,
        draws: "",
        losses: "",
        pts: ""
      }
    ],
    clubs: {
      Wolves: [
        {
          name: "John",
          lastname: "Bey",
          number: "23",
          position: "Forward"
        },
        {
          name: "Mike",
          lastname: "Jasik",
          number: "8",
          position: "Defender"
        },
        {
          name: "Stephan",
          lastname: "Marques",
          number: "15",
          position: "Goal Keeper"
        },
        {
          name: "Rico",
          lastname: "Evanoff",
          number: "32",
          position: "Midfielder"
        }
      ]
    }
  },
  getters: {
    RESULTS: state => {
      return state.results[0];
    }
  },
  mutations: {
    SETRESULTS(state, payload) {
      state.results[0].home_score = payload;
    }
  },
  actions: {}
});
