import alt from '../alt';

class Actions{
    constructor(){
        this.generateActions(
            'addImage',
            'removeImage',
            'nameFilter'
        );
    }
}

export default alt.createActions(Actions);