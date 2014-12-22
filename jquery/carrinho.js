var atualizaDados = function(){
			var total = 0;
			var itens = $(".item-total"); 
			for(i = 0; i < itens.length; i++){
				var item = $(itens[i]);
				var valor = parseFloat(item.text());
				total = total + valor;
			}
			$("#valor-total").text(total);
			$("#quantidade-de-itens").text(itens.length);
		}

		var removeItem = function(event){
			event.preventDefault();
			var quantidadeAtual = parseInt($('#quantidade-de-itens').text());
			var novoValor = quantidadeAtual - 1;
			$('#quantidade-de-itens').text(novoValor);
			var linha = $(this);
			linha.closest('tr').remove();
			atualizaDados();

		}
		var aposInicializado = function(){
			atualizaDados();
			$(".remove-item").click(removeItem);
		}
		$(aposInicializado);