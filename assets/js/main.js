//variables
const accordition = document.getElementsByClassName('Q_and_A_content-box');


//mobile menu
document.getElementById('icon').addEventListener('click',function(){
    const x = document.getElementById("ciao");
    x.classList.toggle("show");
})


//accordition Q&A section
for (i = 0; i < accordition.length; i++){
    accordition[i].addEventListener('click',function (){
        this.classList.toggle('active')
    })
}
    
//load more button
function addQuestions() { //nome funzione
    const questionList = document.querySelector(".Q_and_A_content_column_1"); // seleziona tutti i documenti col nome tra "" nella variabile questionList
    const questionList2 = document.querySelector(".Q_and_A_content_column_2");
    const questions = [ //array di stringhe necessarie a generare testo nell'elemento
        "How do I apply for a traffic Permit?", 
        "When will I receive my permit?",
        "How much does a permit cost?",
        "What do I need in the event of a Lost/Stolen permit?"
    ];
    const answers = [ //array di stringhe necessarie a generare testo nell'elemento
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor vulputate volutpat. Fusce eros quam, faucibus vitae velit at, pharetra ultricies metus.",
        "Most Traffic permits require a minimum of four business days to process.",
        "The cost of the Public Space permit varies, depending on the scope of work",
        "You need to complete and sign a Statutory Declaration"];

        for (var i = 0; i < 2; i++) { //ripeti finche i non è maggiore di 4
            let container = document.createElement("div"); // la variabile container potrà creare un elemento div
            container.className = "Q_and_A_content-box"; //generiamo un elemento div con la class name che gli passiamo
    
            let newQuest = document.createElement("div");// la variabile newquest potrà creare un elemento div
            newQuest.className="label"; //assegnamo al div la class name label
            newQuest.innerHTML = `<span class="label_text">${questions[i]}</span>`;  //nel div inseriamo tutto lo <span> al cui interno inseriamo 1 elemento del nostro array question
    
            let newAnswer = document.createElement("div");
            newAnswer.className = "content";
            newAnswer.innerHTML =`<span>${answers[i]}</span> `

            container.appendChild(newQuest);
            container.appendChild(newAnswer);
            questionList.appendChild(container);
            questionList2.appendChild(container);
            for (i = 0; i < accordition.length; i++){
                accordition[i].addEventListener('click',function (){
                    this.classList.toggle('active')
                })
            }
        }
};
