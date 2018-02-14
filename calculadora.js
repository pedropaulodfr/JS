var valor, enterbtn, campo, resultado = 0, x;
	function estadoinicial(){
		setTimeout(function(){
			document.getElementById('calculadora').style.display = 'block'; document.getElementById('body').background = 'http://ap.imagensbrasil.org/images/2018/02/14/Fotolia-M.jpg'; document.getElementById('start').style.display = 'none'; campo.focus();},2000);
		campo = document.getElementById('campo');
		campo.focus();
		document.getElementById('operacoesAvancadas').style.display = 'none';
		potencia.onmouseover = function(){document.getElementById('potencia').title = "Clique com o botão direito para usar outro expoente!"};
		percentagem.onmouseover = function(){document.getElementById('percentagem').title = "Insira a percentagem vezes o valor (ex: 20% * 600) e tecle =. Logo após, aperte o simbolo %"};
	}
	window.onload = estadoinicial;
	function calcula(){
		document.getElementById('campo').focus();
	// armazenar o valor do visor em uma variável
		resultado = document.getElementById('campo').value;
		document.getElementById('campo').value = '';
		if((x = document.getElementById('visor').innerHTML = eval(resultado)) == undefined){
			document.getElementById('visor').innerHTML = 0;
		}
		if(x == 40028922){
			egg();
		}
	}
	function tecla(a){
		document.getElementById('campo').value += a;
	}
	function reset(){
		document.getElementById('visor').innerHTML = 0;
		document.getElementById('campo').value = '';
		document.getElementById('potencia').value = 'x²';
		campo.focus();
	}
	function enter(){
		enterbtn = event.keyCode;
		if(enterbtn == 13){
			calcula();
		}
	}
	function modebtn(){
		if(document.getElementById('operacoesAvancadas').style.display == 'none'){
			document.getElementById('operacoesAvancadas').style.display = 'block';
		}else{
			document.getElementById('operacoesAvancadas').style.display = 'none';
		}
	}
	function teclaAvancada(b){
		document.getElementById('campo').focus();
		resultado = document.getElementById('campo').value;	
		if(b == 'sqrt'){
			document.getElementById('campo').value = '';
			document.getElementById('visor').innerHTML = '√' + resultado + ' = ' + Math.sqrt(resultado);
		}
		if(b == 'porcento'){
			document.getElementById('visor').innerHTML = (x * 1)/100;
		}
		if(b == 'pow'){
			document.getElementById('campo').value = '';
			document.getElementById('visor').innerHTML = resultado + '^2' + ' = ' + Math.pow(resultado, 2); 
		}
		if(b == 'elevado'){
			var expoente = prompt('Digite um expoente:');
			if(expoente == null){
				document.getElementById('potencia').value = 'x²';
			}else{
				document.getElementById('potencia').value = '^' + expoente;
				document.getElementById('visor').innerHTML = resultado + '^'+ expoente + ' = ' + Math.pow(resultado, expoente);
			}
			document.oncontextmenu = disableselect;
			function disableselect(e){   
				return false   
			}  
		}
	}
	 