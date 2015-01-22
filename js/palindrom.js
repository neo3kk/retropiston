function comprovar(comprovacio) {

    var texto = $("#" + comprovacio).val();
    
    if (texto === "") {
        alert("Has d'introduïr una paraula!");
    }
    else {
        if (palindrom(texto)) {
            alert("ha anat be");
        } else {
            alert("no es palindrom");
        }
    }
}

function palindrom(p) {
    p = p.replace(/\s/g,'');
    
    p = p.toLowerCase();

    reverse = p.split('').reverse().join('');

    if (p === reverse) {

        return true;
    }
    else {
        return false;
    }
}

