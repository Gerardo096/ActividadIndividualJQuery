function alternarImagen(imagen) {
    $("#imagen").css("width", "0px");
    $("#imagen").css("opacity", "0");
    $("#imagen").animate({ opacity: 1, width: "80%" }, 800);
    document.getElementById("imagen").src = imagen.src;


}