import axios from "axios";
import * as serviceHelper from "./serviceHelper";
// SAMPLE URLS
// https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1
// https://api.meetup.com/reactjs-dallas/events/qpxxkrybcdbpb/rsvps?&sign=true&photo-host=public

const endpointRoot = serviceHelper.API_HOST_PREFIX + "/events";
//serviceHelper line 43 API_HOST_PREFIX changed...

const getEvents = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Origin": "http://localhost:3000/",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json"
    },
    method: "GET",
    // withCredentials: true,
    mode: "cors",
    // url: `${endpointRoot}?&sign=true&photo-host=public&page=${eventQuantity}`,
    url: `${endpointRoot}/reactjs-dallas/events?&sign=true&photo-host=public&page=20`,
    crossdomain: true
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getRSVPById = eventId => {
  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Origin": "http://localhost:3000/",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json"
    },
    method: "GET",
    // withCredentials: true,
    mode: "cors",
    url: `${endpointRoot}/${eventId}/rsvps?&sign=true&photo-host=public`,
    crossdomain: true
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export { getEvents, getRSVPById };
