$(document).ready(function(){
    let cnt = 0;
    var wordChar;
    var contadorTresPalabras=0;
    var tresPalabras;
    function readWordChar(word, cnt){
        setTimeout(function(){
            $(".word-container .word").append(word);
            /*if(contadorTresPalabras==3){
                checkWeb(tresPalabras);
                tresPalabras = "";
                contadorTresPalabras = 0;
            }
            tresPalabras += word;
            contadorTresPalabras++;*/
            
            //console.log(cnt + ".- " + word);
        },1000*cnt);
    }
    
    $.get("./src/EjemploWebEbayCETI.txt", function(archivo) {
        for(wordChar of archivo){
            readWordChar(wordChar, cnt);
            cnt++;
        } 
    });
    
    var cn = 1;
    function checkWeb(caracter){
        if(caracter==="web"){
           console.log(cn+".- Se encontró Web");
            cn++
        }
    }
});