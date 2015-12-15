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

    @bind(Actions.removeImage)
    removeImage(image){
        let images = this.state.images.filter((img)=> img.key != image.key);
        this.setState({images});
    }
}

export default alt.createStore(ImageStore);