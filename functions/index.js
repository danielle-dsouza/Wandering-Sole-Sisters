const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("Notification added", doc));
};

exports.blogPosted = functions.firestore
  .document("blogs/{blogId}")
  .onCreate((snap, context) => {

    const blog = snap.data();
    const blogId = context.params.blogId;
    const notification = {
      content: "New post!",
      user: `${blog.authorFirstName} ${blog.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
      blogId: blogId
    };

  return createNotification(notification);
});