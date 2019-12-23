import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ImageList from './Components/ImageList'
import { fetchImages, setImage, clearImage } from './actions/imageAction'



class App extends Component {

    componentDidMount() {
        this.props.fetchImages()
    }

    render() {
        const { images, chosenImage } = this.props;
        return (
            <div className="App">
                <div className="left-col">
                    <ImageList images={images} width="40%" height="10%" setImage={this.setImage} />
                </div>
                <div className="right-col">
                    <h1>{images[chosenImage] && images[chosenImage]['author']}</h1>
                    {images[chosenImage] && <img src={images[chosenImage]['download_url']} width={"80%"} height={"50%"} />}
                    {images[chosenImage] && <div><button onClick={this.clearImage}>Clear</button> </div> || ''}
                </div>
            </div>
        );
    }
    setImage = (index) => {
        this.props.setImage(index)
    }

    clearImage = () => {
        this.props.clearImage()
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: () => dispatch(fetchImages()),
        setImage: (index) => dispatch(setImage(index)),
        clearImage: () => dispatch(clearImage())
    }
}

const mapStateToProps = (state) => {
    return {
        pending: state.imageReducer.pending,
        images: state.imageReducer.images,
        error: state.imageReducer.error,
        chosenImage: state.imageReducer.chosenImage
    }

}




export default connect(mapStateToProps, mapDispatchToProps)(App);