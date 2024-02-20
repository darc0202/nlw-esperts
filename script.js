//Array ou vetores []
const perguntas = [
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Retorna o tipo de uma variável ou expressão",
            "Converte uma string para um número",
            "Retorna a raiz quadrada de um número"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Ambos comparam o valor e o tipo de dados",
            "'===' compara apenas o valor, '==' compara o valor e o tipo",
            "'==' compara apenas o valor, '===' compara o valor e o tipo"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a função do método 'querySelector()'?",
        respostas: [
            "Retorna todos os elementos com uma determinada classe",
            "Retorna o primeiro elemento que corresponde a um seletor CSS especificado",
            "Retorna o último elemento que corresponde a um seletor CSS especificado"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função anônima em JavaScript?",
        respostas: [
            "Uma função sem nome atribuído",
            "Uma função que não pode ser chamada",
            "Uma função que não recebe argumentos"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de comentar um única linha em JavaScript?",
        respostas: [
            "/* */",
            "<!-- -->",
            "//"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' em JavaScript?",
        respostas: [
            "'let' define uma variável de escopo global, 'const' define uma variável de escopo local",
            "'let' permite reatribuição de valor, 'const' não permite",
            "'let' define uma constante, 'const' define uma variável mutável"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'forEach()' faz em um array JavaScript?",
        respostas: [
            "Executa uma função callback para cada elemento no array",
            "Adiciona um elemento no início do array",
            "Remove o último elemento do array"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a finalidade do operador '!' em JavaScript?",
        respostas: [
            "Concatenação de strings",
            "Negar uma expressão booleana",
            "Atribuição de valores"
        ],
        correta: 1
    },
    {
        pergunta: "O que é o 'DOM' em JavaScript?",
        respostas: [
            "Document Object Model, representa a estrutura de uma página web como objetos",
            "Data Object Model, representa dados em formato de objeto",
            "Direct Object Method, um método de interação com objetos JavaScript"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a finalidade do método 'push()' em um array JavaScript?",
        respostas: [
            "Remove o último elemento do array",
            "Adiciona um elemento no início do array",
            "Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array"
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


//loop ou laço de repetição
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  //querySelector seleciona a tag q vc qr
  quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  //dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector("input").onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if (estaCorreta){
        corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  }


  
  
  quizItem.querySelector('dl').appendChild(dt)
}

//remove o primeiro item
quizItem.querySelector('dl dt').remove()

  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}