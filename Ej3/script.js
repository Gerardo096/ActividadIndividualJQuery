$(document).ready(function() {
    let estado = true;
    $("#hom").click(function(event) {

        if (!estado) {
            $("p.p1").show(3000);
            estado = true;
        } else {
            $("p.p1").hide(3000);
            estado = false;
        }
    });
    $("#mar").click(function(event) {
        if (!estado) {
            $("p.p2").show(3000);
            estado = true;
        } else {
            $("p.p2").hide(3000);
            estado = false;
        }
    });
    $("#brt").click(function(event) {
        if (!estado) {
            $("p.p3").show(3000);
            estado = true;
        } else {
            $("p.p3").hide(3000);
            estado = false;
        }
    });
    $("#lis").click(function(event) {
        if (!estado) {
            $("p.p4").show(3000);
            estado = true;
        } else {
            $("p.p4").hide(3000);
            estado = false;
        }
    });
    $("#mag").click(function(event) {
        if (!estado) {
            $("p.p5").show(3000);
            estado = true;
        } else {
            $("p.p5").hide(3000);
            estado = false;
        }
    });
});