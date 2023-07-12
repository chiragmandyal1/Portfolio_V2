import copy from "copy-to-clipboard";
import React from "react";
import toast from "react-hot-toast";
import home from "./images/home.png";

const notify = (e) => {
  if (e === "email") {
    toast("Email ID is copied to your clipboard");
  } else {
    toast("PhoneNo. is copied to your clipboard");
  }
};

export default function Home() {
  const copyEmailToClipboard = () => {
    copy("chiragmandyal82@gmail.com");
    notify("email");
  };
  const copyPhoneToClipboard = () => {
    copy("8219600177");
    notify("phone");
  };
  return (
    <div
      className="main-home"
      style={{
        paddingTop: "10%",
      }}
    >
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-sm-6">
            <div className="home-image-box">
              <img
                src={home}
                className="img-fluid"
                alt="React Image"
                style={{ padding: "1vh", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-sm-6" style={{ textAlign: "start" }}>
            <p>Hi , i'm</p>
            <h1>Chirag Mandyal</h1>
            <h1>Front-End Developer</h1>
            <p>
              Enthusiastic and motivated self-learning in Information
              Technology, interested in exploring about Web Development.
              Currently i am looking to get more experience in my field.
            </p>
            <i
              className="bi bi-envelope-fill"
              onClick={() => copyEmailToClipboard()}
            ></i>
            <i
              className="bi bi-telephone-fill"
              onClick={() => copyPhoneToClipboard()}
            ></i>
            <a href="https://github.com/WhySoOpKratos">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/chirag-mandyal-543575152/">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://wa.me/+91 9882724284">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
