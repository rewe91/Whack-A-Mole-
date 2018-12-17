
/*Skapar globala variabler*/
var score = 0; 
var gameRunning = true;


//$('#dialog').dialog({autoOpen: false});

/*Sidan laddas*/
$(document).ready(function()
{
	
$('#dialog').dialog({autoOpen:false, modal: true});

/*Funktionen körs i 60 sekunder när 60 sekunder har passerat så kommer en 
dialog ruta att publiceras med medellandet gameover. Rutorna kommer också att 
resetas tillbaka till den svart bakgrundsfärgen de fick medans spelet körs*/
	setTimeout(function(){
		$('#dialog').dialog("open");
		$('#counter').text("Game Over! " + score);
		gameRunning = false;
		$('.tile').css('backgroundColor', 'black');
		$('.tile').unbind();
		}, 60000);
	$('.tile').css('backgroundColor', 'black');
		
	

	
/*Här kallas alla rutor och en timer sätts med en intervall som sedan ändra färg på rutorna*/	
$('.tile').each(function(){
		var timer = randomInt(4000, 48000);
		var sak = this;
		
		setTimeout(function(){
			showMole(sak);
		}, timer);
	});
		
});
/*Om spelet körs kommer funktionen kommer att byta till färgen grön inom en tidintervall. 
EFter detta finns en klick function med variabeln score som räknar varje tryck som görs på de gröna rutorna.
Den loggar detta till scoreboarden som publiceras när 60 sekunder har passerat*/
function showMole(hide1){
	if (gameRunning == true){
		
	$(hide1).css('backgroundColor', 'green');
	var timer = randomInt(400, 1200)
	
	setTimeout(function(){
		hideMole(hide1);
	}, timer);
	
	$(hide1).click(function( ){
		score ++;
		hideMole(hide1);
	});
	
	}
}
/*Om spelet körs kommer rutorna att bli svarta. Här unbindas även click funktionen för så att de tidigare rutorna som varit gröna inte ska
vara click när det blivit svarta igen, och på så sätt inte registreras till den slutliga scoreboarden*/
function hideMole(show1){
	if (gameRunning == true){
		
	$(show1).css('backgroundColor', 'black');
	var timer = randomInt(4000, 48000)
	
	setTimeout(function(){
	showMole(show1);	
	}, timer);
	
	$(show1).unbind();	
	}
}
/*Denna funktion generar slumptid på när rutorna ska blinka*/	
function randomInt(min, max){
    return Math.ceil(Math.random() * (max - min) ) + min;
}
	
