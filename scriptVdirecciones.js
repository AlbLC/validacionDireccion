//Dirección: Formato: Tipo vía/ Nombre vía, Número, Resto de Datos (piso, portal...etc)
//, CP, Población y País (separados por ,).Se trata de un campo obligatorio.


function direccion() {
    var valor = document.getElementById("casilla").value;
    let array = valor.split(",")

    let comTipoVia = array[0];
    //let comCalle = array[1]
    let comNumero = array[1];
    let comPisoPortal = array[2];
    let comCp = array[3];
    let comPoblacion = array[4];
    let comPais = array[5];
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;



    for (let i = 0; i < comTipoVia.length; i++) {
        if (comTipoVia == "Calle" || comTipoVia == "Avenida" || comTipoVia == "Plaza" || comTipoVia == "Camino"
            || (comTipoVia.charCodeAt(i) >= "a".charCodeAt(0) && comTipoVia.charCodeAt(i) <= "z".charCodeAt(0))
            || (comTipoVia.charCodeAt(i) >= "A".charCodeAt(0) && comTipoVia.charCodeAt(i) <= "Z".charCodeAt(0))
            || (comTipoVia.charCodeAt(i) >= " ".charCodeAt(0))
            || (comTipoVia.charCodeAt(i) >= "/".charCodeAt(0))) {
            contador1++
        }
    }
    if (contador1 == comTipoVia.length) {
        alert("Tipo de via valido")
    } else {
        alert("El tipo de via no es correcto")
    }




    for (let i = 0; i < comNumero.length; i++) {

        if (comNumero.charCodeAt(i) >= "0".charCodeAt(0) && comNumero.charCodeAt(i) <= "9".charCodeAt(0)) {
            contador2++;
        }
    }
    if (contador2 == comNumero.length) {
        alert("El numero es valido")
    } else {
        alert("El numero no es correcto")
    }



    for (let i = 0; i < comPisoPortal.length; i++) {
        if ((comPisoPortal.charCodeAt(i) >= "a".charCodeAt(0) && comPisoPortal.charCodeAt(i) <= "z".charCodeAt(0)) ||
            (comPisoPortal.charCodeAt(i) >= "A".charCodeAt(0) && comPisoPortal.charCodeAt(i) <= "Z".charCodeAt(0))
            || (comPisoPortal.charCodeAt(i) >= "0".charCodeAt(0) && comPisoPortal.charCodeAt(i) <= "9".charCodeAt(0))
            || (comPisoPortal.charCodeAt(i) >= " ".charCodeAt(0))) {

            contador3++;
        }
    }
    if (contador3 == comPisoPortal.length) {
        alert("Es valido")
    } else {
        alert("No es correcto")
    }






    if (comCp.length == 5 && parseInt(comCp) >= 1000 && parseInt(comCp) <= 52999) {
        alert("El CP es valido");
    }
    else {
        alert("CP no es correcto");
    }


    if ((comPoblacion.charCodeAt(0) >= "a".charCodeAt(0) && comPoblacion.charCodeAt(0) <= "z".charCodeAt(0)) ||
        (comPoblacion.charCodeAt(0) >= "A".charCodeAt(0) && comPoblacion.charCodeAt(0) <= "Z".charCodeAt(0))) {
        alert("Poblacion valida")
    } else {
        alert("La poblacion no es correcta")
    }

    if ((comPais.charCodeAt(0) >= "a".charCodeAt(0) && comPais.charCodeAt(0) <= "z".charCodeAt(0)) ||
        (comPais.charCodeAt(0) >= "A".charCodeAt(0) && comPais.charCodeAt(0) <= "Z".charCodeAt(0))) {
        alert("Pais valido")
    } else {
        alert("El pais no es correcto")
    }





}







