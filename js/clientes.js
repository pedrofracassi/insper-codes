document.addEventListener('DOMContentLoaded', function() {
    input = document.querySelector('#pesquisa');
    nomes = document.querySelectorAll('.nomes1');
    section = document.querySelector('.tela_main');
    // get all the names in the list and print them.
    input.addEventListener('keyup', function(event) {
        value = input.value;
        key = event.which || event.keyCode;
        if (key == 13) {
            for (var i = 0; i < nomes.length; i++) {
                // if the name is equal to the input value then print it.
                if (nomes[i].innerText == value) {
                    // dentro do if local storage e modificar o html de bianca
                    section.style.display = "none";
                    // get the first string of the value.
                    var str = value.split(" ");
                    const nova =  
                    `<div class = "tela_main">
                    <div class="section5">
                      <figure>
                        <img src="img/${str[0].toLowerCase()}.png" alt="Foto usuario" />
                      </figure>
                    <div class = "texto1">
                      <a class ='nomes1' href="clientes/${str[0].toLowerCase()}.html"> ${value}</a> 
                    </div>
                    </div>`;
                    document.querySelector(".tela3").innerHTML += nova;

                } else { 
                    section.style.display = "block";
                    section.innerHTML = "Não temos resultado para a pesquisa :(";
                    // make the text in the center of the screen.
                    section.style.textAlign = "center";

            }
        }
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("Refresh");
        btn.appendChild(t);
        btn.style.position = "absolute";
        btn.style.top = "30%";
        btn.style.left = "50%";
        btn.style.transform = "translate(-50%, -50%)";
        btn.style.backgroundColor = "#b7bb8f";
        btn.style.border = "none";
        btn.style.color = "white";
        btn.style.padding = "15px 32px";
        btn.style.textAlign = "center";
        btn.style.textDecoration = "none";
        btn.style.borderRadius= "2rem"
        document.body.appendChild(btn);
        btn.onclick = function() {
            location.reload();
    }
}


});
});
