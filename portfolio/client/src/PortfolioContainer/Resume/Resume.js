import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "HTML5", ratingPercentage: 85 },
    { skill: "CSS3", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 85 },
    { skill: "jQuery", ratingPercentage: 85 },
    // { skill: "React Native", ratingPercentage: 85 },
    { skill: "Node Js", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Django", ratingPercentage: 80 },
    { skill: "Django-Rest-Api", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "Postgres", ratingPercentage: 65 },
    { skill: "GitHub", ratingPercentage: 80 },
    { skill: "AWS Cloud", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Protfolio website to showcase all my details and project at one place",
      subHeading: "Technologies Used: React JS, Html5,Css and Bootstrap",
    },
    {
      title: "Mobile E-Shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application desigsed to sell products online with payment system integration",
      subHeading:
        "Technologies Used: React Native, MongoDb Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system Integration.",
      subHeading:
        "Technologies Used: React JS,Mongo Db, Html5,Css and Bootstrap, Redux, Node Js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Axis Institute of Technology, Rooma Kanpur"}
        subHeading={"BACHELOR OF SCIENCE INFORMATION TECHNOLOGY"}
        fromDate={"2013"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"BETAUE Technologies & Placement Services"}
        subHeading={"CERTIFICATION OF PARTICIPATED TRAINING COURSE."}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"SARASWATI VIDYA MANDIR"}
        fromDate={"2010"}
        toDate={"2013"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={" HashInclude Pvt Ltd."}
        subHeading={"React front-end developer(with JavaScript proficiency)"}
        fromDate={"2022"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Crurently working as Frontend Web Developer and also look after some
          Backend work including
          <br /> AWS Cloud.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Manage services for Clients. Working with CyberCNS Dashboard.
          Developing the UI CyberCNS <br /> website for the company product and
          further developing its functionality.
        </span>
        <br />
        <span className="resume-description-text">
          - Created EC2 Instances (Linux / Windows).
          <br />
        </span>
        <span className="resume-description-text">
          - Worked on custom AMIs for ASG and Launch Templates.
        </span>
        <br />
        <span className="resume-description-text">
          - Created whole network using VPC from scratch
          <br />
        </span>
        <span className="resume-description-text">
          - Developed APIs using Django Rest API Used PostgreSQL as backend DB
          for this project.
          <br />
        </span>
        <span className="resume-description-text">
          - Developed a frontend UI which fetched APIs through the Django API
          server.
        </span>
      </div>

      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage"
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="resume-screen-container" key="projects">
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      <div className="resume-screen-container" key="intrests">
        <ResumeHeading
          heading="Teaching"
          description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
        />
        <ResumeHeading
          heading="Music"
          description="Listening to soomthing music is somthing i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        />
        <ResumeHeading
          heading="Competitive Gaming"
          description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excited me the most."
        />
      </div>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
