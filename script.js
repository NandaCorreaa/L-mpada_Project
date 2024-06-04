let imagem = document.querySelector("img"); // Seleciono o elemento <img> da página e o armazeno na variável 'imagem'

// Defino a função 'lampadaApagada' para alterar a imagem e o texto quando a lâmpada está apagada
function lampadaApagada() {
    imagem.src = "./Assets/lampada_desligada.png"; // Modifico o atributo 'src' da imagem para mostrar a lâmpada desligada
    titulo.innerText = "A lâmpada está apagada!";   // Altero o texto do h1 para indicar que a lâmpada está apagada
    corpo.style.background = "url('./Assets/bg-luz-apagada.jpg')";   // Modifico o background da página para um específico de luz apagada
    titulo.style.color = "white";   // Mudo a cor do texto do cabeçalho para branco
    corpo.style.backgroundPosition = 'bottom'
}

// Defino a função 'lampadaAcesa' para alterar a imagem e o texto quando a lâmpada está acesa
function lampadaAcesa() {
    imagem.src = "./Assets/lampada_ligada.png";   // Modifico o atributo 'src' da imagem para mostrar a lâmpada ligada
    titulo.innerText = "A lâmpada está acesa!";   // Altero o texto do h1 para indicar que a lâmpada está acesa
    titulo.style.color = "black";   // Mudo a cor do texto do h1 para preto
    corpo.style.background = "url('./Assets/bg-luz-acesa.jpg')";   // Modifico o background da página para um específico de luz acesa
    corpo.style.backgroundPosition = 'bottom'
}
let corpo = document.body; // Seleciono o elemento <body> da página e o armazeno na variável 'corpo'

const titulo = document.querySelector("h1"); // Seleciono o elemento <h1> da página e o armazeno na constante 'titulo'
