// isso aqui deveria estar no json-server (database.json)
// criar um arquivo question-service.js / arquivo que devera conter as requisicoes


export default [
    {
        question:{title: "Qual desses países não fazem parte do continente asiático?"},
        answers: [
            { option: "Laos", correct: false },
            { option: "Benin", correct: true  },
            { option: "India", correct: false },
        ],

    },
    {
        question:{title: "Qual é o país mais populoso do mundo?"},
        answers: [
            { option: "Indía", correct: true },
            { option: "China", correct: false },
            { option: "Paquistão", correct: false },
        ],
    },
    {
        question: {title: "Qual é o país mais extenso do continente americano?"},
         answers: [
            { option: "Brasil", correct: false },
            { option: "México", correct: false },
            { option: "Estados Unidos", correct: true },
        ],
    },
    {
        question: {title: "Qual é o idioma oficiial da Suíça?"},
        answers: [
            { option: "Alemão, Francês, Italiano e Suíço", correct: false },
            { option: "Alemão, Francês, Italiano e Romanche", correct: true },
            { option: "Alemão, Francês e Suíço", correct: false },
        ],
    },
    {
        question: {title: "Em qual país fica localizado a cidade de Macchu Picchu?"},
        answers: [
            { option: "Colombia", correct: false },
            { option: "Peru", correct: true },
            { option: "Venezuela", correct: false },
        ],
    },
    {
        question: {title: "Qual oceano banha o Brasil?"},
        answers: [
            { option: "Oceano Atlântico", correct: true },
            { option: "Oceano Índico", correct: false },
            { option: "Oceano Pacífico", correct: false },
        ],
    },
    {
        question: {title: "Jacarta é a capital de qual país?"},
        answers: [
            { option: "Japão", correct: false },
            { option: "Nova-Zelândia", correct: false },
            { option: "Indonésia", correct: true },
        ],
    },
    {
        question: {title: "Qual idioma é falado no Chipre"},
        answers: [
            { option: "Grego e Francês", correct: false },
            { option: "Turco e Chipreano", correct: false },
            { option: "Grego e Turco", correct: true },
        ],
    },
    {
        question: {title: "Qual desses 3 Países tem mais habitantes:"},
        answers: [
            { option: "Maldivas", correct: true },
            { option: "Malta", correct: false  },
            { option: "Bahamas", correct: false },
        ],
    },
    {
        question: {title: "Qual era a moeda oficial do Brasil antes do Real"},
        answers: [
            { option: "Cruzados", correct: false },
            { option: "Cruzeiro", correct: true },
            { option: "Ouro", correct: false },
        ],
    },
];
