var cor, conta,t, hora, minutos,alarme;
			function estadoinicial(){
				mostrador();
				document.getElementById('opcoes').style.display = 'none';
				document.getElementById('notificaAlarme').style.display = 'none';
			}
			window.onload = estadoinicial;
			function mostrador(){
				var data = new Date; 
				var semana = data.getDay(); 
				var dia = data.getDate(); 
				var mes = data.getMonth();
				var ano = data.getFullYear();
				hora = data.getHours();
				minutos = data.getMinutes();
				var segundos = data.getSeconds();
				var mesNome = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");
				var semanaNome = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
				if(segundos <= 9){
					segundos = "0" + segundos;
				}
				if(minutos <= 9){
					minutos = "0" + minutos;
				}
				if(hora <= 9){
					hora = "0" + hora;
				}
				if(mes <=9){
					mes = "0" + mes;
				}
				document.getElementById('mostraHora').innerHTML = hora + " : " + minutos + " : " + segundos;
				t = hora + ":" + minutos;
				document.getElementById('mostraData').innerHTML = dia + " de " +  mesNome[data.getMonth()] + " de " + ano;
				document.getElementById('mostraSemana').innerHTML =  semanaNome[semana];
				x=setTimeout('mostrador()',500);
				if(t == alarme){
					document.getElementById('imagemDespertador').style.display = 'block';
					document.getElementById('alarme_audio').play();
					document.getElementById('imagemDespertador').src = "https://goo.gl/BNPmoN";
					document.getElementById('notificaAlarme').style.display = 'none';
					document.getElementById('notificaAlarmetxt').innerHTML = '';
				}else{
					document.getElementById('imagemDespertador').style.display = 'none';
					document.getElementById('alarme_audio').pause();
				}
			}
			function menu(a){
				var a = a;
				var estadoBtn = document.getElementById('opcoes').style.display;
				if(estadoBtn == 'none'){
					document.getElementById('opcoes').style.display = 'block';
				}else{
					document.getElementById('opcoes').style.display = 'none';
				}
				if(a == "lcd"){
					selectCor();
					document.getElementById('mostraHora').style.color = cor;
					document.getElementById('data').style.color = cor;
					document.getElementById('notificaAlarmetxt').style.color = cor;
				}
				if(a == "fundo"){
					selectCor2();
					document.getElementById('corpo').style.background = cor;
				}
				if(a == "inverte"){
					document.getElementById('mostraHora').style.color = "white";
					document.getElementById('data').style.color = "white";
					document.getElementById('notificaAlarmetxt').style.color = "white";
					document.getElementById('corpo').style.background = "black";
					document.getElementById('notificaAlarme').src = "http://ap.imagensbrasil.org/images/2018/01/21/icon-157349_960_720.png";
				}
				if(a == "oculta-mostraData"){
					var telaData = document.getElementById('data').style.display;
					if(telaData == 'none'){
						document.getElementById('data').style.display = 'block';
					}else{
						document.getElementById('data').style.display = 'none';
					}
				}
				if(a == "ocultar-mostrarCursor"){
					var telaCursor = document.getElementById('mostraHora').style.cursor;
					if((telaCursor == '') || (telaCursor == 'default')){
					document.getElementById('mostraHora').style.cursor = 'none';
					document.getElementById('data').style.cursor = 'none';
					}else{
					document.getElementById('mostraHora').style.cursor = 'default';
					document.getElementById('data').style.cursor = 'default';
					}
				}
				if(a == "ocultarIcon"){
					document.getElementById('menuIcone').style.display = 'none';
				}
				if(a == "mostrarIcon"){
					document.getElementById('menuIcone').style.display = 'block';
				}
				if(a == "clock"){
					alarme = document.getElementById('selectHora').value;
					var decisao = confirm("ATIVAR ALARME?");
					if(decisao){
						alert("ALARME DEFINIDO PARA ÀS " + alarme);
						document.getElementById('notificaAlarme').style.display = 'block';
						document.getElementById('notificaAlarmetxt').innerHTML = "Alarme definido para as " + alarme;
					}else{
						alarme = document.getElementById('selectHora').value = 'none';
					}
				}
			}
			function timeOcultaMenu(){
				setTimeout(function(){document.getElementById('opcoes').style.display = 'none';}, 10000);
			}
			function selectCor(){
				document.getElementById('caixaCor').style.display = 'block';
				cor = document.getElementById('caixaCor').value;
			}
			function selectCor2(){
				document.getElementById('caixaCor2').style.display = 'block';
				cor = document.getElementById('caixaCor2').value;
			}
			function silenciar(){
				alarme = document.getElementById('selectHora').value = 'none';
			}
			function myMove() {
			  var elem = document.getElementById("opcoes");   
			  var pos = 0;
			  var id = setInterval(frame, 20);
			  function frame() {
				if (pos == 18) {
				  clearInterval(id);
				} else {
				  pos++; 
				  elem.style.width = pos + '%'; 
				}
			  }
			}
			var deslocamento  = 0;
			function deslocaLCD(botao,escolha){
				if(escolha == "direita"){
					deslocamento = botao + deslocamento;
					document.getElementById('mostraHora').style.left = deslocamento + "%";
					botao++;
				}
				if(escolha == "esquerda"){
					deslocamento = 0;
					document.getElementById('mostraHora').style.left = botao + deslocamento + "%";
					botao++;
				}
				if(escolha == "baixo"){
					deslocamento = botao + deslocamento;
					document.getElementById('mostraHora').style.top = botao + deslocamento + "%";
					botao++;
				}
				if(escolha == "cima"){
					deslocamento = 0;
					document.getElementById('mostraHora').style.top = botao + deslocamento + "%";
					botao++;
				}
				if(botao == "redefinir"){
					document.getElementById('mostraHora').style.top = 12 + "%";
					document.getElementById('mostraHora').style.left = 23 + "%";
				}
			}