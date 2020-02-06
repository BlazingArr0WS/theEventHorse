import axios from "axios";
import * as serviceHelper from "./serviceHelper";
// SAMPLE URLS
// https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=1
// https://api.meetup.com/reactjs-dallas/events/qpxxkrybcdbpb/rsvps?&sign=true&photo-host=public

const endpointRoot = serviceHelper.API_HOST_PREFIX + "/events";

const getEvents = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json"
    },
    crossorigin: true,
    method: "GET",
    // withCredentials: true,
    mode: "cors",
    // url: `${endpointRoot}?&sign=true&photo-host=public&page=${eventQuantity}`,
    url: `https://api.meetup.com/reactjs-dallas/events?&sign=true&photo-host=public&page=20`
    // crossdomain: true
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getRSVPById = eventId => {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    url: `${endpointRoot}/${eventId}/rsvps?&sign=true&photo-host=public`,
    crossdomain: true
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export { getEvents, getRSVPById };