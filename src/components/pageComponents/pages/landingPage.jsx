import React from "react";
import HeaderSection from "../headers/HeaderSection";
import EventSection from "../body/EventSection";
import ContactSection from "../body/ContactSection";
import ContentFooter from "../footers/ContentFooter";
import ImageFooter from "../footers/ImageFooter";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <HeaderSection />
        <EventSection />
        <ContactSection />
        <ContentFooter />
        <ImageFooter />
      </>
    );
  }
}
export default LandingPage;
