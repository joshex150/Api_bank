const newsletterCollection = require("../models/newsletterModel");
const sendEmail = require("../controllers/mailController");

module.exports = async function (req, res) {
try {
const existingUser = await newsletterCollection.findOne({
email: req.body.email,
});
if (!existingUser) {
const sender = "joshex150@gmail.com";
const recipient = req.body.email;
const subject = "Newsletter";
const text = "You have successfully signed up for our newsletter.";
await sendEmail(sender, recipient, subject, text);
const newsletterData = new newsletterCollection({
email: req.body.email,
});
const postData = await newsletterData.save();
res.send(postData);
} else {
res.status(400).send("Email already subscribed");
}
} catch (error) {
console.error("Error:", error);
res.status(500).send("Internal server error");
}
};