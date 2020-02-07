import React from "react";
import PostCard from "../../../assets/pageIllustrations/postCard.svg";
import "./body.css";
import ContactModal from "../modals/ContactModal";

//////////////////////////////////////////////
// https://blog.mailtrap.io/react-send-email/#Sending_emails_with_pure_React
//////////////////////////////////////////////

class ContactSection extends React.Component {
  state = {
    formData: []
  };

  onChange = e => {
    let { name, value } = e.target;
    this.setState(prevState => {
      let formData = prevState.formData;
      formData[name] = value;
      return formData;
    });
  };

  submitForm = e => {
    e.preventDefault();
    console.log(this.state.formData);
    this.state.formData.map(contactInfo => (
      <ContactModal contactInfo={contactInfo} />
    ));
    alert("Hello! I am an alert box!");
    document.getElementById("contact-form").reset();
  };

  render() {
    return (
      <>
        <section className="wwZ2Vc6bYR col-10 m-auto p-0">
          <div className="row m-0">
            <div className="col-8" style={{ position: "absolute" }}>
              <form
                id="contact-form"
                method="post"
                // action="https://blazingarr0ws.github.io/theEventHorse/"
                name="contactform"
                className="m-auto"
              >
                <fieldset className="EMkcydUhu0">
                  <div className="pl-2 yyCQwHjJDp">From:</div>
                  <div>
                    <br className="JfqAAkqS9g" />
                    <label
                      htmlFor="name"
                      className="BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"
                    >
                      Your Name<span className="required">* </span>
                    </label>
                    <input
                      onChange={this.onChange}
                      className="ks6cOKBHyU col-xs-9 col-md-8"
                      name="name"
                      type="text"
                      id="name"
                      size={30}
                    />
                  </div>
                  <div>
                    <br className="JfqAAkqS9g" />
                    <label
                      htmlFor="email"
                      className="BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"
                    >
                      Email<span className="required">* </span>
                    </label>
                    <input
                      onChange={this.onChange}
                      name="email"
                      type="email"
                      id="email"
                      size={30}
                      defaultValue={""}
                      className="ks6cOKBHyU col-xs-9 col-md-8"
                    />
                  </div>
                  <br className="JfqAAkqS9g" />
                  <label
                    htmlFor="comments"
                    className="BfBrzbUawD col-xs-6 col-md-3 m-0 pl-2"
                  >
                    Message<span className="required">* </span>
                  </label>
                  <textarea
                    onChange={this.onChange}
                    name="comments"
                    cols={40}
                    rows={3}
                    id="comments"
                    defaultValue={""}
                    className="zHnAOMcgnk col-xs-9 col-md-8"
                  />
                  <div>
                    <button
                      type="button"
                      className="btn submit mt-2 t4EPfIFIEg BfBrzbUawD"
                      onClick={this.submitForm}
                    >
                      Send It!
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

          <img src={PostCard} alt="postCardImage" />
        </section>
      </>
    );
  }
}
export default ContactSection;
