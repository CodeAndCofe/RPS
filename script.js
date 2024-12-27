const score = document.querySelector(".score span");
const health = document.querySelector(".health");
const Rock  = document.querySelector(".R");
const Paper= document.querySelector(".P");
const Ses = document.querySelector(".S");
const cumputer = document.querySelector(".rd img");
const result = document.querySelector(".result");
const choice = document.querySelectorAll(".ss");
const spans = document.querySelector(".boble");
const shit = document.querySelector(".shit");
let res = 0;
let health_bar = 100;
const arr = ["scissor.png", "paper-plane.png", "stone.png"];
const Role = ["S", "P", "R"];

let score_point  = 0;

Rock.addEventListener("click", ()=>
{
	cumputing("R");
});
Ses.addEventListener("click", ()=>
{
	cumputing("S");
});	
Paper.addEventListener("click", ()=>
{
	cumputing("P");		
});

choice.forEach((e) => 
{
			
	e.addEventListener("mouseover",()=>
	{
		e.classList.add("trans");
	});
	e.addEventListener("mouseout",()=>
	{
		e.classList.remove("trans");
	});
});
