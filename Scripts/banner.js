
// Debugger do script.
var contador = 0;
// Quantidade de limite de banners que aparecem.
var Limite = 4;
// 3000 = 3 segundos de espera ate o banner mudar.
var limiteSegundos = 3000;
// Cria a função carregaBanner()
function carregaBanner(){
var banner = new Array();
// Aqui entram as imagens.
banner[0] = "images/images/dcrbrasil.png";
banner[1] = "images/images/cielo.jpg";
banner[2] = "images/images/invitrx.png";
banner[3] = "images/images/macrodigital.png";
if(contador == Limite){
 
	contador = 0;
 
	document.getElementById('imagem').src = banner[contador++];
 
} else {
 
	document.getElementById('imagem').src = banner[contador++];	
	
 
}
 
 
 
}
// Faz com que o primeiro banner apareça sem esperar os segundos.
if(setTimeout("carregaBanner()",0)){
// Executa a rotação do banner
	setInterval("carregaBanner()",limiteSegundos);
 
}
 
function carregaBanner2(){
	var banner2 = new Array();
	banner2[0] = "images/images/bradesco.jpg";
	banner2[1] = "images/images/bodymovement.png";
	banner2[2] = "images/images/projetopertencer.png";
	banner2[3] = "images/images/artetres.png";
	if (contador == Limite){
		contador = 0;
		
		document.getElementById('imagem2').src = banner2[contador++];
	}else{
		document.getElementById('imagem2').src = banner2[contador++];
	}
}

if(setTimeout("carregarBanner2()",0)){
	setInterval("carregaBanner2()",limiteSegundos);
}

function carregaBanner3(){
	var banner3 = new Array();
	banner3[0] = "images/images/android.jpg";
	banner3[1] = "images/images/secreto.png";
	banner3[2] = "images/images/papelaco.png";
	banner3[3] = "images/images/secreto.png";
	if (contador == Limite){
		contador = 0;
		
		document.getElementById('imagem3').src = banner3[contador++];
	}else{
		document.getElementById('imagem3').src = banner3[contador++];
	}
}

if(setTimeout("carregarBanner3()",0)){
	setInterval("carregaBanner3()",limiteSegundos);
}