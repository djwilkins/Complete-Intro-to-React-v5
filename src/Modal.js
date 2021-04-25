import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// So below... we're involving three elements
// 1) The 'modal' element that already exists in index.html
// 2) The elRef.current div that this Modal components useEffect
// adds and removes from being a child of the 'modal' element in index.html
// 3) The <div> containing the "children" we nest inside this Modal component
// And from it, return a portal where said props.children is appended to the elRef.current div
// As a result, we will:
// A) Display in the Modal component whatever is nested inside of it as the actual meaningful modal UI elements.
// B) Be able to add/remove the Modal overall by way of the elRef.current element being added/removed from the
// parent element / dom node (div id of 'modal') by the modals useEffect method.

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
    const elRef =  useRef(null);
    // If elRef.current not yet defined, def as div element
    // Believe it will only do this once
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        // When component is first renderered
        // Add the elRef.current div to the 'modal' div (already in index.html)
        modalRoot.appendChild(elRef.current);

        // This return allows us to remove this child when we're done
        // Through the same useEffect function we're using to add it above.
        // In other words: "We're using the feature of useEffect that if you need to clean up after you're done 
        // (we need to remove the div once the Modal is no longer being rendered) 
        // you can return a function inside of useEffect that cleans up."
        // -https://btholt.github.io/complete-intro-to-react-v6/portals-and-refs
        return () => modalRoot.removeChild(elRef.current);
    }, [])  // We pass an empty array as 2nd parameter since we only want to run this once

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;