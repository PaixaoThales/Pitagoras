function verifica(operacao){
    a = document.getElementById('catA').value;
    b = document.getElementById('catB').value;
    c = document.getElementById('hip').value;
    if(Number(a) != a || Number(b) != b || Number(b) != b ){
        document.getElementById("resposta").innerHTML = "Impossível de calcular. Coloque apenas números.";
        return false;
    }
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
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("resposta").style.color = "red";
    if(operacao == 1){
        if(teste != 1){
            document.getElementById("resposta").innerHTML = "Preencha exatamente dois campos com números.";
            return false;
        }else{
            return(vazio);
        }	
    }
    if(operacao == 2){
        if(teste == 0){
            return true;
        }else{
            document.getElementById("resposta").innerHTML = "Preencha todos campos com números.";
            return false;
        }	
    }
}
function calcular(){
    retorno = verifica(1);
    if(retorno != true){
        a = parseFloat(document.getElementById('catA').value);
        b = parseFloat(document.getElementById('catB').value);
        c = parseFloat(document.getElementById('hip').value);
        if(retorno == "a"){
            a = Math.sqrt((c * c)-(b * b));
            if((b * b) > (c * c)){
                document.getElementById("catA").value = "sqrt(" + ((c * c) - (b * b)) + ")";
            }else{
                document.getElementById('catA').value = a.toPrecision(3);
            }
        }
        if(retorno == "b"){
            b = Math.sqrt((c * c) - (a * a));
            if((a * a) > (c * c)){
                document.getElementById("catB").value = "sqrt(" + ((c * c) - (a * a)) + ")";
            }else{
                document.getElementById('catB').value = b.toPrecision(3);
            }
        }
        if(retorno == "c"){
            c = Math.sqrt((a * a) + (b * b));
            document.getElementById('hip').value = c.toPrecision(3);
        }
    }    
}
function ehTriangulo(){
    verificador = verifica(2)
    if(verificador == true){
        document.getElementById("resposta").style.color = "black";
        if((Math.abs(b - c) < a && a < (b + c)) && (Math.abs(a - c) < b && b < (a + c)) && (Math.abs(a - b) < c && c < (a + b))){
            document.getElementById("resposta").innerHTML = "Forma um triângulo.";
        }else{
            document.getElementById("resposta").innerHTML = "Não forma um triângulo.";
        }
    }
}