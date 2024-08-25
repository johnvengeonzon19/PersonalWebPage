document.getElementById("fb").onclick = ()=>{
	window.location.href="https://www.facebook.com/1188463636O829720";
}
var profilepic = document.getElementById("profilepic");
profilepic.onclick =()=>{
	window.location.href=profilepic.src;
}
var msgone = document.getElementById("talent");
var msgtwo = document.getElementById("talentinfo");
var msgthree = document.getElementById("food");
var msgfour = document.getElementById("age");
var msgfive = document.getElementById("ageinfo");
var one = "Ako po ay isang hacker",two = "HTML hacking NASA nga lang",three="My favorite food is blue",four = "Ako ay isinilang nong panahong ipinganak ako ng aking ina",five ="Mukha lang po akong matanda pero ako pa po ay bata";

var inc = 0; //for increment
var int; //for interval
var timer = 50; //for ms
window.onload = ()=>{
	int = setInterval(()=>{
		msgone.style.visibility="visible";
		msgone.textContent+=one[inc];
		inc++;
		if(inc==22){
			clearInterval(int);
			inc=0;
			int = setInterval(()=>{
			msgtwo.style.visibility="visible";
			msgtwo.textContent+=two[inc];
			inc++;
			if(inc==26){
				clearInterval(int);
				inc=0;
				int = setInterval(()=>{
					msgthree.style.visibility="visible";
					if(inc<=19){
					msgthree.innerHTML+=three[inc];
					}else{
						if(inc==20){
						msgthree.innerHTML = "My favorite food is <span style='color:red'>b</span>"
					}else if(inc==21){
						msgthree.innerHTML = "My favorite food is <span style='color:red'>bl</span>"
					}else if(inc==22){
						msgthree.innerHTML = "My favorite food is <span style='color:red'>blu</span>"
					}else{
						msgthree.innerHTML = "My favorite food is <span style='color:red'>blue</span>"
					}
					}
					inc++;
					if(inc==24){
						clearInterval(int);
						inc=0;
					int =	setInterval(()=>{
						msgfour.style.visibility="visible";
						msgfour.textContent+=four[inc];
						inc++;
						if(inc==57){
							clearInterval(int);
							inc=0;
							int =	setInterval(()=>{
						msgfive.style.visibility="visible";
						msgfive.textContent+=five[inc];
						inc++;
						if(inc==50){
							clearInterval(int);
							inc=0;
						}
					},timer);
						}
					},timer);
					}
				},timer);
			}
			},timer);
		}
	},timer);
}
