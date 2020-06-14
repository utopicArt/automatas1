$(document).ready(function(){
    let cnt = 0;
    
    var wordChar;
    var contadorDosPalabras=0;
    var palabra;
    
    var palabraTemp = "";
    var inLocatedFlag=false;
    
    var arrowID = [
        "a","b","c","d","e","f","g",
        "h","i","j","k","l","m","n",
        "o","p","q","r","s","t","u",
        "v","v-2","w","x","y","z","aa","ab",
    ];
    var finPalabra=false;
    function readWordChar(word, cnt){
        setTimeout(function(){
            $(".word-container .word").append(word);
            //$("svg g#"+arrowID[cnt]+" .cls-1").css('stroke','6DC009');
            if(word==' '||word==undefined||word=='\n'){
                checkWeb(palabra);
                contadorDosPalabras = 0;
            }else{
                palabra += word;
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
    
    
    //$(".word-web .word").append("Web,");
    //$(".word-web .counter span").text(encontradas);
    //console.log(cn+".- Se encontró Web!");
    
    var cn = 1;
    var webEncontradas = 0;
    var webayEncontradas=0;
    var ebayEncontradas=0;
    var completa;
    function checkWeb(caracter){
        caracter = caracter.toLocaleLowerCase();
        console.log(cn+".- "+caracter);
        for(var i=0;i<caracter.length;i++){
            cn = i+1;
            if(caracter.substring(i,i+1)=='w'){
                if(caracter.substring(i+1,i+2)=='e'){
                    if(caracter.substring(i+2,i+3)=='b'){
                        webEncontradas++;
                        $(".word-web .word").append(webEncontradas+".- "+caracter+"\n\n");
                        $(".word-web .counter span").text(webEncontradas);
                        console.log(cn+".- Se encontró Web!");
                        if(caracter.substring(i+3,i+4)=='a'){
                            if(caracter.substring(i+4,i+5)=='y'){
                                webayEncontradas++;
                                $(".word-webay .word").append(webayEncontradas+".- "+caracter+"\n\n");
                                $(".word-webay .counter span").text(webayEncontradas);
                                console.log(cn+".- Se encontró Webay!");
                            }
                        }                      
                    }
                }
            }else if(caracter.substring(i,i+1)=='e'){
                if(caracter.substring(i+1,i+2)=='b'){
                   if(caracter.substring(i+2,i+3)=='a'){
                       if(caracter.substring(i+3,i+4)=='y'){
                            ebayEncontradas++;
                            $(".word-ebay .word").append(ebayEncontradas+".- "+caracter+"\n\n");
                            $(".word-ebay .counter span").text(ebayEncontradas);
                            console.log(cn+".- Se encontró Webay!");                           
                       }
                   } 
                }
            }
        }
        palabra = "";
    }
});