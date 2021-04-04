const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Scout"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Chihuahua"),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        { id: "something-important"}, // any attributes go here
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    );
}
ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);