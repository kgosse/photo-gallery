import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';

@decorate(alt)
class ImageStore{
    constructor(){
        this.state = {
            images: [],
            nameFilter: null
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


    @bind(Actions.nameFilter)
    nameFilter(nameFilter){
        this.setState({nameFilter});
    }
}

export default alt.createStore(ImageStore);