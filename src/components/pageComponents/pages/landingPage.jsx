import React from "react";
import HeaderSection from "../headers/HeaderSection";
import EventSection from "../body/EventSection";
import ContactSection from "../body/ContactSection";
import ContentFooter from "../footers/ContentFooter";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <HeaderSection />
        <EventSection />
        <ContactSection />
        <ContentFooter />
      </>
    );
  }
}
export default LandingPage;
