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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push[{
        name: username,
        message: msg,
        like: 0,
    }];
}