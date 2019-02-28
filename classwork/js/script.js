function createSq(color) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('chess-wrapper');
    document.body.appendChild(wrapper);
    const documentFragment = document.createDocumentFragment();

    for(let i = 0; i < 64; i++) {
        let block = document.createElement('div');
        block.classList.add('classname');
        block.style.backgroundColor = color;
        documentFragment.appendChild(block);
    }
    wrapper.appendChild(documentFragment);
}

createSq('yellow');