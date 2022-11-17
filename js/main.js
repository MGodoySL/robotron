const field = document.querySelectorAll("[data-control]");
const stats = document.querySelectorAll("[data-stats]");

const pecas = {
    bracos: {
        forca: 29,
        poder: 35,
        energia: -21,
        velocidade: -5,
    },

    blindagem: {
        forca: 41,
        poder: 20,
        energia: 0,
        velocidade: -20,
    },
    nucleos: {
        forca: 0,
        poder: 7,
        energia: 48,
        velocidade: -24,
    },
    pernas: {
        forca: 27,
        poder: 21,
        energia: -32,
        velocidade: 42,
    },
    foguetes: {
        forca: 0,
        poder: 28,
        energia: 0,
        velocidade: -2,
    },
};

field.forEach((element) => {
    element.addEventListener("click", (e) => {
        manageData(e.target.dataset.control, e.target.parentNode);
        updateRobot(e.target.dataset.piece, e.target.dataset.control);
    });
});

function manageData(operation, element) {
    const piece = element.querySelector("[data-counter]");

    operation === "+" ? (piece.value = Number(piece.value) + 1) : (piece.value = Number(piece.value) - 1);
}

function updateRobot(piece, operation) {
    stats.forEach((stat) => {
        operation === "+" ? (stat.textContent = Number(stat.textContent) + pecas[piece][stat.dataset.stats]) : (stat.textContent = Number(stat.textContent) - pecas[piece][stat.dataset.stats]);
    });
}
