import React from "react";
import "./footer.css";
import Twitter from "../../../assets/icons/twitter.svg";
import FaceBook from "../../../assets/icons/facebook.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";

const getDate = () => {
  let firstYear = 2020;
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  if (firstYear === currentYear) {
    return currentYear;
  } else {
    return `${firstYear}-${currentYear}`;
  }
};

const ContentFooter = () => {
  return (
    <footer className="container-fluid mt-5 QrDkOQkJFp">
      <div className="col-12 col-lg-10 m-auto">
        <div className="row">
          <div className="col-xs-12 col-md-4 gMkfmzcfx2 text-center">
            The Event Horse
          </div>
          <div className="col-xs-12 col-md-4 d-xs-none d-md-block zvtxy2ZorX">
            <div className="row m-0">
              <div className="col-4">Event</div>
              <div className="col-4">Plan</div>
              <div className="col-4">People</div>
              <div className="col-4">Culture</div>
              <div className="col-4">Shop</div>
              <div className="col-4">Blog</div>
              <div className="col-4">Join</div>
              <div className="col-4">Browse</div>
              <div className="col-4">Help</div>
              <div className="col-4">
                <a href="/" className="eKovipmNBT">
                  Home
                </a>
              </div>
              <div className="col-4">FAQ</div>
              <div className="col-4">About</div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 p-4 text-center">
            <img src={Twitter} alt="twitterFooterIcon" height="50" />
            <img src={FaceBook} alt="twitterFooterIcon" height="50" />
            <img src={LinkedIn} alt="twitterFooterIcon" height="50" />
          </div>
        </div>
        <div className="row m-0 border-top">
          <div className="col-xs-12 col-md-6 text-center">
            <p>&copy; The Event Horse {getDate()}</p>
          </div>
          <div className="col col-md-2">
            <p className="V2gJWKRlxW">Privacy Policy</p>
          </div>
          <div className="col col-md-2">
            <p className="V2gJWKRlxW">Terms of Use</p>
          </div>
          <div className="col col-md-2">
            <p className="V2gJWKRlxW">Responsible Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default ContentFooter;
