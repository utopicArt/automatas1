$(document).ready(function(){
    let cnt = 1;
    
    var wordChar;
    var contadorDosPalabras=0;
    var palabra;
    
    var palabraTemp = "";
    var inLocatedFlag=false;
    
    var finPalabra=false;
    
    //Esta función se encarga de verificar que no haya saltos de linea ni espacios
    function readWordChar(word, cnt){
        setTimeout(function(){
            $(".word-container .word").append(word);
            
            //En caso de que encuentre un salto de linea o espacio; significa que se encontró una palabra, procede a verificar qué palabra es
            if(word==' '||word=='\n'){
                checkWeb(palabra);
                contadorDosPalabras = 0;
            }else{
                //En caso de que no encuentre un salto de linea o espacio; seguirá agregando la letra a la palabra.
                palabra += word;
                contadorDosPalabras++;
            }
        },70*cnt);
        //70*cnt es el tiempo que tardará en leer la siguiente palabra
    }
    
    //Esta función se encarga de leer el archivo de texto
    $.get("./src/test.txt", function(archivo) {
        
        //En caso de que el usuario suba su propio archivo
        if(confirm("¿Desea agregar su propio archivo de texto?")){
            alert("Diríjase a la parte inferior de la página y presione el botón\npara seleccionar su archivo.");
            $("#file").change(function(e){
             
                //Crea una variable que será la url para poder acceder al archivo que subió el usuario.
                var url = URL.createObjectURL(e.target.files[0]);
                
                //Accede al archivo subido y comienza su lectura
                $.get(url, function(file){
                    
                    //Comienza a leer letra por letra del archivo
                    for(wordChar of file){
                        readWordChar(wordChar, cnt);
                        cnt++;
                    } 
                });
            });
            
         //En caso de que el usuario no suba ningún archivo se leerá el archivo por default ubicado en ./src/test.tx
        }else{        
            //Comienza a leer letra por letra del archivo
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
        //Transforma la letra a minusculas
        caracter = caracter.toLocaleLowerCase();
        
        //Comienza a verificar el tipo de palabras, esta parte es el cerebro del programa
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
