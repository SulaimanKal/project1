document.getElementById('signup').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if(!emailValidation.test(email)) {
		document.getElementById('response').textContent =
	      "Enter a valid email address.";
		return;
	}
	console.log(`Name: ${name}, Email: ${email}`);
	
	document.getElementById('response').textContent =
	  `Great, ${name}! You have joined our Email List! The email you signed up with: ${email}.`;
	  
	document.getElementById('response').style.opacity = 1;
	
	main.style.backgroundColor = "c5e3c5";
	setTimeout(() => {
		main.style.backgroundColor = "white";
	}, 1000);
	  
	window.scrollTo(0, 0);
	
	document.getElementById('signup').reset();
});