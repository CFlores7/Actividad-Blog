function capitulo(){
    var capitulo = document.getElementById("capitulo");
    var capi = capitulo.options[capitulo.selectedIndex].text;
    
    if(capi == "Cap 1 - Begin"){
        var informacion = `El primer dia nos encontrabamos en la clase de Programación web, al final de esta 
                        se nos mostró un video, en el cual hablaba Ale Rav. Y en ese momento conocimos su plan.
                        Al finalizar esto, escuchamos la nota de voz de Kurt quien nos pedia ayuda para
                        detener a Ale Rav. Luego nuestro catedrático Néstor nos dio el inicio con el codigo QR,
                        para asi iniciar este juego. Más tarde luego de completar el primer paso, leímos el codigo
                        fui al Polideportivo pero no encontré absolutamente nada, asi que tuve que esperar al 
                        siguiente dia por el Pad correspondiente.`
        document.getElementById("cap").innerHTML = capi;
        document.getElementById("info").innerHTML = informacion;
        document.getElementById("img1").setAttribute('src', 'images/cap1.jpeg');
        document.getElementById("img2").setAttribute('src', 'images/cap1-2.jpeg');
    } else if(capi == "Cap 2 - O-O-O"){
        var informacion = `Para este día Carlos nos hizo llegar el Pad necesario sobre la información que debiamos
                        conocer. Lo leí durante la clase de Adm. de Bases de Datos para empezar a trabajar en ello
                        luego de concluir con este nivel se me reveló el siguiente Pad, pero no pude hacer lo que
                        en éste se detallaba ya que yo estaría en clases el tercer dia en el horario que decía.
                        Así es que de nuevo tuve que esperar el siguiente Pad para seguir con el juego.`;
        document.getElementById("cap").innerHTML = capi;
        document.getElementById("info").innerHTML = informacion;
    } else if(capi == "Cap 3 - minus monocromo"){
        var informacion = `Para el tercer día tenia ya resuelto el Pad, en lo que me cayó un correo en el que decía
                        que la clase de Programacion Web estaría suspendida para este día. Estuve todo el día en la
                        Biblioteca de la UCA mientras esperaba el siguiente Pad. En ese tiempo escuche la nueva nota
                        de voz que nos mandó Kurt.`;
        document.getElementById("cap").innerHTML = capi;
        document.getElementById("info").innerHTML = informacion;
    } else if(capi == "Cap 4 - cumulonimbus"){
        var informacion = `Fui a la clase correspondiente de Adm. de Bases de Datos para ese día, al iniciarla Carlos
                        nos mostró el video de Ale Rav y la nueva nota de voz que Kurt nos mandó, al terminar de escucharla
                        todos corrimos hacia la terraza de las aulas B, y llegó un drone en el cual se encontraba el Pad 
                        para este día, al terminar la clase fui a realizarlo para asi obtener el siguiente Pad`;
        document.getElementById("cap").innerHTML = capi;
        document.getElementById("info").innerHTML = informacion;
        document.getElementById("img1").setAttribute('src', 'images/cap 4-2.jpeg');
        document.getElementById("img2").setAttribute('src', 'images/cap 4-1.jpeg');
    } else if(capi == "Cap 5 - Commit"){
        var informacion = `Al obtener el Pad, me di cuenta que habiamos terminado todo y Kurt nos pidio reunirnos a todos
                        en la Magna V este día Viernes, y asi como lo decía llegue al lugar en la hora, pero nos encontramos
                        con la sorpresa de que Kurt habia sido envenenado por Ale Rav, dentro de los papeles que habian en 
                        el folder de Kurt encontramos un codigo QR el cual escaneamos, y para nuestra sorpresa era el cual 
                        revelaba la identidad de Ale Rav... nos quedamos sorprendidos al ver quien era, y era, el catedrático
                        Erick Varela...`;
        document.getElementById("cap").innerHTML = capi;
        document.getElementById("info").innerHTML = informacion;
    } else {
        alert("Seleccione una opcion...");
    }

}