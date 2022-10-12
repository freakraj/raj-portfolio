import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container text-center">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/raj.gautam.92560">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCUWTCDU1j9Yi3TpkB8Kh3Yw">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Raj Gautam</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Raj Gautam Dev",
                    2000,
                    "Frontent Developer",
                    2000,
                    "MERN Stack Dev",
                    2000,
                    "Cross Platform Dev",
                    2000,
                    "React/JavaScript(Python) Dev",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building application with frontend and backend operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              type="button"
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="RajGautam_Resume.pdf" download="RajGautam_resume.pdf">
              <button className="btn highlighted-btn ">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
