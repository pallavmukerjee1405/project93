var firebaseConfig = {
    apiKey: "AIzaSyB1bCv5P1uVW5wum5ct_yJ8tDCZpkcCsQ4",
    authDomain: "pallav-project-93-94-95-96-97.firebaseapp.com",
    projectId: "pallav-project-93-94-95-96-97",
    storageBucket: "pallav-project-93-94-95-96-97.appspot.com",
    messagingSenderId: "615635768463",
    appId: "1:615635768463:web:69f4128f7e166e0bf98cfa"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value=" ";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
