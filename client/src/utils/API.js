// This code is meant to serve as a mock fetch from an API.
export const getDeveloper = () =>
  new Promise(function (resolve) {
    setTimeout(() => {
      resolve({
        fullname: 'Diego Lehyt',
        email: 'diegolehy00@gmail.com',
        username: 'diegolehyt',
        password: '111111',
        myteam: [
          {
            id: 1,
            name: "MESSI",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/158023.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/52.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/241.png",
            position: "CF",
            rating_overall: "99",
            rating_pace: "97",
            rating_shooting: "99" ,
            rating_passing: "98",
            rating_dribbling: "99",
            rating_defense: "45",
            rating_physical: "85"
          },
          {
            id: 2,
            name: "RONALDO",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/20801.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/38.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/45.png",
            position: "ST",
            rating_overall: "99",
            rating_pace: "97",
            rating_shooting: "99" ,
            rating_passing: "95",
            rating_dribbling: "98",
            rating_defense: "50",
            rating_physical: "95"
          },
          {
            id: 3,
            name: "MBAPPÉ",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/231747.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/18.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/73.png",
            position: "RW",
            rating_overall: "97",
            rating_pace: "99",
            rating_shooting: "96" ,
            rating_passing: "92",
            rating_dribbling: "97",
            rating_defense: "54",
            rating_physical: "90"
          },
          {
            id: 4,
            name: "NEYMAR JR",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/190871.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/54.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/73.png",
            position: "CAM",
            rating_overall: "98",
            rating_pace: "98",
            rating_shooting: "96" ,
            rating_passing: "95",
            rating_dribbling: "99",
            rating_defense: "50",
            rating_physical: "86"
          },
          {
            id: 5,
            name: "POGBA",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/195864.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/18.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/11.png",
            position: "CM",
            rating_overall: "95",
            rating_pace: "84",
            rating_shooting: "91" ,
            rating_passing: "97",
            rating_dribbling: "95",
            rating_defense: "81",
            rating_physical: "94"
          },
          {
            id: 6,
            name: "DE BRUYNE",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/192985.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/7.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/10.png",
            position: "CAM",
            rating_overall: "97",
            rating_pace: "87",
            rating_shooting: "96" ,
            rating_passing: "99",
            rating_dribbling: "96",
            rating_defense: "78",
            rating_physical: "92"
          },
          {
            id: 7,
            name: "KROOS",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/182521.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/21.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png",
            position: "CM",
            rating_overall: "91",
            rating_pace: "68",
            rating_shooting: "83" ,
            rating_passing: "90",
            rating_dribbling: "83",
            rating_defense: "75",
            rating_physical: "70"
          },
          {
            id: 8,
            name: "SERGIO RAMOS",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/155862.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/45.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/243.png",
            position: "CB",
            rating_overall: "97",
            rating_pace: "85",
            rating_shooting: "80" ,
            rating_passing: "89",
            rating_dribbling: "89",
            rating_defense: "98",
            rating_physical: "96"
          },
          {
            id: 9,
            name: "VAN DIJK",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/203376.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/34.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/9.png",
            position: "CB",
            rating_overall: "96",
            rating_pace: "86",
            rating_shooting: "76" ,
            rating_passing: "86",
            rating_dribbling: "88",
            rating_defense: "97",
            rating_physical: "99"
          },
          {
            id: 10,
            name: "THIAGO SILVA",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/164240.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/54.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/73.png",
            position: "CB",
            rating_overall: "95",
            rating_pace: "80",
            rating_shooting: "65" ,
            rating_passing: "85",
            rating_dribbling: "84",
            rating_defense: "95",
            rating_physical: "90"
          },
          {
            id: 11,
            name: "NEUER",
            player_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/167495.png",
            nation_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/21.png",
            club_image: "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/21.png",
            position: "GK",
            rating_overall: "91",
            rating_diving: "92",
            rating_handling: "89" ,
            rating_kicking: "92",
            rating_reflexes: "89",
            rating_speed: "55",
            rating_positioning: "89"
          }
        ]
      })
    }, 1000)
  })