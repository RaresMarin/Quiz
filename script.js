const quiz = {
    intrebari: [
        "Which gas makes up most of the Earth's atmosphere?",
        "In which year did the Berlin Wall fall?",
        "What is the capital of New Zealand?",
        "Which element has the atomic number 6?",
        "Who painted 'The Persistence of Memory'?",
        "Which planet has the shortest day?",
        "In computing, what does 'HTTP' stand for?",
        "What is the longest river in South America?",
        "Which author wrote The Handmaid’s Tale?",
        "What is the square root of 256?",
        "Which famous scientist developed the theory of general relativity?",
        "In what year was the first iPhone released?",
        "Which country hosted the 2016 Summer Olympics?",
        "Which Shakespeare play features the line 'To be, or not to be'?",
        "What does the 'C' stand for in 'CPU'?",
        "Which organ in the human body produces insulin?",
        "In the TV show Friends, what is the name of Ross’s second wife?",
        "Which language is the most spoken worldwide by total number of speakers?",
        "What is the currency of Japan?",
        "Which instrument has keys, pedals, and strings?"
    ],
    variante: [
        ["A. Oxygen", "B. Hydrogen", "C. Nitrogen", "D. Carbon Dioxide"],
        ["A. 1989", "B. 1987", "C. 1999", "D. 1991"],
        ["A. Auckland", "B. Wellington", "C. Christchurch", "D. Hamilton"],
        ["A. Oxygen", "B. Nitrogen", "C. Carbon", "D. Helium"],
        ["A. Pablo Picasso", "B. Salvador Dalí", "C. Claude Monet", "D. Vincent van Gogh"],
        ["A. Mercury", "B. Earth", "C. Jupiter", "D. Mars"],
        ["A. HyperText Transfer Protocol", "B. High-Tech Transfer Program", "C. Hyper Tool Text Processing", "D. Host Text Transport Protocol"],
        ["A. Orinoco", "B. Paraná", "C. Madeira", "D. Amazon"],
        ["A. Margaret Atwood", "B. Toni Morrison", "C. Alice Walker", "D. Virginia Woolf"],
        ["A. 14", "B. 16", "C. 18", "D. 20"],
        ["A. Isaac Newton", "B. Albert Einstein", "C. Niels Bohr", "D. Stephen Hawking"],
        ["A. 2005", "B. 2006", "C. 2007", "D. 2008"],
        ["A. China", "B. Brazil", "C. Greece", "D. UK"],
        ["A. Macbeth", "B. Hamlet", "C. Othello", "D. King Lear"],
        ["A. Central", "B. Core", "C. Control", "D. Command"],
        ["A. Liver", "B. Kidney", "C. Pancreas", "D. Gallbladder"],
        ["A. Rachel", "B. Emily", "C. Carol", "D. Susan"],
        ["A. English", "B. Mandarin Chinese", "C. Hindi", "D. Spanish"],
        ["A. Yuan", "B. Won", "C. Dollar", "D. Yen"],
        ["A. Harp", "B. Piano", "C. Guitar", "D. Organ"]
    ],
    raspunsuri: [
        "C. Nitrogen",
        "A. 1989",
        "B. Wellington",
        "C. Carbon",
        "B. Salvador Dalí",
        "C. Jupiter",
        "A. HyperText Transfer Protocol",
        "D. Amazon",
        "A. Margaret Atwood",
        "B. 16",
        "B. Albert Einstein",
        "C. 2007",
        "B. Brazil",
        "B. Hamlet",
        "A. Central",
        "C. Pancreas",
        "B. Emily",
        "B. Mandarin Chinese",
        "D. Yen",
        "B. Piano"
    ]
};
let index = 0;
let scor = 0;
function intrebare(){
    if(index < quiz.intrebari.length)
    {
    let butoane = document.getElementsByClassName('opt');
    for(let buton of butoane)
    {
    buton.classList.remove('anim');
    buton.disabled = false;
    }
    quiz.variante[index].forEach((text,i)=>{
        butoane[i].textContent = text;
        butoane[i].disabled = false;
    })
    let intrebare = document.getElementById('Intrebare');
    intrebare.textContent = quiz.intrebari[index];
    }
    else{
    document.getElementById('Intrebare').textContent = "Ai terminat quizul!";
    document.querySelectorAll(".opt").forEach(buton => {
        buton.style.display="none";
    }
    )
}
}
function verificare(para){
    const raspuns = quiz.variante[index][para];
    const corect = quiz.raspunsuri[index];
    if(raspuns==corect)
    {
        scor++;
        alert("Rigth!")
    }
    else{
        alert("Wrong! The rigth answer was " + corect);
    }
    document.getElementById("Scor").textContent = "Score: " + scor;
  index++;
  intrebare();

}

function reset(){
    index = 0;
    scor = 0;
    document.getElementById("Scor").textContent = "Score: 0" ;
    let intrebare = document.getElementById('Intrebare');
    intrebare.textContent = "Start the quiz";
    document.querySelectorAll(".opt").forEach(buton => {
        buton.textContent = "";
        buton.classList.add('anim');
        buton.style.display = "inline-block";
        buton.disabled = false;
    });
    intrebare();
}