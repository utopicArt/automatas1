$(document).ready(function(){
    let cnt = 1;
    
    var wordChar;
    var contadorDosPalabras=0;
    var palabra;
    
    var palabraTemp = "";
    var inLocatedFlag=false;
    
    var finPalabra=false;
    
    function readWordChar(word, cnt){
        setTimeout(function(){
            $(".word-container .word").append(word);
            if(word==' '||word=='\n'){
                checkWeb(palabra);
                contadorDosPalabras = 0;
            }else{
                palabra += word;
                contadorDosPalabras++;
            }
        },70*cnt);
    }
    
    $.get("./src/test.txt", function(archivo) {
        if(confirm("¿Desea agregar su propio archivo de texto?")){
            alert("Diríjase a la parte inferior de la página y presione el botón\npara seleccionar su archivo.");
            $("#file").change(function(e){
                var url = URL.createObjectURL(e.target.files[0]); 
                $.get(url, function(file){
                    for(wordChar of file){
                        readWordChar(wordChar, cnt);
                        cnt++;
                    } 
                });
            });
        }else{        
            for(wordChar of archivo){
                readWordChar(wordChar, cnt);
                cnt++;
            }
        }
    });
    
    var cn = 1;
    var webEncontradas = 0;
    var webayEncontradas=0;
    var ebayEncontradas=0;
    function checkWeb(caracter){
        caracter = caracter.toLocaleLowerCase();
        for(var i=0;i<caracter.length;i++){
            cn = i+1;
            if(caracter.substring(i,i+1)=='w'){
                if(caracter.substring(i+1,i+2)=='e'){
                    if(caracter.substring(i+2,i+3)=='b'){
                        webEncontradas++;
                        $(".word-web .word ol").append("<li>"+caracter+"</li>");
                        $(".word-web .counter span").text(webEncontradas);
                        if(caracter.substring(i+3,i+4)=='a'){
                            if(caracter.substring(i+4,i+5)=='y'){
                                webayEncontradas++;
                                $(".word-webay .word ol").append("<li>"+caracter+"</li>");
                                $(".word-webay .counter span").text(webayEncontradas);
                            }
                        }                      
                    }
                }
            }else if(caracter.substring(i,i+1)=='e'){
                if(caracter.substring(i+1,i+2)=='b'){
                   if(caracter.substring(i+2,i+3)=='a'){
                       if(caracter.substring(i+3,i+4)=='y'){
                            ebayEncontradas++;
                            $(".word-ebay .word ol").append("<li>"+caracter+"</li>");
                            $(".word-ebay .counter span").text(ebayEncontradas);                          
                       }
                   } 
                }
            }
        }
        palabra = "";
    }
});
