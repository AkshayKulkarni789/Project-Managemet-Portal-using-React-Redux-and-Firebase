const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

const newNotif = (notification => {
    return admin.firestore().collection('notifications').add(notification).then(console.log("Notif added",doc))
})

exports.newProject = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data()
    const notification = {
        content: 'added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return newNotif(notification)
})



exports.newUser = functions.auth.user().onCreate(user => {

    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const nuser = doc.data()
        const notification = {
            content: 'signed up on to the system',
            user: `${nuser.firstName} ${nuser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return newNotif(notification)
    })
})