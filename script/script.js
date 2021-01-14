function verifica(){
    a = document.getElementById('catA').value;
    b = document.getElementById('catB').value;
    c = document.getElementById('hip').value;
    teste = 0;
    vazio = "";
    if(a == ""){
        teste +=1;
        vazio = "a";
    }
    if(b == ""){
        teste +=1;
        vazio = "b";
    }
    if(c == ""){
        teste +=1;
        vazio = "c";
    }
    if(teste != 1){
        document.getElementById("resposta").innerHTML = "Preencha exatamente dois campos com números.";
        return false;
    }else{
        document.getElementById("resposta").innerHTML = "";
        return(vazio);
    }	
}
function calcular(){
    retorno = verifica();
    //console.log("retorno "+retorno);
    if(retorno != true){
        a = parseFloat(document.getElementById('catA').value);
        b = parseFloat(document.getElementById('catB').value);
        c = parseFloat(document.getElementById('hip').value);
        if((Math.abs(b - c) < a && a < (b + c)) && (Math.abs(a - c) < b && b < (a + c)) && (Math.abs(a - b) < c && c < (a + b))){
            document.getElementById("resposta").innerHTML = "Não forma triângulo.";
        }else{
            if(retorno == "a"){
                a = Math.sqrt((c*c)-(b*b));
                document.getElementById('catA').value = a;
            }
            if(retorno == "b"){
                b = Math.sqrt((c*c)-(a*a));
                document.getElementById('catB').value = b;
            }
            if(retorno == "c"){
                c = Math.sqrt((a*a)+(b*b));
                document.getElementById('hip').value = c;
            }
        }
        
    }    
}