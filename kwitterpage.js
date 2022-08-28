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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "<h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+ " onclick='updateLike(this.id)'>";

         row = name_with_tag +message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push[{
            name: user_name,
            message: msg,
            like: 0,
      }];
      document.getElementById("msg").value = "";

}

function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function updateLike(message_id)
{
      button_id=message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase,database().ref(room_name).child(message_id).updae({
            like : updated_likes
      });
}
