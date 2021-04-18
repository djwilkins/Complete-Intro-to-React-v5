import { Component } from "react";
import React from "react";

class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    };
    static getDerivedStateFromProps({ media }) {
        let photos = ["http://placecorgi.com/600/600"];

        if (media.length) {
            // Pull large photo off each photo object
            photos = media.map(({ large }) => large);
        }

        return { photos };
    }
    // An arrow function below is preferable
    // Because unlike a standard function, it will not create a new "this" context
    // Resulting Rule of thumb: When passing functions to children or using event listeners,
    // Use an arrow function
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        });
    };

    render() {
        const { photos, active } = this.state;

        return(
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        // eslint-disable-next-line (don't use this in production)
                        <img
                          key={photo}
                          onClick={this.handleIndexClick}
                          data-index={index}
                          src={photo}
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