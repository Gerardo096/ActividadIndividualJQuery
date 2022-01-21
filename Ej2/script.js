$(document).ready(function() {

    var cont = 0;
    $("#insertar").click(function(event) {
        var timestamp = event.timeStamp;
        if (cont == 0 || cont % 7 == 0) {

            $("table").append(" <tr><td><img src='https://loremflickr.com/200/200?random+" + timestamp + "'></td></tr>");
        } else {
            $("table tr").append(" <td><img src='https://loremflickr.com/200/200?random+" + timestamp + "'></td>");
            $("table tr td").css("display", "none");
            //el efecto se aplica a todos los td por eso se ve tan extraño pero funciona perfectamente
            $("table tr td").fadeIn(1000);


        }
        cont++;
    });
    $("#eliminar").click(function(event) {
        $("table tr td").last().remove();

    });
});