$(document).ready(function(){
    $("#imprimir").on('click', function () {
        html2canvas($("#cartaContainer"),
    {
        onrendered: function (canvas)
        {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'carta.jpg';
            a.click();
        }
    });
});
})