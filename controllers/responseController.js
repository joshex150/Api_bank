const responseCollection = require("../models/responseModel");
const sendEmail = require("./mailController");
module.exports = async function (req, res) {
  try {
    const { movie } = req.body;
    const { answer } = req.body;
    console.log(answer);

    const existing = await responseCollection.findOne({
      answer: "yes",
    });

    if (existing) {
      try {
        existing.movie = movie;

        const postData = await existing.save();
        // Handle successful saving of data
        const sender = '"Huddle👺" <huddle-notify@outlook.com>';
        const recipient = "joshex150@gmail.com";
        const subject = "movie name";
        const text = `she wants to see ${movie}.`;

        await sendEmail(sender, recipient, subject, text);
        res.send(postData);
      } catch (error) {
        // Handle error during saving
        console.error("Error saving data:", error);
      }
    }
    if (!existing) {
      const userData = new responseCollection({
        answer: answer,
      });
      const postData = await userData.save();
      const sender = '"Huddle👺" <huddle-notify@outlook.com>';
      const recipient = "joshex150@gmail.com";
      const subject = "Successful";
      const text = `she said yes`;
      await sendEmail(sender, recipient, subject, text);
      res.send(postData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
