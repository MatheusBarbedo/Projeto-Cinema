function consultar(){

    var section = document.querySelector("section");
    var elem_img = document.getElementById("img_filmes");
    var ckFilmes = document.getElementsByName("ckFilmes");      
     
    var horarioInformado = document.getElementById("horarioFilmes");
    var horarioFilmes = parseInt(horarioInformado.value);

    var assentos = document.getElementById("assentos"); 
    var lugares = String(assentos.value);

    var tipoIngresso = document.getElementById("ingresso");
    var ingressos = String(tipoIngresso.value);
  

    if (ckFilmes[0].checked){    
        
        elem_img.width = 350;
        elem_img.height= 350;
        elem_img.src = "img/filme1.jpg";  
        section.innerHTML +=  "<br> A sessão do seu filme será as: " + horarioFilmes + " Horas e seu assento será: " + lugares + "<br> <br>";
        section.innerHTML +=  "O tipo do seu ingresso é " + ingressos + "<br> ";  

    } 

    else if (ckFilmes[1].checked){ 

        elem_img.width = 350;
        elem_img.height= 350;
        elem_img.src = "img/filme2.jpg";  
        section.innerHTML +=  "<br> A sessão do seu filme será as: " + horarioFilmes + " Horas e seu assento será: " + lugares + "<br> <br>";    
        section.innerHTML +=  "O tipo do seu ingresso é " + ingressos + "<br> ";  

    } 

    else if (ckFilmes[2].checked){ 

        elem_img.width = 350;
        elem_img.height= 350;
        elem_img.src = "img/filme3.jpg";  
        section.innerHTML +=  "<br> A sessão do seu filme será as: " + horarioFilmes + " Horas e seu assento será: " + lugares + "<br> <br>";   
        section.innerHTML +=  "O tipo do seu ingresso é " + ingressos + "<br> ";  

    }

    else if (ckFilmes[3].checked){ 

        elem_img.width = 350;
        elem_img.height= 350;
        elem_img.src = "img/filme4.jpg";  
        section.innerHTML +=  "<br> A sessão do seu filme será as: " + horarioFilmes + " Horas e seu assento será: " + lugares + "<br> <br>";  
        section.innerHTML +=  "O tipo do seu ingresso é " + ingressos + "<br> ";  

    }

    else {

        alert("Selecione um filme")

    }
}  
