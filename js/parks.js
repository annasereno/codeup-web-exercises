 document.querySelector("button").addEventListener("click", function (){
		let uls = document.querySelectorAll("ul");
		uls.forEach(function(ul){
			let lastLi = ul.lastElementChild;
			lastLi.style.backgroundColor = "yellow"
		})
	});


