//Selecionada todas as células
const cellElements = document.querySelectorAll("[data-cell]");

const handledClick = (e) => {
    //Aparecer uma mensagem para digitar um valor, sendo 1, 2 ou 3
    const cell = e.target;

    //Colocando a, aparece 1;
    //Colocando b, aparece 2;
    //Colocanod c, aparece 3;
    const classToAdd = "c";
    
    
    
    // Deixar o quadrado selecionado.
    cell.classList.add(classToAdd);
};

//Cria um for para todos as células para que fiquem ajeitadas e
//prontas para serem clicadas.
for (const cell of cellElements){
    //once : false = poderá ser clicado mais de uma vez
    cell.addEventListener("click", handledClick, {once: false});
}
