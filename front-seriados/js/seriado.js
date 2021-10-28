var seriado = {
    "id": "",
    "nome": "",
    "dataLancamento": "",
    "descricao": ""
}
var urlPostSeriado = "http://progwebdib.mocklab.io/seriado/"
function cadastrarSeriado() {
    seriado.nome=$("#nomeSeriado").val();
    seriado.dataLancamento=$("#dataLancamentoSeriado").val();
    seriado.descricao=$("#descricaoSeriado").val();

    /*console.log(seriado);
    console.log(JSON.stringify(seriado));*/
    //
    $.ajax({
        url: urlPostSeriado,
        type: "POST",
        contentType: "application/json; charset=utf8",
        crossDomain:true,
        cache: false,
        data: JSON.stringify(seriado),
        timeout: 5000,
        success: function (data) {
            $("#msgFormulario").html(data.mensagem).show();
            // console.log(data);
            $("#wait").toggleClass("esconder");
            $("#cadSeriado").hide();
        },
        beforeSend: function () {
            $("#wait").toggleClass("esconder");
        },
        error: function (data) {
            $("#msgFormulario").html("Erro no cadastro do seriado").toggleClass("mensagens").toggleClass("mensagensErro").show();
            $("#wait").toggleClass("esconder");
        }
    })
}