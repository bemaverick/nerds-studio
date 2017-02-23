var buttonWrite=document.querySelector(".map-btn");
    	var buttonClose=document.querySelector(".pop-up-close");
    	var popup=document.querySelector(".pop-up");
    	var login=popup.querySelector("[name=login]");
    	var textarea=popup.querySelector("#feedback-textarea");

    	buttonWrite.addEventListener("click", function(event){
    		event.preventDefault();
    		popup.classList.add("feedback-show");
    	});

    	buttonClose.addEventListener("click", function(event){
    		event.preventDefault();
    		popup.classList.remove("feedback-show");
    		popup.classList.remove("feedback-error");
    	});

    	//закритие окна кнопкой esc
    	window.addEventListener("keydown", function(event) {
    		if (event.keyCode===27) {
    			if (popup.classList.contains("feedback-show")) {
    			popup.classList.remove("feedback-show");
    			}
    		}
    	})


    	// проверка отправки форми
    	var form=popup.querySelector('form');
    	var email=popup.querySelector("[name=email]");
    	var localEmail=localStorage.getItem("email");
    	var localLogin=localStorage.getItem("login");

    	buttonWrite.addEventListener("click", function(event){
    		if (localLogin&&localEmail) {
    			login.value=localLogin;
    			email.value=localEmail;
    			textarea.focus();
    		}		
    		else { login.focus(); }
    	});

    	form.addEventListener("submit", function(event) {
    		if (!login.value || !email.value ) {
    		event.preventDefault();
    		console.log("нужно ввести логин и пароль");
    		popup.classList.add("feedback-error");
    		}
    		else {
    			localStorage.setItem("login", login.value); //запись логина и мейла в локальное хранилище
    			localStorage.setItem('email', email.value);
    			
    	   		}
    	});


        function initialize() {
    var x = 45.038739;
    var y = 38.973099;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var image = "img/map-marker.png"; 
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);