
function cumputing(x)
{
	let random = 0;
	let r = 0;
	let my = setInterval(function()
	{
		random = Math.floor(Math.random() * 3);
		cumputer.src = arr[random];
		if (r == 10)
		{
			clearInterval(my);
			logic(x, Role[random]);
		}	
		r++;
	}, 100);	
}

function find_winner(rs)
{
	let random =Math.random() * 2 + 1;
	if (rs ==  0)
	{
		result.style.backgroundColor = "whitesmoke";
		result.innerHTML = "TIE";
	}
	else if (rs == 1)
	{
		result.style.backgroundColor = "green";
		score_point += 30;
		score.innerHTML = score_point;
		result.innerHTML = "You Win This Game";
	}
	else
	{
		result.style.backgroundColor = "red";
		result.innerHTML = "You Lose This Game";
		health_bar -= 33;
		shit.style.width = health_bar + '%';
		if (health_bar <= 3)
			window.location.href= "https://www.youtube.com/watch?v=utjBKu5dSR0";
	}
}

function logic(x, c)
{
	if (x == c)
		res = 0;
	else if ((x == "P" && c == "R") || (x == "S" && c == "P") || (x == "R" && c == "S"))
		res = 1;
	else
		res = -1;
	find_winner(res);
}




// back ground span animation 

function span_add()
{
	let i = 0;
	let j  = 11;
	while (i < 22)
	{
		sp = document.createElement("span");
		if (j % 2 == 1)
			sp.style = `--i:${j  * 2}`;
		if (j % 2 == 0)
			sp.style = `--i:${j * 3}`;
		spans.appendChild(sp);
		j++;
		i++;
	}
}
// create elment 
span_add();