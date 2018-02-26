$(document).ready(function () {
    $("#alert-target").click(function () {
        toastr["info"]("I was launched via jQuery!")
    })

})