let frases = [
    "'Pintinho que anda com pato, acaba morrendo afogado'",
    "'Não devemos ser melhor que ninguém, apenas melhor que ontem'",
    "'Dias melhores estão por vir! Eles se chamam Sábado, Domingo e Feriado.'",
    "'O mundo é um palco, você é o elenco'",
    "'Dizem que é ofensivo falar com a boca cheia. Pessoalmente, eu acho pior falar com a cabeça vazia.'",
    "'Você tem a faca e o queijo na mão, basta fazer um delicioso misto quente'",
    "'As coisas só são impossíveis se você não tentar'",
    "'As viagens de quilômetros começam com um único passo'",
    "'O senso comum é o menos comum de todos os sensos'",
    "'É melhor saber um pouco de tudo do que tudo de um pouco'",
    "'Quando quiser bater em alguém, bata em si mesmo(a), você não pode revidar o próprio soco!'",
    "'Se um dia você se achar burro, lembre-se, tem gente que acredita que a terra é plana'",
]

const painel = document.querySelector("#frase");
let novaFrase = " ";
//Sorteador de Frase

function gerarFrase(){
    const frase = frases[
        Math.floor(Math.random() * frases.length)
    ];
    painel.innerHTML = frase;
}