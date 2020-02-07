import React from "react";
import "./headers.css";
import HeaderImage from "../../../assets/backgroundImages/landingHeader.svg";

class HeaderSection extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="Joj4rLACj0 row m-0">
            <div className="col-xs-12 col-md-6">filler for text or image</div>
            <div className="col-xs-12 col-md-6">filler for text or image</div>
          </div>
          <img src={HeaderImage} alt="landingHeaderImage" />
        </section>
      </>
    );
  }
}
export default HeaderSection;
