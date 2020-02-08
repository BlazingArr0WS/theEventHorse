import React from "react";
import "./headers.css";
import HeaderImage from "../../../assets/backgroundImages/landingHeader.svg";
import Calendar from "../../../assets//pageIllustrations/calendar.svg";
import socialLife from "../../../assets//pageIllustrations/socialLife.svg";

class HeaderSection extends React.Component {
  render() {
    return (
      <>
        <section className="rWesMyqFTI">
          <div className="Joj4rLACj0 row m-0">
            <div className="col-xs-12 col-md-6">
              <img src={Calendar} alt="calendarHeader" />
            </div>
            <div className="col-xs-12 col-md-6">
              <img
                src={socialLife}
                alt="calendarHeader"
                className="D8lWNub0b4 mt-5"
              />
            </div>
            <div className="col-xs-12 col-md-6 EUJuhkiwnB">
              <h2>Hello!</h2>
              <h4>Take a look around.</h4>
            </div>
          </div>
          <img src={HeaderImage} alt="landingHeaderImage" />
        </section>
      </>
    );
  }
}
export default HeaderSection;
