const MainEngine = {
    sceneList: [],
    curScene: null,

    startGame() {
        this.sceneList.push((self) => {
            Renderer.addTextBox("Test Text");
            Renderer.addTextBox("Again");
            Renderer.addTextBox("And Again");

            Renderer.nextText();

            window.addEventListener('keydown', (event) => {
                if(event.key === ' '){
                    if(Renderer.nextText())
                        MainEngine.finishScene(self);
                }
            })
        })

        this.sceneList.push((self) => {
            Renderer.addTextBox("Test Text2");
            Renderer.addTextBox("Again");
            Renderer.addTextBox("And Again");

            Renderer.nextText();

            window.addEventListener('keydown', (event) => {
                if(event.key === ' '){
                    if(Renderer.nextText())
                        MainEngine.finishScene(self);
                }
            })
        })

        this.finishScene(null);
    },

    finishScene(scene) {
        if(scene === this.curScene){
            if(this.sceneList.length > 0){
                this.curScene = this.sceneList.shift();
                this.curScene(this.curScene);
            }
        }
    }
}

MainEngine.startGame();