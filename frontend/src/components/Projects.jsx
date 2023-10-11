import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import UserHeader from "./UserNavbar";
import asset1 from "../asset1.jpg";
import asset2 from "../asset2.jpg";
import asset3 from "../asset3.jpg";
import { GiFarmTractor } from "react-icons/gi";
import { FaShoppingCart, FaCar, FaGithub } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const Projects = () => {
  return (
    <>
      <UserHeader />
      <h3
        style={{
          fontFamily: "sans-serif",
          color: "#52b69a",
          fontStyle: "italic",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "2.75rem",
        }}
      >
        Portfolio
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {/* Project Card 1 */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "200px",
            margin: "10px",
            maxWidth: "700px",
            boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease",

            "&:hover": {
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.4)",
              transform: "translateY(-10px)",
            },
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              "&:hover": {
                transform: "none",
              },
            },
          }}
        >
          <CardContent sx={{ marginRight: "16px", border: "none !important" }}>
            <img src={asset1} alt="Project 1" style={{ width: "300px" }} />
          </CardContent>
          <CardContent tyle={{ marginLeft: "16px", border: "none" }}>
            <Typography variant="h5" component="div">
              Farmer Place <GiFarmTractor />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our project is dedicated to creating a specialized social
              networking platform for the agricultural community. It offers
              administrators the ability to monitor and manage content, ensuring
              a high-quality experience. Meanwhile, users, primarily farmers and
              enthusiasts, engage in discussions, share insights, and foster a
              sense of community. Our goal is to provide a secure space for
              farmers to connect, discuss issues, and contribute to agricultural
              advancement.
            </Typography>
            <div style={{ marginTop: "8px" }}>
              <Chip label="React" sx={{ margin: "2px" }} />
              <Chip label="JavaScript" sx={{ margin: "2px" }} />
              <Chip label="Web" sx={{ margin: "2px" }} />
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <Button
                variant="contained"
                color="primary"
                href="https://farmerplace.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                Live Demo&nbsp; <MdOutlineComputer />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://github.com/RamKashyap2050/Farmer_Place.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code&nbsp; <FaGithub />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Project Card 2 */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "200px",
            marginTop: "20px",
            maxWidth: "700px",
            boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease",

            "&:hover": {
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.4)",
              transform: "translateY(-10px)",
            },
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              "&:hover": {
                transform: "none",
              },
            },
          }}
        >
          <CardContent tyle={{ marginLeft: "16px", border: "none" }}>
            <Typography variant="h5" component="div">
              Easy Shop <FaShoppingCart />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our e-commerce website, developed using the MERN stack, offers
              users the ability to manage profiles, create wishlists, add
              products to carts, and place orders. It operates with two key
              panels: the Admin Panel and the User Panel. The Admin Panel
              facilitates product and category management, as well as user
              interaction oversight. Meanwhile, the User Panel empowers users to
              maintain profiles, curate wishlists, and enjoy a streamlined
              shopping experience.
            </Typography>
            <div style={{ marginTop: "8px" }}>
              <Chip label="React" sx={{ margin: "2px" }} />
              <Chip label="NodeJS" sx={{ margin: "2px" }} />
              <Chip label="Web" sx={{ margin: "2px" }} />
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <Button
                variant="contained"
                color="primary"
                href="https://easyshoppy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                Live Demo &nbsp;
                <MdOutlineComputer />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://github.com/RamKashyap2050/EcommerceWebsite.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code &nbsp; <FaGithub />
              </Button>
            </div>
          </CardContent>
          <CardContent sx={{ marginRight: "16px", border: "none !important" }}>
            <img src={asset2} alt="Project 1" style={{ width: "300px" }} />
          </CardContent>
        </Card>

        {/* Project Card 3 */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "200px",
            marginTop: "20px",
            maxWidth: "700px",
            boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.5s ease",

            "&:hover": {
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.4)",
              transform: "translateY(-10px)",
            },
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              "&:hover": {
                transform: "none",
              },
            },
          }}
        >
          <CardContent sx={{ marginRight: "16px", border: "none !important" }}>
            <img src={asset3} alt="Project 1" style={{ width: "300px" }} />
          </CardContent>
          <CardContent tyle={{ marginLeft: "16px", border: "none" }}>
            <Typography variant="h5" component="div">
              Rent My Ride <FaCar />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              RentMyRide is a user-friendly platform tailored for the
              hassle-free rental of vehicles on a daily basis, with a singular
              vendor overseeing the entire inventory. Our platform places the
              decision-making authority in the hands of the vendor, allowing
              them to set daily rental rates for each vehicle. Users are granted
              the flexibility to choose their desired rental duration, view
              available cars, and complete secure payments. Importantly, users
              maintain the freedom to cancel their bookings at any time before
              the reserved date, incurring no additional fees. RentMyRide aims
              to deliver a seamless and convenient car rental experience for
              both vendors and users alike.
            </Typography>
            <div style={{ marginTop: "8px" }}>
              <Chip label="React" sx={{ margin: "2px" }} />
              <Chip label="JavaScript" sx={{ margin: "2px" }} />
              <Chip label="Web" sx={{ margin: "2px" }} />
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <Button
                variant="contained"
                color="primary"
                href="https://rentmyride-ochre.vercel.app/user"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                Live Demo &nbsp; <MdOutlineComputer />
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://github.com/RamKashyap2050/RentMyRide.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code &nbsp; <FaGithub />
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Add more project cards here as needed */}
      </div>
    </>
  );
};

export default Projects;
