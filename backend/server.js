const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please Activate Production"));
}
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/sendemail", (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Message from Portfolio by ${name}`,
    text: `Hello from ${name}\n\n Mail ID ${email}\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
