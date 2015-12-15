import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';

@decorate(alt)
class ImageStore{
    constructor(){
        this.state = {
            images: []
        };
    }

    @bind(Actions.addImage)
    addImage(img){
        this.setState({
            images: this.state.images.concat(img)
        });
    }
}

export default alt.createStore(ImageStore);