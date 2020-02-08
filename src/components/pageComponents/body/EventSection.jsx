import React from "react";
import "./body.css";
import * as eventServices from "../../../services/eventService";
import EventCardTemplate from "./EventCardTemplate";
import eventBoard from "../../../assets/pageIllustrations/eventBoard.svg";
import EventModal from "../../../components/pageComponents/modals/EventModal";
import { Logger } from "aws-amplify";

const logger = new Logger("App");
window.LOG_LEVEL = "DEBUG";

const eventData = [
  {
    created: 1507747389000,
    duration: 7200000,
    id: "qpxxkrybcdbpb",
    name: "ReactJS @ Dialexa",
    rsvp_limit: 90,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1581467400000,
    local_date: "2020-02-11",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1580433193000,
    utc_offset: -21600000,
    waitlist_count: 150,
    yes_rsvp_count: 90,
    venue: {
      id: 26067179,
      name: "Dialexa",
      lat: 32.78167724609375,
      lon: -96.79048919677734,
      repinned: true,
      address_1: "2200 Commerce St",
      city: "Dallas",
      country: "us",
      localized_country_name: "USA",
      zip: "75201",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/qpxxkrybcdbpb/",
    description:
      "Sponsored by **Dialexa** We once again visit our friends at Dialexa deep in the heart of Dallas! 6:15 - 6:30pm: Networking/Drinks/ Food 6:30 - 6:45pm: Jobs Open Mic 6:45 - 7:00pm: Jobs follow-up 7:00pm: Welcome from our sponsor 7:05 - 8:30pm: Speakers • Lucy McGuigan – Stack, and Switch, and Tab, Oh My! - Finding Your Way with React Navigation • Scott Haley - RxJS in React • Doug Lasater – TBD 8:30pm: Close of event -------- Handling routing and navigation is one of the most critical aspects to master when making the leap from web development with React to mobile development with React Native. Enter React Navigation, a powerful tool for structuring the navigation flow of your React Native app. In this session, we’ll take a look at the basic navigator types available through the React Navigation API, some options for configuration, and navigating and passing data between screens. Using an example project with pre-built screens, we will go from a roadmap of app flow to fully functional navigation. You’ll walk away knowing how to create and configure Stack, Switch, and MaterialTopTab navigators and how to use the navigation prop within your screen components. Lucy McGuigan is a Front-End Engineer at Alto, a ride-hailing startup in Dallas, where she works on cross-platform mobile applications in React Native. Lucy is passionate about the intersection of design and software development, and how elegant user interfaces can structure great user experiences. Before becoming a developer, her professional career included teaching high school math as a Teach for America Corps Member, art historical scholarship (M.A., SMU), graphic design and digital illustration work, various roles in exhibitions and collections, and grant-writing and organizational development in the nonprofit Community Design sphere. These diverse and varied experiences lend a unique perspective to her work, which is driven and informed by a desire to leverage technology to help people explore their world and expand their horizons. -------- Scott Haley is a full-stack engineer at Dialexa. He has a passion for product design and innovation and has experience in many different fields of development including web, mobile, AR/VR, and game development. Outside of coding, Scott spends his time playing games (video, board, and sports), cooking, and taking pictures of his cat. -------- Doug Lasater is a full-stack engineer at Dialexa with a frontend focus. He is interested in React/Vue, frontend architecture, and baby yoda. -------- Parking Follow this link to have a bird's eye view of the closest parking garage to Dialexa.",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1573148914000,
    duration: 7200000,
    id: "mrkxmrybcfbnb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1583883000000,
    local_date: "2020-03-10",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050781000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 1,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcfbnb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1573148914000,
    duration: 7200000,
    id: "mrkxmrybcgbsb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1586907000000,
    local_date: "2020-04-14",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 1,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcgbsb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1573148914000,
    duration: 7200000,
    id: "mrkxmrybchbqb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1589326200000,
    local_date: "2020-05-12",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 1,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybchbqb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1507747389000,
    duration: 7200000,
    id: "mrkxmrybcjbmb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1591745400000,
    local_date: "2020-06-09",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 1,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcjbmb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybckbsb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1594769400000,
    local_date: "2020-07-14",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybckbsb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybclbpb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1597188600000,
    local_date: "2020-08-11",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybclbpb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybcmblb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1599607800000,
    local_date: "2020-09-08",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcmblb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybcnbrb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1602631800000,
    local_date: "2020-10-13",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -18000000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcnbrb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybcpbnb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1605054600000,
    local_date: "2020-11-10",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -21600000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcpbnb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrybcqblb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1607473800000,
    local_date: "2020-12-08",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -21600000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrybcqblb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  },
  {
    created: 1579050782000,
    duration: 7200000,
    id: "mrkxmrycccbqb",
    name: "ReactJS Dallas meetup",
    rsvp_limit: 40,
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1610497800000,
    local_date: "2021-01-12",
    local_time: "18:30",
    rsvp_open_offset: "PT672H",
    rsvp_close_offset: "PT1H45M",
    updated: 1579050782000,
    utc_offset: -21600000,
    waitlist_count: 0,
    yes_rsvp_count: 0,
    venue: {
      id: 26392293,
      name: "Call-Em-All",
      lat: 33.11103820800781,
      lon: -96.81715393066406,
      repinned: true,
      address_1: "3803 Parkwood Blvd Suite 900",
      city: "Frisco",
      country: "us",
      localized_country_name: "USA",
      zip: "75034",
      state: "TX"
    },
    group: {
      created: 1455206836000,
      name: "ReactJS Dallas",
      id: 19555115,
      join_mode: "open",
      lat: 32.790000915527344,
      lon: -96.80000305175781,
      urlname: "ReactJSDallas",
      who: "React Devs",
      localized_location: "Dallas, TX",
      state: "TX",
      country: "us",
      region: "en_US",
      timezone: "US/Central"
    },
    link: "https://www.meetup.com/ReactJSDallas/events/mrkxmrycccbqb/",
    description:
      "Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",
    visibility: "public",
    member_pay_fee: false
  }
];

class EventSection extends React.Component {
  state = {
    eventQuantity: 20,
    showModal: false
  };

  componentDidMount() {
    // this.getEvents(this.state.eventQuantity);
    this.getEventsSuccess(eventData);
  }

  getEvents = eventQuantity => {
    eventServices
      .getEvents(eventQuantity)
      .then(this.getEventsSuccess)
      .catch(this.onError);
  };

  getEventsSuccess = eventData => {
    this.setState({
      eventCards: eventData.map((event, i) => (
        <EventCardTemplate
          key={`eventCard_${i}`}
          eventData={event}
          viewRSVP={this.viewRSVP}
        />
      ))
    });
  };

  viewRSVP = e => {
    let { id } = e.target;
    let eventId = id;

    this.setState(prevState => ({
      showModal: !prevState.showModal,
      event: eventData
        .filter(({ id }) => {
          return id === eventId;
        })
        .map(rsvpEvent => {
          return rsvpEvent;
        })
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  onError = errResponse => {
    logger.debug(errResponse);
  };

  render() {
    return (
      <section className="mt-4">
        <div className="col-10 m-auto">
          <div className="col-10 col-md-5 cA2o7fyGq3">
            <img src={eventBoard} alt="eventBoardImage" />
          </div>
          <div className="row m-0 mt-3 mb-3">{this.state.eventCards}</div>
        </div>
        {this.state.showModal ? (
          <EventModal
            showModal={this.state.showModal}
            event={this.state.event}
            toggleModal={this.toggleModal}
          />
        ) : (
          " "
        )}
      </section>
    );
  }
}
export default EventSection;
