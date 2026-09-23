const Scenes = [
    {
        id: 'test1',
        run: (self) => {
            Renderer.addTextBox("Test Text");
            Renderer.addTextBox("Again");
            Renderer.addTextBox("And Again");

            Renderer.nextText();

            const handler = (event) => {
                if(event.key === ' '){
                    if(Renderer.nextText()){
                        window.removeEventListener('keydown', handler);
                        MainEngine.finishScene(self);
                    }
                }
            }
            window.addEventListener('keydown', handler);
        }
    },
    {
        id: 'test2',
        run: (self) => {
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
        }
    }
]