 

 let ids =  ["18029", "18006", "18013"];

 function login(){
 	let code = document.querySelector("#code").value;

 	for(let i = 0; i < ids.length; i++){
 	if (code == ids[0]) {
 		 
 		window.location.replace("users/khizer/index.html")
 		return;	
 	}
 	else if (code == ids[1]) {
 		 
 		window.location.replace("users/junaid/index.html")
 		return;	
 	}
 	else if (code == ids[2]) {
 		 
 		window.location.replace("users/khizer/18029.html")
 		return;	
 	}
 	
 	
 }
 		alert("Please Enter Your Correct ID");
 	

 	}
 
 