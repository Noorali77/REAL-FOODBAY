let signup = () =>{
   
    let name = document.getElementById("name").value.length;
     if (name === 0 ) {
     alert("Please Enter Your Name:");
     return false;
     }
     else if(name <=5 ){
         alert("Name must have atleast 6 Characters: ");
         return false;

     }

     else if(name >=17){
         alert("Name can contain only upto 16 Characters:")
     } 
        var speChar = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";   

     var data = document.getElementById("name").value;

     for (var i = 0; i < data.length; i++)

     {      

          if ( speChar.indexOf(data.charAt(i)) != -1)

         {    

         alert ("Your Name contains special characters. \nThese are not allowed.");

         return false; 
     }
     }
 

     var email = document.getElementById('email2').value.length;
     if(email === 0){
         alert("Providing an email is mandotory");
         return false;
     }

     
    let password = document.getElementById("password2").value.length;
     if (password === 0 ) {
     alert("Please Enter Your Password:");
     return false;
     }

     else if (password <=5 ) {
        alert("Password Should have minimun 6 characters");
        return false;
        }

    else if (password >=17 ) {
        alert("Password can contains only upto 16 characters:");
        return false;
        }

        var name1 = document.getElementById('name');
    


        var email1 = document.getElementById('email2');
        var password1 = document.getElementById('password2');


        let number = document.getElementById("number").value;
     if (number.length === 0 ) {
     alert("Please Enter Your Number:");
     return false;
     }
     else if(number.length <=10 ){
         alert("Incorrect Number\n Number length must be of 11: ");
         return false;

     }

     else if(number.length >=12){
         alert("Incorrect Number\nNumber length must be of 11:")
     } 


     let country = document.getElementById("country").value;
     if (country.length === 0 ) {
     alert("Please Enter Your Country:");
     return false;
     }


     
     let city = document.getElementById("city").value;
     if (city.length === 0 ) {
     alert("Please Enter Your City:");
     return false;
     }



         var obj = {
             Name : name1.value,
             Email : email1.value,
             Password : password1.value,
             Number : number,
             Country : country,
             City : city,

         }
         firebase.database().ref('Users').child("UsersData").push(obj);

         let localName = document.getElementById('name').value;
         localStorage.setItem('name',localName);

         let localEmail = document.getElementById('email2').value;
          localStorage.setItem('email',localEmail);

         let localPassword = document.getElementById('password2').value;
          localStorage.setItem('password',localPassword);

       
        


         firebase.auth().createUserWithEmailAndPassword(email1.value, password1.value)
  .then((userCredential) => {
    var user = userCredential.user;
    
  window.location.href = '../index.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('Please fill the form Correctly:')
   
  });

}

