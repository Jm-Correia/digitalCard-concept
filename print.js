document.addEventListener("DOMContentLoaded", () => {
    const printLink = document.getElementById('print');
    const container = document.getElementById('container');

    printLink.addEventListener("click", event => {
        event.preventDefault();
        printLink.style.display = "none";
        window.print();
    }, false);


});