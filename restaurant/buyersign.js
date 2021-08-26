let signup = () => {

  let name = document.getElementById("name").value;
  if (name.length === 0) {
    alert("Please Enter Your Restaurant Name:");
    return false;
  }
  else if (name.length <= 5) {
    alert("Restaurant Name must have atleast 6 Characters: ");
    return false;

  }

  else if (name.length >= 17) {
    alert("Restaurant Name can contain only upto 16 Characters:")
  }
  var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";

  var data = document.getElementById("name").value;

  for (var i = 0; i < data.length; i++) {

    if (speChar.indexOf(data.charAt(i)) != -1) {

      alert("Your Restaurant Name has special characters. \nThese are not allowed.");

      return false;
    }
  }


  var email = document.getElementById('email2').value;
  if (email.length === 0) {
    alert("Providing an email is mandotory");
    return false;
  }

  var re = /restaurant-[a-z0-9!#$%&'*+/=?^_`{|}~-]+@+[a-z]+[.]+com/g;
	if (re.test(email) == false) {
		alert(`Email must include restaurant- in first like restaurant-xyz@gmail.com`)
		return false;
	}


  let password = document.getElementById("password2").value;
  if (password.length === 0) {
    alert("Please Enter Your Password:");
    return false;
  }

  else if (password.length <= 5) {
    alert("Password Should have minimun 6 characters");
    return false;
  }

  else if (password.length >= 17) {
    alert("Password can contains only upto 16 characters:");
    return false;
  }



  let number = document.getElementById("number").value;
  if (number.length === 0) {
    alert("Please Enter Your Number:");
    return false;
  }
  else if (number.length <= 10) {
    alert("Incorrect Number\n Number length must be of 11: ");
    return false;

  }

  else if (number.length >= 12) {
    alert("Incorrect Number\nNumber length must be of 11:")
  }


  let country = document.getElementById("country").value;
  if (country.length === 0) {
    alert("Please Enter Your Country:");
    return false;
  }



  let city = document.getElementById("city").value;
  if (city.length === 0) {
    alert("Please Enter Your City:");
    return false;
  }



  var obj = {
    Name: name,
    Email: email,
    Password: password,
    Number: number,
    Country: country,
    City: city,

  }


  let localRes = document.getElementById('name').value;
  localStorage.setItem('Restaurantname', localRes);

  let localEmail = document.getElementById('email2').value;
  localStorage.setItem('email', localEmail);

  let localPassword = document.getElementById('password2').value;
  localStorage.setItem('password', localPassword);


  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user.uid);
    firebase.database().ref("Resturants").child(user.uid).set(obj);
    alert("Signup Sucessfully");
    setTimeout(function () {
      window.location.href = '../index.html';
    }, 5000);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

event.preventDefault(e);

}







let signin = (e) => {



  let localName = document.getElementById("localName").value;
  if (localName.length === 0) {
    alert("Please Enter Your Name:");
    return false;
  }
  else if (localName.length <= 5) {
    alert("Name must have atleast 6 Characters: ");
    return false;

  }

  else if (localName.length >= 17) {
    alert("Name can contain only upto 16 Characters:")
    return false;
  }

  var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";

  var data = document.getElementById("localName").value;

  for (var i = 0; i < data.length; i++) {

    if (speChar.indexOf(data.charAt(i)) != -1) {

      alert("Your string has special characters. \nThese are not allowed.");
      return false;
    }

  }

  localStorage.setItem('localName', localName)


  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;


	var re = /restaurant-[a-z0-9!#$%&'*+/=?^_`{|}~-]+@+[a-z]+[.]+com/g;
	event.preventDefault(e);
	if (re.test(email) == true) {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				var user = userCredential.user;
				localStorage.setItem("uid", user.uid);
				localStorage.setItem("email", email);
				window.location.href = "restaurant/dashboard.html";
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				alert(errorMessage);
			});
	}
	else {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				var user = userCredential.user;
				localStorage.setItem("email", user.bc.email);
				window.location.href = "user/userhome.html";
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				alert(errorMessage);
			});

	}


}