import React from "react";
import { Button, CardText, Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";
import { Map } from "../maps/LocationMap";

const EventModal = ({ event, showModal, toggleModal }) => {
  const mapModal = (eventData, i) => {
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
          <Map
            googleMapURL={process.env.REACT_APP_GOOGLE_API_KEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            latitude={eventData.venue.lat}
            longitude={eventData.venue.lon}
            zoom={12}
            coords={[
              {
                latitude: eventData.venue.lat,
                longitude: eventData.venue.lon
              }
            ]}
          />
          <Button className="cfknnv5ov4 mt-3" onClick={toggleModal}>
            Close
          </Button>
        </ModalBody>
      </Modal>
    );
  };

  return <>{event.map(mapModal)}</>;
};
export default EventModal;

EventModal.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    yes_rsvp_count: PropTypes.number,
    rsvp_limit: PropTypes.number,
    waitlist_count: PropTypes.number,
    group: PropTypes.shape({
      who: PropTypes.string,
      localized_location: PropTypes.string
    }),
    venue: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
      address_1: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
      localized_country_name: PropTypes.string
    })
  }),
  showModal: PropTypes.func,
  toggleModal: PropTypes.func
};
