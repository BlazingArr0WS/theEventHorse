(this.webpackJsonptheeventhorse=this.webpackJsonptheeventhorse||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/hamburger.bb600045.svg"},114:function(e,t,a){e.exports=a.p+"static/media/landingHeader.71977a80.svg"},115:function(e,t,a){e.exports=a.p+"static/media/calendar.e4f71b8f.svg"},116:function(e,t,a){e.exports=a.p+"static/media/socialLife.01b3a471.svg"},122:function(e,t,a){e.exports=a.p+"static/media/eventBoard.1fddd41f.svg"},123:function(e,t,a){e.exports=a.p+"static/media/postCard.89a1cfb3.svg"},124:function(e,t,a){e.exports=a.p+"static/media/twitter.becc81be.svg"},125:function(e,t,a){e.exports=a.p+"static/media/facebook.de7648ef.svg"},126:function(e,t,a){e.exports=a.p+"static/media/linkedin.5f510b1d.svg"},133:function(e,t,a){e.exports=a(551)},138:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},151:function(e,t,a){},548:function(e,t,a){},55:function(e,t){},551:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(37),r=a.n(l),s=(a(138),a(139),a(22)),c=a(23),i=a(26),u=a(24),m=a(25),d=a(129),p=(a(140),a(130)),v=a(552),f=a(553),h=a(554),b=a(555),y=a(556),_=a(557),g=(a(141),a(113)),w=a.n(g),E=function(){var e=Object(o.useState)(!0),t=Object(p.a)(e,2),a=t[0],l=t[1];return n.a.createElement(v.a,null,n.a.createElement(f.a,{href:"/",className:"mr-auto gMkfmzcfx2"},"The Event Horse"),n.a.createElement("img",{src:w.a,onClick:function(){return l(!a)},className:"navbar-toggler",height:"40",alt:"navbarToggler"}),n.a.createElement(h.a,{isOpen:!a,navbar:!0},n.a.createElement(b.a,{navbar:!0,className:"h2N1FIQlJu"},n.a.createElement(y.a,null,n.a.createElement(_.a,{href:"https://www.linkedin.com/in/dakotaharmon/"},"About")),n.a.createElement(y.a,null,n.a.createElement(_.a,{href:"https://github.com/BlazingArr0WS/theEventHorse"},"GitHub")))))},k=(a(151),a(114)),S=a.n(k),R=a(115),D=a.n(R),x=a(116),N=a.n(x),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"rWesMyqFTI"},n.a.createElement("div",{className:"Joj4rLACj0 row m-0"},n.a.createElement("div",{className:"col-xs-12 col-md-6"},n.a.createElement("img",{src:D.a,alt:"calendarHeader"})),n.a.createElement("div",{className:"col-xs-12 col-md-6"},n.a.createElement("img",{src:N.a,alt:"calendarHeader",className:"D8lWNub0b4 mt-5"})),n.a.createElement("div",{className:"col-xs-12 col-md-6 EUJuhkiwnB"},n.a.createElement("h2",null,"Hello!"),n.a.createElement("h4",null,"Take a look around."))),n.a.createElement("img",{src:S.a,alt:"landingHeaderImage"})))}}]),t}(n.a.Component),J=(a(73),a(29)),T=a.n(J);T.a.defaults.withCredentials=!0,T.a.interceptors.request.use((function(e){return e.withCredentials=!0,e}));var A=function(e){return e},I=function(e){return Promise.reject(e)};console.log("API_HOST_PREFIX","https://api.meetup.com");var U=function(){var e={headers:{"Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET","Content-Type":"application/json"},crossorigin:!0,method:"GET",mode:"cors",url:"".concat("https://api.meetup.com/events","/reactjs-dallas/events?&sign=true&photo-host=public&page=20")};return T()(e).then(A).catch(I)},C=a(48),O=a(558),j=a(559),M=a(560),P=a(561),F=new C.a("App");window.LOG_LEVEL="DEBUG";var H=function(e){var t=e.eventData,a=e.viewRSVP;return F.info(t),n.a.createElement("div",{className:"col-xs-12 col-md-4 p-0"},n.a.createElement("div",{className:"col-12 yg7pERdUU6"},n.a.createElement("div",{className:"shadow-none overflow-hidden text-center"},n.a.createElement(O.a,null,n.a.createElement(j.a,{className:"MzFUpnbWQ7"},t.name),n.a.createElement(M.a,null,t.description.split(" ").splice(0,25).join(" ")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"OjLcyhcRhT col-4"},"Limit"),n.a.createElement("div",{className:"OjLcyhcRhT col-4"},"Count"),n.a.createElement("div",{className:"OjLcyhcRhT col-4"},"Waitlist"),n.a.createElement(M.a,{className:"col-4"},t.rsvp_limit),n.a.createElement(M.a,{className:"col-4"},t.yes_rsvp_count),n.a.createElement(M.a,{className:"col-4"},t.waitlist_count)),n.a.createElement(P.a,{id:t.id,className:"btn btn-dark cfknnv5ov4",onClick:a},"View More")))))},B=a(122),X=a.n(B),q=a(564),G=a(562),L=a(563);a(545).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/theEventHorse",REACT_APP_GOOGLE_API_KEY:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCQHurErpXDh3Y89jvtzzv_O_3tYyoeptI"}));var V=function(e){var t=e.event,a=e.showModal,o=e.toggleModal;return n.a.createElement(n.a.Fragment,null,t.map((function(e,t){return n.a.createElement(q.a,{key:"eventModal_".concat(t),isOpen:a},n.a.createElement(G.a,null,n.a.createElement("b",null,e.name?e.name:" ")," ",n.a.createElement(M.a,null,"(",e.status?e.status:" ",")"),n.a.createElement(M.a,null,n.a.createElement("a",{href:e.link?e.link:" ",style:{color:"#f41940"}},"Website"))),n.a.createElement(L.a,null,n.a.createElement(M.a,null,n.a.createElement("b",null,"Event Description")),n.a.createElement(M.a,null,e.description?e.description:" "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},"Limit"),n.a.createElement("div",{className:"col-4"},"Count"),n.a.createElement("div",{className:"col-4"},"Waitlist"),n.a.createElement(M.a,{className:"col-4"},e.rsvp_limit?e.rsvp_limit:" "),n.a.createElement(M.a,{className:"col-4"},e.yes_rsvp_count?e.yes_rsvp_count:0===e.yes_rsvp_count?"0":" "),n.a.createElement(M.a,{className:"col-4"},e.waitlist_count?e.waitlist_count:0===e.waitlist_count?"0":" "))),n.a.createElement(G.a,null,"Group"),n.a.createElement(L.a,null,n.a.createElement(M.a,null,n.a.createElement("b",null,"Who:")," ",e.group.who?e.group.who:" "),n.a.createElement(M.a,null,n.a.createElement("b",null,"From:")," ",e.group.localized_location?e.group.localized_location:" ")),n.a.createElement(G.a,null,"Venue"),n.a.createElement(L.a,null,n.a.createElement(M.a,null,n.a.createElement("b",null,"Name:")," ",e.group.who?e.group.who:" "),n.a.createElement(M.a,null,n.a.createElement("b",null,"Address:")," ",e.venue.address_1?e.venue.address_1:" ",","," ",e.venue.city?e.venue.city:" ",","," ",e.venue.state?e.venue.state:" ",",",e.venue.zip?e.venue.zip:" ",","," ",e.venue.localized_country_name?e.venue.localized_country_name:" "),n.a.createElement(P.a,{className:"cfknnv5ov4",onClick:o},"Close")))})))},W=new C.a("App");window.LOG_LEVEL="DEBUG";var K=[{created:1507747389e3,duration:72e5,id:"qpxxkrybcdbpb",name:"ReactJS @ Dialexa",rsvp_limit:90,date_in_series_pattern:!1,status:"upcoming",time:15814674e5,local_date:"2020-02-11",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1580433193e3,utc_offset:-216e5,waitlist_count:150,yes_rsvp_count:90,venue:{id:26067179,name:"Dialexa",lat:32.78167724609375,lon:-96.79048919677734,repinned:!0,address_1:"2200 Commerce St",city:"Dallas",country:"us",localized_country_name:"USA",zip:"75201",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/qpxxkrybcdbpb/",description:"Sponsored by **Dialexa** We once again visit our friends at Dialexa deep in the heart of Dallas! 6:15 - 6:30pm: Networking/Drinks/ Food 6:30 - 6:45pm: Jobs Open Mic 6:45 - 7:00pm: Jobs follow-up 7:00pm: Welcome from our sponsor 7:05 - 8:30pm: Speakers \u2022 Lucy McGuigan \u2013 Stack, and Switch, and Tab, Oh My! - Finding Your Way with React Navigation \u2022 Scott Haley - RxJS in React \u2022 Doug Lasater \u2013 TBD 8:30pm: Close of event -------- Handling routing and navigation is one of the most critical aspects to master when making the leap from web development with React to mobile development with React Native. Enter React Navigation, a powerful tool for structuring the navigation flow of your React Native app. In this session, we\u2019ll take a look at the basic navigator types available through the React Navigation API, some options for configuration, and navigating and passing data between screens. Using an example project with pre-built screens, we will go from a roadmap of app flow to fully functional navigation. You\u2019ll walk away knowing how to create and configure Stack, Switch, and MaterialTopTab navigators and how to use the navigation prop within your screen components. Lucy McGuigan is a Front-End Engineer at Alto, a ride-hailing startup in Dallas, where she works on cross-platform mobile applications in React Native. Lucy is passionate about the intersection of design and software development, and how elegant user interfaces can structure great user experiences. Before becoming a developer, her professional career included teaching high school math as a Teach for America Corps Member, art historical scholarship (M.A., SMU), graphic design and digital illustration work, various roles in exhibitions and collections, and grant-writing and organizational development in the nonprofit Community Design sphere. These diverse and varied experiences lend a unique perspective to her work, which is driven and informed by a desire to leverage technology to help people explore their world and expand their horizons. -------- Scott Haley is a full-stack engineer at Dialexa. He has a passion for product design and innovation and has experience in many different fields of development including web, mobile, AR/VR, and game development. Outside of coding, Scott spends his time playing games (video, board, and sports), cooking, and taking pictures of his cat. -------- Doug Lasater is a full-stack engineer at Dialexa with a frontend focus. He is interested in React/Vue, frontend architecture, and baby yoda. -------- Parking Follow this link to have a bird's eye view of the closest parking garage to Dialexa.",visibility:"public",member_pay_fee:!1},{created:1573148914e3,duration:72e5,id:"mrkxmrybcfbnb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:1583883e6,local_date:"2020-03-10",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050781e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcfbnb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1573148914e3,duration:72e5,id:"mrkxmrybcgbsb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:1586907e6,local_date:"2020-04-14",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcgbsb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1573148914e3,duration:72e5,id:"mrkxmrybchbqb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15893262e5,local_date:"2020-05-12",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybchbqb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1507747389e3,duration:72e5,id:"mrkxmrybcjbmb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15917454e5,local_date:"2020-06-09",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:1,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcjbmb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybckbsb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15947694e5,local_date:"2020-07-14",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybckbsb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybclbpb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15971886e5,local_date:"2020-08-11",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybclbpb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybcmblb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:15996078e5,local_date:"2020-09-08",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcmblb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybcnbrb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:16026318e5,local_date:"2020-10-13",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-18e6,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcnbrb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybcpbnb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:16050546e5,local_date:"2020-11-10",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcpbnb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrybcqblb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:16074738e5,local_date:"2020-12-08",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrybcqblb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1},{created:1579050782e3,duration:72e5,id:"mrkxmrycccbqb",name:"ReactJS Dallas meetup",rsvp_limit:40,date_in_series_pattern:!1,status:"upcoming",time:16104978e5,local_date:"2021-01-12",local_time:"18:30",rsvp_open_offset:"PT672H",rsvp_close_offset:"PT1H45M",updated:1579050782e3,utc_offset:-216e5,waitlist_count:0,yes_rsvp_count:0,venue:{id:26392293,name:"Call-Em-All",lat:33.11103820800781,lon:-96.81715393066406,repinned:!0,address_1:"3803 Parkwood Blvd Suite 900",city:"Frisco",country:"us",localized_country_name:"USA",zip:"75034",state:"TX"},group:{created:1455206836e3,name:"ReactJS Dallas",id:19555115,join_mode:"open",lat:32.790000915527344,lon:-96.80000305175781,urlname:"ReactJSDallas",who:"React Devs",localized_location:"Dallas, TX",state:"TX",country:"us",region:"en_US",timezone:"US/Central"},link:"https://www.meetup.com/ReactJSDallas/events/mrkxmrycccbqb/",description:"Everyone has seen React in action. If you have used Facebook, Instagram, Airbnb, Dropbox, or IMDb, then you have used React. Our team at Call-Em-All created the popular open-source library Material-UI, and we use React every day. Bring your laptop with your favorite text editor, dig into the React docs to get started learning, and come ready with questions that we can tackle together. Pizza/drinks at 6:15pm and feel free to stay later for more conversations! --------- Join our Slack channel to tell us about your open jobs, upcoming events, fun blog posts, and code issues that Stack Overflow cannot solve! -------- If you want to support our fun and informative events, then you can now make a contribution to our ReactJS Dallas User Group open collective!",visibility:"public",member_pay_fee:!1}],Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={eventQuantity:20,showModal:!1},a.getEvents=function(e){U().then(a.getEventsSuccess).catch(a.onError)},a.getEventsSuccess=function(e){a.setState({eventCards:e.map((function(e,t){return n.a.createElement(H,{key:"eventCard_".concat(t),eventData:e,viewRSVP:a.viewRSVP})}))})},a.viewRSVP=function(e){var t=e.target.id;a.setState((function(e){return{showModal:!e.showModal,event:K.filter((function(e){return e.id===t})).map((function(e){return e}))}}))},a.toggleModal=function(){a.setState((function(e){return{showModal:!e.showModal}}))},a.onError=function(e){W.debug(e)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getEventsSuccess(K)}},{key:"render",value:function(){return n.a.createElement("section",{className:"mt-4"},n.a.createElement("div",{className:"col-10 m-auto"},n.a.createElement("div",{className:"col-10 col-md-5 cA2o7fyGq3"},n.a.createElement("img",{src:X.a,alt:"eventBoardImage"})),n.a.createElement("div",{className:"row m-0 mt-3 mb-3"},this.state.eventCards)),this.state.showModal?n.a.createElement(V,{showModal:this.state.showModal,event:this.state.event,toggleModal:this.toggleModal}):" ")}}]),t}(n.a.Component),Y=a(123),Z=a.n(Y),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={formData:[]},a.onChange=function(e){var t=e.target,o=t.name,n=t.value;a.setState((function(e){var t=e.formData;return t[o]=n,t}))},a.submitForm=function(e){e.preventDefault(),console.log(a.state.formData),alert("Hello! I am an alert box!"),document.getElementById("contact-form").reset()},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"wwZ2Vc6bYR col-10 m-auto p-0"},n.a.createElement("div",{className:"row m-0"},n.a.createElement("div",{className:"col-8",style:{position:"absolute"}},n.a.createElement("form",{id:"contact-form",method:"post",name:"contactform",className:"m-auto"},n.a.createElement("fieldset",{className:"EMkcydUhu0"},n.a.createElement("div",{className:"pl-2 yyCQwHjJDp"},"From:"),n.a.createElement("div",null,n.a.createElement("br",{className:"JfqAAkqS9g"}),n.a.createElement("label",{htmlFor:"name",className:"BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"},"Your Name",n.a.createElement("span",{className:"required"},"* ")),n.a.createElement("input",{onChange:this.onChange,className:"ks6cOKBHyU col-xs-9 col-md-8",name:"name",type:"text",id:"name",size:30})),n.a.createElement("div",null,n.a.createElement("br",{className:"JfqAAkqS9g"}),n.a.createElement("label",{htmlFor:"email",className:"BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"},"Email",n.a.createElement("span",{className:"required"},"* ")),n.a.createElement("input",{onChange:this.onChange,name:"email",type:"email",id:"email",size:30,defaultValue:"",className:"ks6cOKBHyU col-xs-9 col-md-8"})),n.a.createElement("br",{className:"JfqAAkqS9g"}),n.a.createElement("label",{htmlFor:"comments",className:"BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"},"Message",n.a.createElement("span",{className:"required"},"* ")),n.a.createElement("textarea",{onChange:this.onChange,name:"comments",cols:40,rows:3,id:"comments",defaultValue:"",className:"zHnAOMcgnk col-xs-9 col-md-8"}),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn submit mt-2 t4EPfIFIEg BfBrzbUawD",onClick:this.submitForm},"Send It!")))))),n.a.createElement("img",{src:Z.a,alt:"postCardImage"})))}}]),t}(n.a.Component),ee=(a(548),a(124)),te=a.n(ee),ae=a(125),oe=a.n(ae),ne=a(126),le=a.n(ne),re=function(){return n.a.createElement("footer",{className:"container-fluid mt-5 QrDkOQkJFp"},n.a.createElement("div",{className:"col-12 col-lg-10 m-auto"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-md-4 gMkfmzcfx2 text-center"},"The Event Horse"),n.a.createElement("div",{className:"col-xs-12 col-md-4 d-xs-none d-md-block zvtxy2ZorX"},n.a.createElement("div",{className:"row m-0"},n.a.createElement("div",{className:"col-4"},"Event"),n.a.createElement("div",{className:"col-4"},"Plan"),n.a.createElement("div",{className:"col-4"},"People"),n.a.createElement("div",{className:"col-4"},"Culture"),n.a.createElement("div",{className:"col-4"},"Shop"),n.a.createElement("div",{className:"col-4"},"Blog"),n.a.createElement("div",{className:"col-4"},"Join"),n.a.createElement("div",{className:"col-4"},"Browse"),n.a.createElement("div",{className:"col-4"},"Help"),n.a.createElement("div",{className:"col-4"},n.a.createElement("a",{href:"/",className:"eKovipmNBT"},"Home")),n.a.createElement("div",{className:"col-4"},"FAQ"),n.a.createElement("div",{className:"col-4"},n.a.createElement("a",{href:"/",className:"eKovipmNBT"},"About")))),n.a.createElement("div",{className:"col-xs-12 col-md-4 p-4 text-center"},n.a.createElement("img",{src:te.a,alt:"twitterFooterIcon",height:"50"}),n.a.createElement("img",{src:oe.a,alt:"facebookFooterIcon",height:"50"}),n.a.createElement("a",{href:"https://www.linkedin.com/in/dakotaharmon/"},n.a.createElement("img",{src:le.a,alt:"linkedInFooterIcon",height:"50"})))),n.a.createElement("div",{className:"row m-0 border-top"},n.a.createElement("div",{className:"col-xs-12 col-md-6 text-center"},n.a.createElement("p",null,"\xa9 The Event Horse ",function(){var e=(new Date).getFullYear();return 2020===e?e:"".concat(2020,"-").concat(e)}())),n.a.createElement("div",{className:"col col-md-2"},n.a.createElement("p",{className:"V2gJWKRlxW"},"Privacy Policy")),n.a.createElement("div",{className:"col col-md-2"},n.a.createElement("p",{className:"V2gJWKRlxW"},"Terms of Use")),n.a.createElement("div",{className:"col col-md-2"},n.a.createElement("p",{className:"V2gJWKRlxW"},"Responsible Use")))))},se=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null),n.a.createElement(Q,null),n.a.createElement($,null),n.a.createElement(re,null))}}]),t}(n.a.Component),ce=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(E,null),n.a.createElement(se,null)))}}]),t}(n.a.Component);r.a.render(n.a.createElement(ce,null),document.getElementById("root"))},73:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.18bff18e.chunk.js.map