// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1bCv5P1uVW5wum5ct_yJ8tDCZpkcCsQ4",
    authDomain: "pallav-project-93-94-95-96-97.firebaseapp.com",
    projectId: "pallav-project-93-94-95-96-97",
    storageBucket: "pallav-project-93-94-95-96-97.appspot.com",
    messagingSenderId: "615635768463",
    appId: "1:615635768463:web:69f4128f7e166e0bf98cfa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
