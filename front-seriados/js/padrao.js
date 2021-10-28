$(document).ready(function (){
    $("#cadSeriado").hide();
    $("#cadSeriado").css("visibility", "visible");
    $(".mensagens").css("visibility", "visible").hide();
    $("#abrirFormularioCadastroSeriado").click(function () {
        $("#idSeriado").prop('disabled', true);
        $("#cadSeriado").show();
    });

    $("#btnSalvar").click(function () {
        cadastrarSeriado();

    })
})