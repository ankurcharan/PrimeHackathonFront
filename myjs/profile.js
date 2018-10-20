alert("Connected!");

// import jwt_decode from 'jwt-decode';
let token = JSON.parse(localStorage.getItem('token'));
// var decoded = jwt_decode(token);
// console.log(decoded);


// function signOut() {
// 	var auth2 = gapi.auth2.getAuthInstance();
// 	auth2.signOut().then(function () {
// 		console.log('User signed out.');
// 		window.location.href = './index.html';
// 	});
// }