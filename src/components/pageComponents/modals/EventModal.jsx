import React from "react";
import { Button, CardText, Modal, ModalHeader, ModalBody } from "reactstrap";
// import { Map } from "../maps/LocationMap";
require("dotenv").config();
console.log(process.env);

const EventModal = ({ event, showModal, toggleModal }) => {
  const mapModal = (eventData, i) => {
    // let { lat, lon } = eventData;
    // let coordinates = {
    //   lat,
    //   lon,
    //   isMarkerShown: true
    // };
    // lat: 33.11103820800781
    // lon: -96.81715393066406
    return (
      <Modal key={`eventModal_${i}`} isOpen={showModal}>
        <ModalHeader>
          <b>{eventData.name ? eventData.name : " "}</b>{" "}
          <CardText>({eventData.status ? eventData.status : " "})</CardText>
          <CardText>
            <a
              href={eventData.link ? eventData.link : " "}
              style={{ color: "#f41940" }}
            >
              Website
            </a>
          </CardText>
        </ModalHeader>
        <ModalBody>
          <CardText>
            <b>Event Description</b>
          </CardText>
          <CardText>
            {eventData.description ? eventData.description : " "}
          </CardText>
          <div className="row">
            <div className="col-4">Limit</div>
            <div className="col-4">Count</div>
            <div className="col-4">Waitlist</div>
            <CardText className="col-4">
              {eventData.rsvp_limit ? eventData.rsvp_limit : " "}
            </CardText>
            <CardText className="col-4">
              {eventData.yes_rsvp_count
                ? eventData.yes_rsvp_count
                : eventData.yes_rsvp_count === 0
                ? "0"
                : " "}
            </CardText>
            <CardText className="col-4">
              {eventData.waitlist_count
                ? eventData.waitlist_count
                : eventData.waitlist_count === 0
                ? "0"
                : " "}
            </CardText>
          </div>
        </ModalBody>
        <ModalHeader>Group</ModalHeader>
        <ModalBody>
          <CardText>
            <b>Who:</b> {eventData.group.who ? eventData.group.who : " "}
          </CardText>
          <CardText>
            <b>From:</b>{" "}
            {eventData.group.localized_location
              ? eventData.group.localized_location
              : " "}
          </CardText>
        </ModalBody>
        <ModalHeader>Venue</ModalHeader>
        <ModalBody>
          <CardText>
            <b>Name:</b> {eventData.group.who ? eventData.group.who : " "}
          </CardText>
          <CardText>
            <b>Address:</b>{" "}
            {eventData.venue.address_1 ? eventData.venue.address_1 : " "},{" "}
            {eventData.venue.city ? eventData.venue.city : " "},{" "}
            {eventData.venue.state ? eventData.venue.state : " "},
            {eventData.venue.zip ? eventData.venue.zip : " "},{" "}
            {eventData.venue.localized_country_name
              ? eventData.venue.localized_country_name
              : " "}
          </CardText>
          {/* <iframe
            title="eventMap"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13315.703089314235!2d-117.60844799999998!3d33.451240350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf39bdfb67a35%3A0x2216b9be49e4c809!2sLowe's%20Home%20Improvement!5e0!3m2!1sen!2sus!4v1581130768753!5m2!1sen!2sus`}
            width={400}
            height={300}
            frameBorder={0}
            style={{ border: 0 }}
            allowFullScreen
          /> */}
          {/* <Map
            location={coordinates}
            // googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
            googleMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13315.703089314235!2d-117.60844799999998!3d33.451240350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcf39bdfb67a35%3A0x2216b9be49e4c809!2sLowe's%20Home%20Improvement!5e0!3m2!1sen!2sus!4v1581130768753!5m2!1sen!2sus"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
          <Button className="cfknnv5ov4" onClick={toggleModal}>
            Close
          </Button>
        </ModalBody>
      </Modal>
    );
  };

  return <>{event.map(mapModal)}</>;
};
export default EventModal;
