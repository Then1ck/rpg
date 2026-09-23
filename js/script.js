const MainEngine = {
    sceneList: [],
    curScene: null,

    startGame() {
        let data = localStorage.getItem('curFile');
        if(data === null){
            data = {sceneList: ['test1', 'test2'], curScene: null}

            data.curScene = data.sceneList.shift();

            localStorage.setItem('curFile', JSON.stringify(data));
        }else {
            data = JSON.parse(data);
        }
        this.loadData(data);

        this.startScene();
    },

    loadData(data){
        this.sceneList = data.sceneList;
        this.curScene = data.curScene;
    },

    finishScene(scene) {
        if(scene !== this.curScene)return;
        if(this.sceneList.length > 0){
            this.curScene = this.sceneList.shift();
            this.saveData();
            this.startScene();
        }
    },
    startScene(){
        const scene = Scenes.find(s => s.id === this.curScene);
        
        if(scene){
            scene.run(scene.id)
        }
    },
    saveData() {
        localStorage.setItem('curFile', JSON.stringify({
            sceneList: this.sceneList,
            curScene: this.curScene
        }))
    }
}

MainEngine.startGame();