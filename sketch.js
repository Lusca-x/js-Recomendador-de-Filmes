// Idade 18 anos:
// 1) As tranças do Careca, 18 anos, romance
// 2) Bastardos Inglorios, ação
// 3) Annabelle, terror

// Idade 12 anos:
// 1) As Branquelas, ação
// 2) Coraline e o mundo Secreto, terror
// 3) A barraca do beijo, romance

// Idade Livre:
// 1) Enrolados, romance
// 2) Orion e o escuro, terror
// 3) Carros, ação

let campoIdade;
let campoAção;
let campoTerror;
let campoRomance;
let Filme;


function setup() {
  createCanvas(400, 400);
  createElement('h2', 'Recomendador de filmes');
  createSpan('idade: ' )
  campoIdade = createInput('15');
  createElement('h4','Escolha somente um gênero:')
  campoAção = createCheckbox('Ação');
  campoTerror = createCheckbox('Terror');
  campoRomance = createCheckbox('Romance');
  
}

function draw() {
  background('orange');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('black')

  let idade = campoIdade. value();
  let ação = campoAção. checked();
  let terror = campoTerror. checked();
  let romance = campoRomance. checked();
  
  filme = geraRecomendação(idade, ação, terror, romance)

    text(filme, width/2, height/2);
}
  
  function geraRecomendação(idade, ação, terror, romance){
  if (idade >= 18){
    if(ação){
      return 'Bastardos Inglorios'
  }else if (terror){
    return'Annabelle';
  }else if(romance){
    return 'As tranças do Careca';
  }else{
    return 'Bastardos Inglorios';
  }
  }else if (idade >= 12){
    return'As Branquelas';
  }else{
    return 'Carros';
  }
    if(ação){
      return 'As Branquelas'
 }else if (terror){
   return 'Coraline e o mundo secreto';
 }else if(romance){
   return 'A barraca do beijo';
 }else{
   return 'Carros';
 }
}
 
