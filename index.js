function Calcular() {
    
    let nota1 = document.getElementById("nota1");
    let valorNota1 = nota1.value;
    let valorNota1Numerico = parseFloat(valorNota1);
    let nota2 = document.getElementById("nota2");
    let valorNota2 = nota2.value;
    let valorNota2Numerico = parseFloat(valorNota2);
    let nota3 = document.getElementById("nota3");
    let valorNota3 = nota3.value;
    let valorNota3Numerico = parseFloat(valorNota3);

    let media = (valorNota1Numerico + valorNota2Numerico + valorNota3Numerico) / 3;

    let mediaFixada = media.toFixed(1);

    let mediaDoAluno = document.getElementById("media-do-aluno");

    let mensagem = "Sua Média Foi " + mediaFixada;

    mediaDoAluno.innerHTML = mensagem

     }
