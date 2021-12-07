const firebaseConfig = {
  apiKey: "AIzaSyC-pXauzg6kdCsO6mYevr3yYb5QQMPm7Rw",
  authDomain: "postup-2.firebaseapp.com",
  projectId: "postup-2",
  storageBucket: "postup-2.appspot.com",
  messagingSenderId: "575196444955",
  appId: "1:575196444955:web:379ffde5f91ce3bcd8fbbe",
  measurementId: "G-2HZ9ZKW9TN"
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
