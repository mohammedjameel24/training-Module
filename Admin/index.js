const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

var User = firebase.auth().currentUser
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var user = firebase.auth().currentUser.email;
    if (user === 'mohammed@gmail.com' || user === 'abhishek@certifiedblackhat.in') {
      document.getElementById("user_div").style.display = "block";
      document.getElementById("moduleQuestions").style.display = "block";
      document.getElementById("accordion").style.display = "block";
      document.getElementById("login_div").style.display = "none";
      var email_id = user;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    } else {
      document.getElementById("user_div").style.display = "none";

      document.getElementById("login_div").style.display = "block";

    }
  } else {
    // No user is signed in.    
    document.getElementById("user_div").style.display = "none";
    document.getElementById("moduleQuestions").style.display = "none";
    document.getElementById("accordion").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});


function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;


  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

  // var User = firebase.auth().currentUser
  // firebase.auth().onAuthStateChanged(function(user){

  //   if (user){

  //     console.log(user);

  //     if(User == 'mohammed@gmail.com'){

  //       document.getElementById("user_div").style.display = "block";
  //       document.getElementById("login_div").style.display = "none";
  //     }

  //     if (user != null){
  //       var email_id = user.email;
  //       document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

  //     }

  //   } else{

  //     document.getElementById("user_div").style.display = "none";
  //     document.getElementById("login_div").style.display = "block";
  //     // alert('login as admin');
  //     // window.logation = '../index.html'
  //   }

  // });


}

function logout() {
  firebase.auth().signOut();
}



const Table = document.querySelector('#accordion');

function renderAnswer(doc) {
  let mainDiv = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let content = document.createElement('div');

  let Answer11 = document.createElement('p');
  let Answer12 = document.createElement('p');
  let Answer13 = document.createElement('p');
  let Answer14 = document.createElement('p');
  let Answer21 = document.createElement('p');
  let Answer22 = document.createElement('p');
  let Answer23 = document.createElement('p');
  let Answer24 = document.createElement('p');
  let Answer31 = document.createElement('p');
  let Answer32 = document.createElement('p');
  let Answer33 = document.createElement('p');
  let Answer34 = document.createElement('p');
  let Answer41 = document.createElement('p');
  let Answer42 = document.createElement('p');
  let Answer43 = document.createElement('p');
  let Answer44 = document.createElement('p');
  let Answer51 = document.createElement('p');
  let Answer52 = document.createElement('p');
  let Answer53 = document.createElement('p');
  let Answer54 = document.createElement('p');
  let Answer61 = document.createElement('p');
  let Answer62 = document.createElement('p');
  let Answer63 = document.createElement('p');
  let Answer64 = document.createElement('p');
  let Answer71 = document.createElement('p');
  let Answer72 = document.createElement('p');
  let Answer73 = document.createElement('p');
  let Answer74 = document.createElement('p');

  input.setAttribute('id', doc.id);
  input.setAttribute('class', "accordion__input");
  input.setAttribute('type', "checkbox");
  label.setAttribute('for', doc.id);
  label.setAttribute('class', "accordion__label");
  label.textContent = doc.id;
  content.setAttribute('class', "accordion__content");



  if (doc.data().Answer11 != undefined) {

    Answer11.textContent = "Answer 11 : " + doc.data().Answer11;
  }
  if (doc.data().Answer12 != undefined) {

    Answer12.textContent = "Answer 12 : " + doc.data().Answer12;
  }
  if (doc.data().Answer13 != undefined) {

    Answer13.textContent = "Answer 13 : " + doc.data().Answer13;
  }
  if (doc.data().Answer14 != undefined) {

    Answer14.textContent = "Remarks : " + doc.data().Answer14;
  }
  if (doc.data().Answer21 != undefined) {

    Answer21.textContent = "Answer 21 : " + doc.data().Answer21;

  }
  if (doc.data().Answer22 != undefined) {

    Answer22.textContent = "Answer 22 : " + doc.data().Answer22;

  }
  if (doc.data().Answer23 != undefined) {

    Answer23.textContent = "Answer 23 : " + doc.data().Answer23;

  }
  if (doc.data().Answer24 != undefined) {

    Answer24.textContent = "Remarks : " + doc.data().Answer24;

  }
  if (doc.data().Answer31 != undefined) {

    Answer31.textContent = "Answer 31 : " + doc.data().Answer31;
  }
  if (doc.data().Answer32 != undefined) {

    Answer32.textContent = "Answer 32 : " + doc.data().Answer32;
  }
  if (doc.data().Answer33 != undefined) {

    Answer33.textContent = "Answer 33 : " + doc.data().Answer33;
  }
  if (doc.data().Answer34 != undefined) {

    Answer34.textContent = "Remarks : " + doc.data().Answer34;

  }
  if (doc.data().Answer41 != undefined) {

    Answer41.textContent = "Answer 41 : " + doc.data().Answer41;

  }
  if (doc.data().Answer42 != undefined) {

    Answer42.textContent = "Answer 42 : " + doc.data().Answer42;

  }
  if (doc.data().Answer43 != undefined) {

    Answer43.textContent = "Answer 43 : " + doc.data().Answer43;

  }
  if (doc.data().Answer44 != undefined) {

    Answer44.textContent = "Remarks : " + doc.data().Answer44;

  }
  if (doc.data().Answer51 != undefined) {

    Answer51.textContent = "Answer 51 : " + doc.data().Answer51;

  }
  if (doc.data().Answer52 != undefined) {

    Answer52.textContent = "Answer 52 : " + doc.data().Answer52;

  }
  if (doc.data().Answer53 != undefined) {

    Answer53.textContent = "Answer 53 : " + doc.data().Answer53;

  }
  if (doc.data().Answer54 != undefined) {

    Answer54.textContent = "Remarks : " + doc.data().Answer54;

  }
  if (doc.data().Answer61 != undefined) {

    Answer61.textContent = "Answer 61 : " + doc.data().Answer61;

  }
  if (doc.data().Answer62 != undefined) {

    Answer62.textContent = "Answer 62 : " + doc.data().Answer62;

  }
  if (doc.data().Answer63 != undefined) {

    Answer63.textContent = "Answer 63 : " + doc.data().Answer63;

  }
  if (doc.data().Answer64 != undefined) {

    Answer64.textContent = "Remarks : " + doc.data().Answer64;

  }
  if (doc.data().Answer71 != undefined) {

    Answer71.textContent = "Answer 71 : " + doc.data().Answer71;

  }
  if (doc.data().Answer72 != undefined) {

    Answer72.textContent = "Answer 72 : " + doc.data().Answer72;

  }
  if (doc.data().Answer73 != undefined) {

    Answer73.textContent = "Answer 73 : " + doc.data().Answer73;

  }
  if (doc.data().Answer74 != undefined) {

    Answer74.textContent = "Remarks : " + doc.data().Answer74;
  }



  mainDiv.appendChild(input);
  mainDiv.appendChild(label);
  mainDiv.appendChild(content);
  content.appendChild(Answer11);
  content.appendChild(Answer12);
  content.appendChild(Answer13);
  content.appendChild(Answer14);
  content.appendChild(Answer21);
  content.appendChild(Answer22);
  content.appendChild(Answer23);
  content.appendChild(Answer24);
  content.appendChild(Answer31);
  content.appendChild(Answer32);
  content.appendChild(Answer33);
  content.appendChild(Answer34);
  content.appendChild(Answer41);
  content.appendChild(Answer42);
  content.appendChild(Answer43);
  content.appendChild(Answer44);
  content.appendChild(Answer51);
  content.appendChild(Answer52);
  content.appendChild(Answer53);
  content.appendChild(Answer54);
  content.appendChild(Answer61);
  content.appendChild(Answer62);
  content.appendChild(Answer63);
  content.appendChild(Answer64);
  content.appendChild(Answer71);
  content.appendChild(Answer72);
  content.appendChild(Answer73);
  content.appendChild(Answer74);

  Table.appendChild(mainDiv);


}


db.collection('Q&A').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    console.log(change.doc.data());
    if (change.type == 'added') {
      renderAnswer(change.doc);
    }
  });
});


