import alt from '../alt';

class Actions{
    constructor(){
        this.generateActions(
            'addImage'
        );
    }
}

export default alt.createActions(Actions);