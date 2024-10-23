document.getElementById('signup').addEventListener('submit', function(event) {
	event.preventDefault();
	
	document.getElementById('loader').style.display = 'block';
	
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if(!emailValidation.test(email)) {
		document.getElementById('response').textContent = "Enter a valid email address.";
		document.getElementById('email').style.borderColor = "red";
		
		return;
	}
	
	document.getElementById('email').style.borderColor = "";
		
	document.getElementById('response').textContent =
	  `Great, ${name}! You have joined our Email List! The email you signed up with: ${email}.`;
	
	  
	window.scrollTo({
      top: document.getElementById('response').offsetTop,
      behavior: 'smooth'	  
	});
	    
	document.getElementById('response').style.opacity = 1;
	
	const main = document.querySelector('main');
	main.style.backgroundColor = "#c5e3c5";
	setTimeout(() => {
		main.style.backgroundColor = "white";
	}, 1000);

	document.getElementById('signup').reset();
	
});

document.getElementById('name').addEventListener('input', function() {
	const length = this.value.length;
	document.getElementById('name-counter').textContent = `${length}/50`;
});