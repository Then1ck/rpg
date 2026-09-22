const Renderer = {
    textQueue: [],
    curText: null,

    makeTextBox(strings) {
        const tB = document.createElement('textarea');
        tB.innerText = strings;
        tB.classList.add('textbox');
        tB.readOnly = true;
        this.curText = tB;

        document.body.appendChild(tB);
    },

    addTextBox(strings) {
        this.textQueue.push(strings);
    },

    nextText() {
        if(this.curText){
            this.curText.remove();
        }

        if(this.textQueue.length > 0){
            this.makeTextBox(this.textQueue.pop());
        }
    }
}