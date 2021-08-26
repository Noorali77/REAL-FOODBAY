// $(function () {
// 	'use strict';


// 	$('.form-control').on('input', function () {
// 		var $field = $(this).closest('.form-group');
// 		if (this.value) {
// 			$field.addClass('field--not-empty');
// 		} else {
// 			$field.removeClass('field--not-empty');
// 		}
// 	});

// }); 


const addDishes = (e) => {
	let category = document.getElementById("category").value;
	let itemName = document.getElementById("itemName").value;
	let price = document.getElementById("price").value;
	let deliveryType = document.getElementById("deliveryType").value;
	event.preventDefault(e);
	const uid = localStorage.getItem("uid");

	const obj = {
		category,
		itemName,
		price,
		deliveryType
	}

	firebase.database().ref(`Restaurants/${uid}/categories`).child(obj.category).push(obj);
   alert("Item is Uploaded Successfully!")
}


let adminLogout = ()=>{
	firebase.auth().signOut().then(() => {
		window.location.href = "../index.html";
	}).catch((error) => {

	});
}