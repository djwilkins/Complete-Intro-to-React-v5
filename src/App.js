const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { id: "something-important"}, // any attributes go here
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
        React.createElement(Pet, { name: "Scout", animal: "Dog", breed: "Chihuahua"}),
        React.createElement(Pet, { name: "Whiskers", animal: "Cat", breed: "Mixed"})
    );
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);