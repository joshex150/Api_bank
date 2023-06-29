const nodemailer = require("nodemailer");
const createTransporter = require("../models/mailModel");

const sendEmail = async (sender, recipient, subject, text, maxRetries = 3, retryDelay = 2000) => {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const mailOptions = {
        from: sender,
        to: recipient,
        subject: subject,
        text: text,
      };

      const transporter = await createTransporter();
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");
      return; // Exit the function if email is sent successfully
    } catch (error) {
      console.error("Error sending email:", error);
      retries++;

      if (retries < maxRetries) {
        console.log(`Retrying email sending in ${retryDelay}ms...`);
        await delay(retryDelay);
      }
    }
  }

  console.error(`Failed to send email after ${maxRetries} attempts.`);
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = sendEmail;

