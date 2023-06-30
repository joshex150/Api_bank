const createTransporter = require("../models/mailModel");

const sendEmail = async (sender, recipient, subject, text, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
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

      if (shouldRetry(error)) {
        const retryDelay = getRetryDelay(attempt);
        console.log(`Retrying email sending in ${retryDelay}ms...`);
        await delay(retryDelay);
      } else {
        console.error("Email sending failed.");
        return;
      }
    }
  }

  console.error(`Failed to send email after ${maxRetries} attempts.`);
};

const shouldRetry = (error) => {
  // Add custom logic to determine if retry should be attempted
  // Example: Check if error is due to a temporary network issue
  return true;
};

const getRetryDelay = (attempt) => {
  // Add custom logic to calculate retry delay
  // Example: Exponential backoff
  return Math.pow(2, attempt - 1) * 1000;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = sendEmail;
