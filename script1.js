function showSlides() {
	
	let pS = document.querySelectorAll("p");
	for (let i = 0; i < pS.length; i++) {
			pS[i].style.display = "none";  
	}
	
	pS[slideIndex].style.display = "block";
	if (slideIndex < pS.length-1) { 
		slideIndex++; 
	}
	else if(slideIndex == pS.length-1) {
		slideIndex = 0;
	}
	
	setTimeout(showSlides, 8000);
};

let slideIndex = 0;
showSlides();
