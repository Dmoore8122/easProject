const container = document.querySelector(".container");
const resetButton = document.querySelector('button')


const createGrid = (numOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < numOfGrids; j++) {
            const widthAndHeight = 960 / numOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black';
            })

            row.appendChild(gridBox);
        }

        wrapper.appendChild(row);
    }

    container.appendChild(wrapper);
}


resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions do you want to sketch on?'));

    while (userSize > 100) {
        userSize = Number(prompt('Smaller please, less than 100?!'));
    }

    const wrapper = document.querySelector('.wrapper');
    
    if (!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove();
        createGrid(userSize);
    }
})

