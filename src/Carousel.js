import { Component } from "react";

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

        return photos;
    }

    render() {
        const { photos, active } = this.state;

        return(
            <di className="carousel">
                <img src={photos[active]} alt="animal" />
                <div>
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
            </di>
        )
    }
}