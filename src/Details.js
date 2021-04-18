import { Component } from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import pet from "@frontendmasters/pet"
import Carousel from "./Carousel";

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

export default withRouter(Details);