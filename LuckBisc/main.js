const scr1 = document.querySelector('.scr1')
const scr2 = document.querySelector('.scr2')
const btn_try = document.querySelector('#btn-try')
const btn_reset = document.querySelector('#btn-reset')
const phrases = ['É em meio a dificuldade que se encontra a oportunidade','O êxito é ir de frustração a frustração sem perder a animação','Mesmo que algo pareça difícil, nunca desista antes de tentar','Você é o único que entende as suas dificuldades, por isso motive se a prosseguir','Não é uma vida ruim, é apenas um dia ruim, lembre-se disso','A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis','Que os dias bons se tornem rotina, e os ruins se tornem raros','É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota','Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução','Já pensou que você já superou muitas dificuldades até aqui?'] 
let index = phrases.length 
let randomPhrase = phrases[Math.round(Math.random() * index)]

// Events 
btn_try.addEventListener('click', randomPhraseClick)
btn_reset.addEventListener('click', resetPhraseClick)
document.addEventListener('keypress', randomEnter)


function randomPhraseClick(e) {
  toggleScreen()
  scr2.querySelector('p').innerText = randomPhrase
}

function randomEnter(e) {
  if(e.key == 'Enter' && scr2.classList.contains('hide')){
    randomPhraseClick()
  }
}

function resetPhraseClick () {
  toggleScreen()
  randomPhrase = phrases[Math.round(Math.random() * index)]
}

function toggleScreen() {
  scr1.classList.toggle('hide')
  scr2.classList.toggle('hide')
}