/*window.addEventListener("load", function() {
    alert("Assine nossos termos de uso!");
}); */

window.addEventListener("beforeunload", function(e) {
    this.event.returnValue = null;
});

//Código a corrigir...