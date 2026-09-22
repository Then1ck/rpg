const MainEngine = {
    startGame() {
        Renderer.addTextBox("Test Text");
        Renderer.addTextBox("Again");
        Renderer.addTextBox("And Again");

        Renderer.nextText();

        window.addEventListener('keydown', (event) => {
            if(event.key === ' '){
                Renderer.nextText();
            }
        })
    }
}

MainEngine.startGame();