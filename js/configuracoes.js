document.addEventListener('DOMContentLoaded', function() {
    input = document.querySelector('input');
    button = document.querySelector(".adicionar");
    button.addEventListener("click", function() {
        value = input.value;
        const bolha = 
        `<h2 class='summary'>
            ${value}
          </h2>`;	
        document.getElementById("salao").innerHTML += bolha;
        input.value = "";
    });
});
