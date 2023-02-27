//Codigo jquery
//Llamada
$(document).ready(function(){
    const numRegex = /^[0-9]$/;
    var size = "1";
    //TAMAÑO
    $('#tamanoI').on('change', function() {
        size = $('#tamanoI option:selected').text()
        $('#cartaContainer').removeClass($('#cartaContainer').attr('class').split(" ")[1])
        $('#fotoContainer').removeClass($('#fotoContainer').attr('class').split(" ")[1])
        $('#textoContainer').removeClass($('#textoContainer').attr('class').split(" ")[1])
        $('#autorContainer').removeClass($('#autorContainer').attr('class').split(" ")[1])
        $('#costeO').removeClass($('#costeO').attr('class').split(" ")[2])
        $('#costeDescO').removeClass($('#costeDescO').attr('class').split(" ")[2])
        $('#efectoO').removeClass($('#efectoO').attr('class').split(" ")[2])
        $('#nombreO').removeClass($('#nombreO').attr('class').split(" ")[2])
        $('#fotoO').removeClass($('#fotoO').attr('class').split(" ")[2])
        $('#categoriaO').removeClass($('#categoriaO').attr('class').split(" ")[2])
        $('#grupoO').removeClass($('#grupoO').attr('class').split(" ")[2])
        if(size === "1"){
            $('#cartaContainer').addClass('cC-sm')
            $('#fotoContainer').addClass('fC-sm')
            $('#textoContainer').addClass('tC-sm')
            $('#autorContainer').addClass('aC-sm')
            $('#costeO').addClass('co-sm')
            $('#costeDescO').addClass('co-sm')
            $('#efectoO').addClass('co-sm')
            $('#nombreO').addClass('n-sm')
            $('#fotoO').addClass('f-sm')
            $('#categoriaO').addClass('ca-sm')
            $('#grupoO').addClass('g-sm')
        } else if (size === "1.25"){
            $('#cartaContainer').addClass('cC-md')
            $('#fotoContainer').addClass('fC-md')
            $('#textoContainer').addClass('tC-md')
            $('#autorContainer').addClass('aC-md')
            $('#costeO').addClass('co-md')
            $('#costeDescO').addClass('co-md')
            $('#efectoO').addClass('co-md')
            $('#nombreO').addClass('n-md')
            $('#fotoO').addClass('f-md')
            $('#categoriaO').addClass('ca-md')
            $('#grupoO').addClass('g-md')
        } else if (size === "1.5"){
            $('#cartaContainer').addClass('cC-lg')
            $('#fotoContainer').addClass('fC-lg')
            $('#textoContainer').addClass('tC-lg')
            $('#autorContainer').addClass('aC-lg')
            $('#costeO').addClass('co-lg')
            $('#costeDescO').addClass('co-lg')
            $('#efectoO').addClass('co-lg')
            $('#nombreO').addClass('n-lg')
            $('#fotoO').addClass('f-lg')
            $('#categoriaO').addClass('ca-lg')
            $('#grupoO').addClass('g-lg')
        }
    });
    //COLOR
    $('#colorI').on('change', function() {
        let color = $('#colorI').val()
        $('#cartaContainer').css("background-color", color)
        let g = parseInt(color.slice(3, 5), 16);
        if(g < 126){
            $('.text').css("color", "#FFFFFF")
            $('.cartaContainer').css("border-color", "#FFFFFF")
            $('.fotoContainer').css("border-color", "#FFFFFF")
            $('.subheaderContainer').css("border-color", "#FFFFFF")
            $('.bodyContainer').css("border-color", "#FFFFFF")
            $('.tiempoContainer').css("border-color", "#FFFFFF")
            $('.autorContainer').css("border-right-color", "#FFFFFF")
            $('.nombreContainer').css("border-right-color", "#FFFFFF")
            $('.nombreContainer').css("border-left-color", "#FFFFFF")
        } else{
            $('.text').css("color", "#000000")
            $('.cartaContainer').css("border-color", "#000000")
            $('.fotoContainer').css("border-color", "#000000")
            $('.subheaderContainer').css("border-color", "#000000")
            $('.bodyContainer').css("border-color", "#000000")
            $('.tiempoContainer').css("border-color", "#000000")
            $('.autorContainer').css("border-right-color", "#000000")
            $('.nombreContainer').css("border-right-color", "#000000")
            $('.nombreContainer').css("border-left-color", "#000000")
        }
    });
    //NUMEROS
    //Coste
    $('#costeI').on('change', function() {
        let coste = $('#costeI').val()
        if ((m = numRegex.exec(coste))!=null){
            $('#costeO').text(coste);
            $('#costeI').css("background-color", "white")
        } else{
            $('#costeI').val(0);
            $('#costeI').css("background-color", "red")
        }
    });
    //Coste
    $('#costeDescI').on('change', function() {
        let costeDesc = $('#costeDescI').val()
        if ((m = numRegex.exec(costeDesc))!=null){
            $('#costeDescO').text(costeDesc);
            $('#costeDescI').css("background-color", "white")
        } else{
            $('#costeDescI').val(0);
            $('#costeDescI').css("background-color", "red")
        }
    });
    //Coste
    $('#efectoI').on('change', function() {
        let efecto = $('#efectoI').val()
        if ((m = numRegex.exec(efecto))!=null){
            $('#efectoO').text(efecto);
            $('#efectoI').css("background-color", "white")
        } else{
            $('#efectoI').val(0);
            $('#efectoI').css("background-color", "red")
        }
    });
    //TIEMPO
    $('#tiempoI').on('change', function() {
        let dato = $('#tiempoI').val()
        $('#tiempoO').text(dato);
    });
    //SELECT
    //Categoria
    $('#categoriaI').on('change', function() {
        let dato = $('#categoriaI option:selected').text()
        $('#categoriaO').text(dato);
    });
    //IMAGEN
    $('#imagenI').on('change', function(e) {
        var input = e.target;
        var reader = new FileReader()
        reader.onload = function(){
            $('#fotoO').attr('src', reader.result)
        }
        reader.readAsDataURL(input.files[0])
    });
    //LETRAS
    //Nombre
    $('#nombreI').on('change', function() {
        let nombre = $('#nombreI').val()
        if(size === "1"){
            if(nombre.length <= 8){
                $('#nombreO').text(nombre)
                $('#nombreI').css("background-color", "white")
            } else{
                $('#nombreI').val("")
                $('#nombreI').css("background-color", "red")
            }
        } else if(size == "1.25"){
            if(nombre.length <= 10){
                $('#nombreO').text(nombre)
                $('#nombreI').css("background-color", "white")
            } else{
                $('#nombreI').val("")
                $('#nombreI').css("background-color", "red")
            }
        } else if(size == "1.5"){
            if(nombre.length <= 12){
                $('#nombreO').text(nombre)
                $('#nombreI').css("background-color", "white")
            } else{
                $('#nombreI').val("")
                $('#nombreI').css("background-color", "red")
            }
        }
    });
    //Grupo
    $('#grupoI').on('change', function() {
        let grupo = $('#grupoI').val()
        if(size === "1"){
            if(grupo.length <= 2){
                $('#grupoO').text(grupo)
                $('#grupoI').css("background-color", "white")
            } else{
                $('#grupoI').val("")
                $('#grupoI').css("background-color", "red")
            }
        } else if(size === "1.25"){
            if(grupo.length <= 3){
                $('#grupoO').text(grupo)
                $('#grupoI').css("background-color", "white")
            } else{
                $('#grupoI').val("")
                $('#grupoI').css("background-color", "red")
            }
        } else if(size === "1.5"){
            if(grupo.length <= 4){
                $('#grupoO').text(grupo)
                $('#grupoI').css("background-color", "white")
            } else{
                $('#grupoI').val("")
                $('#grupoI').css("background-color", "red")
            }
        }
    });
    //Texto
    $('#textoI').on('change', function() {
        let texto = $('#textoI').val()
        $('#textoO').text(texto)
        if(size === "1"){
            if(texto.length <= 54){
                $('#textoO').text(texto)
                $('#textoI').css("background-color", "white")
            } else{
                $('#textoI').val("")
                $('#textoI').css("background-color", "red")
            }
        } else if(size === "1.25"){
            if(texto.length <= 98){
                $('#textoO').text(texto)
                $('#textoI').css("background-color", "white")
            } else{
                $('#textoI').val("")
                $('#textoI').css("background-color", "red")
            }
        } else if(size === "1.5"){
            if(texto.length <= 153){
                $('#textoO').text(texto)
                $('#textoI').css("background-color", "white")
            } else{
                $('#textoI').val("")
                $('#textoI').css("background-color", "red")
            }
        }
    });
    //Cita
    $('#citaI').on('change', function() {
        let cita = $('#citaI').val()
        $('#citaO').text("\""+cita+"\"");
        if(size === "1"){
            if(cita.length <= 13){
                $('#citaO').text("\""+cita+"\"");
                $('#citaI').css("background-color", "white")
            } else{
                $('#citaI').val("")
                $('#citaI').css("background-color", "red")
            }
        } else if(size === "1.25"){
            if(cita.length <= 16){
                $('#citaO').text("\""+cita+"\"");
                $('#citaI').css("background-color", "white")
            } else{
                $('#citaI').val("")
                $('#citaI').css("background-color", "red")
            }
        } else if(size === "1.5"){
            if(cita.length <= 20){
                $('#citaO').text("\""+cita+"\"");
                $('#citaI').css("background-color", "white")
            } else{
                $('#citaI').val("")
                $('#citaI').css("background-color", "red")
            }
        }
        
    });
    //Autor
    $('#autorI').on('change', function() {
        let autor = $('#autorI').val()
        if(autor.length <= 10){
            $('#autorO').text("Autor: " + autor);
            $('#autorI').css("background-color", "white")
        } else{
            $('#autorI').val("")
            $('#autorI').css("background-color", "red")
        }
    });
});