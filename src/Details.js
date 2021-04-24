import { Component } from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import pet from "@frontendmasters/pet"
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
    state = { loading: true }; // Simpler way to instantiate component state

    async componentDidMount () {
        const res = await pet.animal(`${this.props.match.params.id}`);
        this.setState(Object.assign({loading: false }, res.animal));
    }

    render() {
        console.log(this.state);

        if (this.state.loading) {
            return <h2>loading ...</h2>
        }

        const { type, breeds, contact, description, name, photos } = this.state;

        return (
            <div className="details">
                <Carousel media={photos} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${type} - ${breeds.primary} - ${contact.address.city}, ${contact.address.state}`}</h2>
                    <button>Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div>
        )

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