import React, { useState } from "react";
import UserHeader from "./UserNavbar";
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import axios from "axios";

const Contactme = () => {
  // Initialize state variables for Name, Email, and Message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Event handler for updating the Name state
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Event handler for updating the Email state
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Event handler for updating the Message state
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming name, email, and message are defined somewhere in your component's state or scope.
    const data = {
      name: name,
      email: email,
      message: message,
    };

    // Replace 'your-api-endpoint' with the actual URL you want to send the POST request to.
    axios
      .post(`/sendemail`, data)
      .then((response) => {
        // Handle the success response here
        console.log("POST request successful", response);

        // Show the Snackbar after successful submission
        setShowSnackbar(true);

        // Clear the input fields
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("POST request error", error);
      });
  };

  // Close the Snackbar
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <>
      <UserHeader />

      <Container maxWidth="sm" className="mt-5">
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ color: "#52b69a", fontStyle: "italic" }}
        >
          Don't feel shy to contact me
        </Typography>

        {/* Snackbar to show a confirmation message */}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={showSnackbar}
          autoHideDuration={3000} // Adjust as needed
          onClose={handleCloseSnackbar}
          message="Thank you for contacting me. I will get back to you."
        />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Contactme;
