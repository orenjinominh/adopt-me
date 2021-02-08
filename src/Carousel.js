/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  // takes in set of properties, filters them, passes them onto component
  static getDerivedStateFromProps({media}) {
    // placeholder photo if animal doesn't have one
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({large}) => large); // will be array of strings of urls
    }
    // return object of what needs to be merged back into state (photos will be in state)
    return {photos};
  }

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index
    })
  }

  render() {
    const {photos, active} = this.state;


    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"/>
        <div className="carousel-smaller">
          {photos.map((photo, index)=> (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img 
              key={photo}
              onClick={this.handleIndexClick}
              date-index={index}
              source={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>

    )
  }
}

export default Carousel; 