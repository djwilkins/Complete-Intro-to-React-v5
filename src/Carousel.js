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
    // An arrow function below is preferable
    // Because unlike a standard function, it will not create a new "this" context
    // from the context in which it was defined (where "this" = the component itself)
    // Alterantively, we could use a standard function below but also bind the component to "this"
    // for this function in a constructor for the component above like:
    // constructor(props) {
    //   super(props);
    //   this.handleIndexClick = this.handleIndexClick.bind(this);
    // } 
    // Else, the click event will provide a different context that it sounds like React treats as undefined.
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
        })
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