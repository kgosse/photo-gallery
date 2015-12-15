import alt from '../alt';

class Actions{
    constructor(){
        this.generateActions(
            'addImage',
            'removeImage'
        );
    }
}

export default alt.createActions(Actions);