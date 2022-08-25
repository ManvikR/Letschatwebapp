const firebaseConfig = {
  apiKey: "AIzaSyAFU4swls59SD6LcP-3EgORsWMKPoun2DU",
  authDomain: "lets-chat-web-app-72b59.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-72b59-default-rtdb.firebaseio.com/",
  projectId: "lets-chat-web-app-72b59",
  storageBucket: "lets-chat-web-app-72b59.appspot.com",
  messagingSenderId: "721961206132",
  appId: "1:721961206132:web:7c5b92f9dea8a683096c21",
  measurementId: "G-MN722KPY03"
};

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)' >#" + room_name + "<div><hr>";
  document.getElementById("output").innerHTML += row;
  });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirecttoroomname(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitterpage.html";
}

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "index.html";
}
