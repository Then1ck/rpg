const MainEngine = {
    sceneList: [],
    curScene: null,

    startGame() {
        let data = localStorage.getItem('curFile');
        if(data === null){
            data = {sceneList: ['test1', 'test2', 'battle1', 'test1'], curScene: null}

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
    getCurrentPage(){
        return location.pathname.split('/').pop().replace('.html', '');
    },
    startScene(){
        const scene = Scenes.find(s => s.id === this.curScene);
        if(!scene)return;
        if(this.getCurrentPage() !== scene.page){
            this.changePage(scene.page);
            return;
        }
        scene.run(scene.id)
    },
    saveData() {
        localStorage.setItem('curFile', JSON.stringify({
            sceneList: this.sceneList,
            curScene: this.curScene
        }))
    },
    changePage(page) {
        const pg = '../gameplay/' + page + '.html';
        window.location.href = pg;
    }
}

MainEngine.startGame();