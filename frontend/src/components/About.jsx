import React from "react";
import UserHeader from "./UserNavbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import asset4 from "../asset4.jpg";
import { Button, Slider } from "@mui/material";
const About = () => {
  const openResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1X-DYQE3DvDnbHWoKrkduncXncngPkLXc/view?usp=sharing";
    window.open(resumeUrl, "_blank");
  };
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Python", level: 75 },
  ];
  return (
    <>
      <UserHeader />
      <div style={{ maxWidth: "800px", margin: "10rem auto" }} className="p-3">
        <Grid container spacing={3}>
          {/* Left side image */}
          <Grid item xs={12} sm={6}>
            <img
              src={asset4}
              alt="About Us"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          {/* Right side content */}
          <Grid item xs={12} sm={6}>
            <Paper
              elevation={3}
              style={{ padding: "20px", border: "none !important" }}
            >
              <Typography variant="h5" gutterBottom>
                About
              </Typography>
              <Typography variant="body1">
              I am a Junior Developer with a strong proficiency in both JavaScript and Python full-stack development. I have extensive experience working with popular technology stacks such as MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js). Additionally, I am proficient in utilizing frameworks like Django for backend development in Python, and I navigate these technologies with ease.

I invite you to explore the 'Projects' section to gain insights into my portfolio of work, which showcases my expertise and dedication in delivering high-quality software solutions.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                className="mt-3"
                onClick={openResume}
              >
                View my Resume
              </Button>
         
            </Paper>
            
          </Grid>
          
        </Grid>
        <h3 className="mt-5 mb-4 p-3">Skills</h3>
        {skills.map((skill, index) => (
                <div key={index}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <Slider
                    value={skill.level}
                    max={100}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => `${value}%`}
                  />
                </div>
              ))}
      </div>
    </>
  );
};

export default About;
