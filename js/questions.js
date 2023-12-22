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
];
