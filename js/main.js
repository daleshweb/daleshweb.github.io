var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Developer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Freelancer')
    .pauseFor(2500)
    .start();


    AOS.init();



// Glass


	VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400,
        glare: true,
        
        

	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".your-element"));


