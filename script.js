function calcularMedia(){
    const textoNota1 = document.getElementById("nota1").value
    const textoNota2 = document.getElementById("nota2").value
    const textoNota3 = document.getElementById("nota3").value

    const nota1 = Number(textoNota1)
    const nota2 = Number(textoNota2)
    const nota3 = Number(textoNota3)

    const media = (nota1 + nota2 + nota3)/3
    let situacao 
    if (media >=7){situacao = "APROVADO"}

    else if (media >=5){situacao = "RECUPERAÇÃO"}
    else {situacao ="REPROVADO"}

    const mediaFormatada = media. toFixed (1)
    document. getElementById("resultado").textContent= "Média: " + mediaFormatada + "- Situação: "+ situacao


}