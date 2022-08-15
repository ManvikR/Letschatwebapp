const firebaseConfig = {
  apiKey: "AIzaSyAFU4swls59SD6LcP-3EgORsWMKPoun2DU",
  authDomain: "lets-chat-web-app-72b59.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/project/lets-chat-web-app-72b59/database/lets-chat-web-app-72b59-default-rtdb/data/~2F",
  projectId: "lets-chat-web-app-72b59",
  storageBucket: "lets-chat-web-app-72b59.appspot.com",
  messagingSenderId: "721961206132",
  appId: "1:721961206132:web:7c5b92f9dea8a683096c21",
  measurementId: "G-MN722KPY03"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
