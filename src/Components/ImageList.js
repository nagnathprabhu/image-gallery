import React, { Component } from 'react';


class ImageList extends Component {

    render() {
        const { images, width, height } = this.props
        return <>
            {images.map((ele, index) => <div height={height} key={ele['id']}><img onClick={(e) => { this.setImage(e, index) }} src={ele.download_url} width={width} height={height} /> </div>)}
        </>
    }
    setImage = (e, index) => {
        this.props.setImage(index)
    }

}

export default ImageList;