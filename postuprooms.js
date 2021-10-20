const firebaseConfig = {
    apiKey: "AIzaSyCOio_dyW2z0LOQuWSkt-C82hMO3NJDx1M",
    authDomain: "postup-official-database.firebaseapp.com",
    databaseURL: "https://postup-official-database-default-rtdb.firebaseio.com",
    projectId: "postup-official-database",
    storageBucket: "postup-official-database.appspot.com",
    messagingSenderId: "677473875882",
    appId: "1:677473875882:web:72c8486b2fab45efb75dd3"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
window.location = "postup_server.html";

  }
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});
}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "postup_server.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
