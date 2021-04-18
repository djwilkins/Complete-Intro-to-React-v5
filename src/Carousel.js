import { Component } from "react";

class Carousel extends Component {
    state = {
        photos: [],
        active: 0
    };
    render() {
        const { photos, active } = this.state;

        return(
            <di className="carousel">
                <img src={photos[active]} alt="animal" />
                <div>
                    {this.props.media.map((photo, index) => (
                        // eslint-disable-next-line (don't use this in production)
                        <img
                          key={photo.large}
                          onClick={this.handleIndexClick}
                          data-index={index}
                          src={photo.large}
                          className={index === active ? "active" : ""}
                          alt="animal thumbnail"
                        />
                    ))}
                </div>
            </di>
        )
    }
}