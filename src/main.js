$(document).ready(function(){
    let cnt = 0;
    
    var wordChar;
    var contadorDosPalabras=0;
    var dosPalabras;
    
    var palabraTemp = "";
    var inLocatedFlag=false;
    
    var arrowID = [
        "a","b","c","d","e","f","g",
        "h","i","j","k","l","m","n",
        "o","p","q","r","s","t","u",
        "v","v-2","w","x","y","z","aa","ab",
    ];
    function readWordChar(word, cnt){
        setTimeout(function(){
            $(".word-container .word").append(word);
            //$("svg g#"+arrowID[cnt]+" .cls-1").css('stroke','6DC009');
            if(contadorDosPalabras==2){
                palabraTemp=word;
                if(inLocatedFlag==true){
                    checkWeb(dosPalabrasTemp);
                }else{
                    checkWeb(dosPalabras);
                }                
                dosPalabrasTemp = dosPalabras;
                //alert("Dos palabras -"+dosPalabras+"-");
                dosPalabras = "";
                contadorDosPalabras = 0;
            }
            if(word==' '||word==undefined||word=='\n'){
                dosPalabras = "";
                contadorDosPalabras = 0;
            }else{
                dosPalabras += word;
                contadorDosPalabras++;
            }
        },10*cnt);
    }
    
    $.get("./src/EjemploWebEbayCETI.txt", function(archivo) {
        for(wordChar of archivo){
            readWordChar(wordChar, cnt);
            cnt++;
        } 
    });
    
    var cn = 1;
    var webEncontradas = 0;
    var completa;
    function checkWeb(caracter){
        caracter = caracter.toLocaleLowerCase();
        if(caracter==="we"){
            inLocatedFlag=true;
            console.log(cn+".- Se encontró We");
            if(palabraTemp=='b'){
                completa+='eb';
                webEncontradas++;
                $(".word-web .word").append("Web,");
                $(".word-web .counter span").text(webEncontradas);
               console.log(cn+".- Se encontró Web!");
            }else{
                completa="";
                console.log(cn+".- No era Web :c -"+palabraTemp+"-");
                palabraTemp="";
                inLocatedFlag=false;
            }
            cn++
        }
        if(completa==="eb"){
            inLocatedFlag=true;
            console.log(cn+".- Se encontró Eb");      
        }else{
            console.log("No coincide");
        }
    }
});