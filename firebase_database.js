var config = {
    apiKey: "AIzaSyAZ4e-UoL8gHa_YXl6ZZdvBlABhDq5e4oI",
    authDomain: "jstodoapp1.firebaseapp.com",
    databaseURL: "https://jstodoapp1.firebaseio.com",
    projectId: "jstodoapp1",
    storageBucket: "jstodoapp1.appspot.com",
    messagingSenderId: "132640325290"
  };
  firebase.initializeApp(config);

  function datasave(){
      var name=document.getElementById("name").value;
      var mnum=document.getElementById("mnum").value;
      firebase.database().ref("/").child("Name").push(name);
      firebase.database().ref("/").child("Mobile num").push(mnum);

  }
  firebase.database().ref("/").child("Mobile num").on("value",(data)=> {console.log(data.val())});
  firebase.database().ref("/").child("Name").on("value",(data)=> {console.log(data.val())});