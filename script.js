function insert(num){

    var result = document.getElementById("mostrar").innerHTML;
    if(result.length < 11){
    document.getElementById("mostrar").innerHTML = result + num;
    }
 
}

function clean(){
    document.getElementById("mostrar").innerHTML = "";
}

function igual(){
    try{
        var resultado = document.getElementById("mostrar").innerHTML;

        if(resultado){
            document.getElementById("mostrar").innerHTML = eval(resultado);
        }
    }catch(execption){
        document.getElementById("mostrar").innerHTML = "Error"
    }

    
}

function backspace(){
    var result = document.getElementById("mostrar").innerHTML;

    document.getElementById("mostrar").innerHTML = result.substring(0, result.length - 1);
}