/*全局变量*/
var Widow_Width = 1024;
var Widow_Height = 768;
var Radius = 8;//小球半径
var Margin_Top = 60;
var Margin_Left = 150;

var currentTimeSecond = 0;
var eTime = new Date();
eTime.setHours(23);
const endTime = eTime;


window.onload = function() {

	var canvas = document.getElementById('canvas');
	
	if(canvas.getContext)
	{
		var context = canvas.getContext("2d");

		canvas.width = document.body.clientWidth;
		canvas.height = 768;

		setInterval(
			function() {
				render(context);
				update();
			},
			100
		);
		
	}
}



function render (context) {
	context.clearRect(0,0,document.body.clientWidth, Widow_Height);

	currentTimeSecond = GetCurrentShowTime();
	var hours = parseInt(currentTimeSecond/3600);
	var minutes = parseInt((currentTimeSecond - 3600*hours)/60);
	var seconds = parseInt(currentTimeSecond % 60);

	console.log(hours + " : "+ minutes +" : " + seconds);
	

	renderDigit(Margin_Left,Margin_Top,parseInt(hours/10),context);
	renderDigit(Margin_Left+15*(Radius+1),Margin_Top,hours%10 ,context);
	renderDigit(Margin_Left+30*(Radius+1),Margin_Top,10,context);
	renderDigit(Margin_Left+40*(Radius+1),Margin_Top,parseInt(minutes/10) ,context);
	renderDigit(Margin_Left+55*(Radius+1),Margin_Top,minutes%10,context);
	renderDigit(Margin_Left+70*(Radius+1),Margin_Top,10,context);
	renderDigit(Margin_Left+80*(Radius+1),Margin_Top,parseInt(seconds/10),context);
	renderDigit(Margin_Left+95*(Radius+1),Margin_Top,seconds % 10,context);
}

function update () {
	var nextShowTime = GetCurrentShowTime();
	var nextHours = parseInt(nextShowTime / 3600);
	var nextMinuts = parseInt(nextShowTime - nextHours * 3600)/60;
	var nextSeconds = parseInt(nextShowTime % 60);

	var curHours = parseInt(currentTimeSecond / 3600);
	var curMinuts = parseInt(currentTimeSecond - curHours * 3600)/60;
	var curSeconds = parseInt(currentTimeSecond % 60);

	currentTimeSecond = nextShowTime ;

}

function GetCurrentShowTime () {
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	var ret = Math.round(ret/1000);
	return ret >=0 ? ret : 0; 
}

//x,y为marginleft 和margintop的值,num为要画的数字。
function renderDigit (x,y,num,ctx) {

	ctx.fillStyle = "rgb(0,102,153)";

	for (var i = 0;i < digit[num].length;i++) {
		for(var j = 0;j<digit[num][i].length;j++)
		{
			if(digit[num][i][j] == 1)
			{
				ctx.beginPath();
				ctx.arc(x+(2*j+1)*(Radius+1),y+(2*i+1)*(Radius+1),Radius,0,2*Math.PI);
				ctx.closePath();
				ctx.fill();
			}
		}
	};
}
