let tarefa = document.querySelector("#tarefa");
let enviar = document.querySelector("#enviar");

function criartarefa(texto) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let button = document.createElement("button");

    div.classList.add("conteudo")
    p.textContent = texto;
    button.textContent = "apagar";


    button.addEventListener("click", () => {
        div.remove();
    });


    div.append(p, button);

    document.querySelector("#listatarefas").append(div)
}
enviar.addEventListener("click", () => {
    let valor = tarefa.value;
    if (valor.length == 0) {
        alert("não pode criar tarefa em braco");
        return;
    }
    criartarefa(valor);
    tarefa.value = "";
});