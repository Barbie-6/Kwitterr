
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA15KPvDDIGPExGmyHBeI1BTd5eOfQP_a0",
      authDomain: "kwitter-7017f.firebaseapp.com",
      databaseURL: "https://kwitter-7017f-default-rtdb.firebaseio.com",
      projectId: "kwitter-7017f",
      storageBucket: "kwitter-7017f.appspot.com",
      messagingSenderId: "680301630858",
      appId: "1:680301630858:web:c67a6a466436de75fba473",
      measurementId: "G-FZ6Z26D6S2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room-name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>$" +Room_names + "</div><hr>"; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
