import { Component } from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import pet from "@frontendmasters/pet"

class Details extends Component {
    constructor() {
        super();

        // Create componant instance state object
        // Once initialized, we will populate from api with more data
        // Through this.setState - including updating "loading" to false.
        this.state = {
            loading: true
        };
    }
    async componentDidMount () {
        const res = await pet.animal(`${this.props.match.params.id}`);
        this.setState(Object.assign({loading: false }, res.animal));
    }

    render() {
        console.log(this.state);

        if (this.state.loading) {
            return <h2>loading ...</h2>
        }

        const { type, breeds, contact, description, name } = this.state;

        return (
            <div className="details">
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