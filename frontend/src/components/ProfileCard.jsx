import React from "react";
import UserHeader from "./UserNavbar";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaNodeJs
} from "react-icons/fa";
import profile from "../profile.jpg";
const ProfileCard = () => {
  return (
    <>
      <UserHeader />

      <div
        className="container mt-5  d-flex justify-content-between"
        style={{ maxWidth: "600px" }}
      >
        <div className="card border-0">
          <div className="card-body max-w-sm">
            <h4 className="card-title">Full Stack Developer</h4>
            <h2 className="emoji">😃</h2>
            <p className="card-text">
              Hi, I'm Ram Kashyap, a full stack developer based in Montreal,
              Canada <BsPinMap />
            </p>
            <div className="d-flex justify-content-start">
              <a
                href="https://www.linkedin.com/your-link-here"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none me-3"
              >
                <FaLinkedin style={{width:"30px", height:"30px"}} />
              </a>
              &nbsp; &nbsp;
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <AiFillGithub style={{width:"30px", height:"30px"}} />
              </a>
            </div>
          </div>
          {/* Second Card */}
        </div>
        <div className="card border-0">
          <div className="profile-image-container">
            <img
              src={profile}
              alt="helloworld"
              className="card-img-top profilephoto"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          paddingTop: "8.5rem",
          textAlign: "center",
          maxWidth: "500px",
        }}
        className="d-flex justify-content-between"
      >
        <h6 style={{ marginRight: "1.25rem" }}>Tech Stack</h6>
        <div>
          <FaHtml5 style={{width:"30px", height:"30px"}} />
        </div>
        <div>
          <FaCss3 style={{width:"30px", height:"30px"}} />
        </div>
        <div>
          <FaJs style={{width:"30px", height:"30px"}}  />
        </div>
        <div>
          <FaReact style={{width:"30px", height:"30px"}} />
        </div>
        <div>
          <FaAngular style={{width:"30px", height:"30px"}} />
        </div>
        <div>
          <FaNodeJs style={{width:"30px", height:"30px"}} />
        </div>
        <div>
          <FaPython style={{width:"30px", height:"30px"}} />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ProfileCard;
