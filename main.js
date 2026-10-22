const alunos = ["Afonso", "João", "Maria", "Rafaela"]

const lista = document.getElementById("lista")

for (const aluno of alunos){
    const paragrafo = document.createElement("p")
    p.textContent = aluno
    lista.appendChild(p)
}