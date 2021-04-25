import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Modal from './Modal';
import pet from "@frontendmasters/pet"
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
    state = { loading: true, showModal: false }; // Simpler way to instantiate component state

    async componentDidMount () {
        const res = await pet.animal(`${this.props.match.params.id}`);
        this.setState(Object.assign({loading: false, showModal: false }, res.animal));
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal });
    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render() {
        console.log(this.state);

        if (this.state.loading) {
            return <h2>loading ...</h2>
        }

        const { type, breeds, contact, description, name, photos, showModal } = this.state;

        return (
            <div className="details">
                <Carousel media={photos} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${type} - ${breeds.primary} - ${contact.address.city}, ${contact.address.state}`}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button onClick={this.toggleModal} style={{ backgroundColor: theme }}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes</button>
                                        <button onClick={this.toggleModal}>No</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
        // "Notice that despite [of us] rendering a whole different part of the DOM we're still referencing the state in Details.js.
        // This is the magic of Portals. You can use state but render in different parts of the DOM.
        // Imagine a sidebar with contextual navigation. Or a contextual footer. It opens up a lot of cool possibilities."
        // -https://btholt.github.io/complete-intro-to-react-v6/portals-and-refs

    }
}

const DetailsWithRouter = withRouter(Details);

// "Now this is totally self contained. No one rendering Details has to know that it has its own error boundary.
// I'll let you decide if you like this pattern or if you would have preferred doing this in App.js at the Router level. 
// Differing opinions exist."
// -https://btholt.github.io/complete-intro-to-react-v6/error-boundaries

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <DetailsWithRouter {...props} />
        </ErrorBoundary>
    );
}

// The spread operator above "{...props}" is short hand for setting each property from props on the component
// Like <DetailsWithRouter id={props.id} other={props.other} etc={props.etc}> but without spelling everything out.