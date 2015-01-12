
//funció de canvi de imatge al html a la barra del menu

function inn(x) {
    
    if (x==1){
        document.getElementById("homeimg").src = "imatges/menu/home2.png";
    }
    else if (x==2){document.getElementById("clasicasimg").src = "imatges/menu/clasicas.png";}
    else if (x==3){document.getElementById("foroimg").src = "imatges/menu/foro.png";}
    else if (x==4){document.getElementById("contactoimg").src = "imatges/menu/contacto.png";}
    
}     

function out(x) {
       
    if (x==1){
        document.getElementById("homeimg").src = "imatges/menu/home2h.png";
    }
    else if (x==2){document.getElementById("clasicasimg").src = "imatges/menu/clasicash.png";}
    else if (x==3){document.getElementById("foroimg").src = "imatges/menu/foroh.png";}
    else if (x==4){document.getElementById("contactoimg").src = "imatges/menu/contactoh.png";}
    
}    