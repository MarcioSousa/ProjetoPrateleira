const cellElements = document.querySelectorAll("[data-cell]");

//let isCircleturn = false;

const handledClick = (e) => {
    const cell = e.target;
    const classToAdd = "x";
    
    // Deixar o quadrado selecionado.
    cell.classList.add(classToAdd);
};

for (const cell of cellElements){
    cell.addEventListener("click", handledClick, {once: true});
}