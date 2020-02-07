import React from "react";
import { CardTitle, CardBody, CardText, Button } from "reactstrap";
import PropTypes from "prop-types";
import { Logger } from "aws-amplify";

const logger = new Logger("App");
window.LOG_LEVEL = "DEBUG";

const wordCount = description => {
  let newStr = description
    .split(" ")
    .splice(0, 25)
    .join(" ");
  return newStr;
};

const EventCardTemplate = ({ eventData, viewRSVP }) => {
  logger.info(eventData);
  return (
    <div className="col-xs-12 col-md-4 p-0">
      <div className="col-12 yg7pERdUU6">
        <div className="shadow-none overflow-hidden text-center">
          <CardBody>
            <CardTitle className="MzFUpnbWQ7">{eventData.name}</CardTitle>
            <CardText>{wordCount(eventData.description)}</CardText>
            <div className="row">
              <div className="OjLcyhcRhT col-4">Limit</div>
              <div className="OjLcyhcRhT col-4">Count</div>
              <div className="OjLcyhcRhT col-4">Waitlist</div>
              <CardText className="col-4">{eventData.rsvp_limit}</CardText>
              <CardText className="col-4">{eventData.yes_rsvp_count}</CardText>
              <CardText className="col-4">{eventData.waitlist_count}</CardText>
            </div>
            <Button
              id={eventData.id}
              className="btn btn-dark cfknnv5ov4"
              onClick={viewRSVP}
            >
              View More
            </Button>
          </CardBody>
        </div>
      </div>
    </div>
  );
};
export default EventCardTemplate;
EventCardTemplate.propTypes = {
  eventData: PropTypes.shape({
    rsvp_limit: PropTypes.number,
    yes_rsvp_count: PropTypes.number,
    waitlist_count: PropTypes.number
  }),
  viewRSVP: PropTypes.func
};
