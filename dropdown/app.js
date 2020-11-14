function solve() {
	let btnChooseStyle = document.getElementById("dropdown"); // now I have my button!
	let box = document.getElementById("box");
	box.style.backgroundColor = "black";

	btnChooseStyle.addEventListener("click", function () {
		console.log(`The dropdown button was clicked, ${btnChooseStyle}`);
		let show = document.getElementById("dropdown-ul"); // show is now an ul HTML element (an object)
		show.style.display = "block";
		//show.setAttribute("style", "display: block");
		let li = document.getElementsByTagName("li");
		console.log(li);

		for (let i = 0; i < li.length; i++) {
			//console.log(li[i]);
			li[i].addEventListener("click", function () {
				box.style.backgroundColor = li[i].textContent;
			});
		}

		btnChooseStyle.addEventListener("click", function () {
			show.style.display = "none";
			box.setAttribute("style", "background-color: black");
		});
	});
}

// No arguments!
