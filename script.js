function calcularMedia(){
    const textNota1 = document.getElementById("nota1").value
    const textNota2 = document.getElementById("nota2").value
    const textNota3 = document.getElementById("nota3").value

    const textNota1 = Number(textNota1)
    const textNota2 = Number(textNota2)
    const textNota3 = Number(textNota3)

    const media = (nota1 + nota2 + nota3)/3
    let situacao 
    if (media >=7){situacao = "APROVADO"}

    else if (media >=5){situacao = "RECUPERAÇÃO"}
    else {situacao ="REPROVADO"}

    const mediaFormatada = media. toFixed (1)
    document. getElementById("resultado").textContent= "Média: " + mediaFormatada + "- Situação: "+ situacao


}