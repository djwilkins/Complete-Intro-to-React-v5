import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const props = useParams();
    // Cool trick for displaying props values visually on page (just for development/debugging)
    return (
        <pre>
            <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
    )
}

export default Details;