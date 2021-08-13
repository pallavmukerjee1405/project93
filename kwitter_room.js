// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1bCv5P1uVW5wum5ct_yJ8tDCZpkcCsQ4",
    authDomain: "pallav-project-93-94-95-96-97.firebaseapp.com",
    databaseURL: "https://pallav-project-93-94-95-96-97-default-rtdb.firebaseio.com",
    projectId: "pallav-project-93-94-95-96-97",
    storageBucket: "pallav-project-93-94-95-96-97.appspot.com",
    messagingSenderId: "615635768463",
    appId: "1:615635768463:web:69f4128f7e166e0bf98cfa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+ user_name+" ! ";
    console.log(user_name);

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -"+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}