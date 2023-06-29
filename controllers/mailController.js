// const createTransporter = require("../models/mailModel");

// createTransporter()
//   .then((transporter) => {

//     const mailOptions = {
//         from: '"Fred Foo 👻" <Joshex150@gmail.com>', // sender address
//         to: "Joshex15@icloud.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: "Hello world?", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//       } else {
//         console.log("Email sent successfully.");
//         console.log("Message ID:", info.messageId);
//         console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
//       }
//     });
//   })
//   .catch((error) => {
//     console.error("Error creating transporter:", error);
//   });
const createTransporter = require("../models/mailModel");

// Call the createTransporter function
createTransporter()
  .then((transporter) => {
    // Use the transporter object for sending emails

    function sendEmail(sender, recipient, subject, text) {
      const mailOptions = {
        from: sender,
        to: recipient,
        subject: subject,
        text: text,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent successfully.");
          console.log("Message ID:", info.messageId);
          console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
        }
      });
    }

    // Example usage: Sending an email from different parts of the server
    // sendEmail("sender@example.com", "recipient@example.com", "Test Email", "This is a test email sent from the server.");
  })
  .catch((error) => {
    console.error("Error creating transporter:", error);
  });
