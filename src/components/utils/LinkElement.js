import React from "react";

/**
 * Navigates to the given url
 * @param url The url to be redirected to.
 */
const navigateTo = (url) => {
    document.location.href = url;
};

/**
 * Container for LinkElement
 * @param link The url to the desired page
 * @param className A custom css class name
 * @param children The children of the component
 * @returns {JSX.Element}
 */
const LinkElement = ({link, className, children}) => {
    return (
        <div className={className} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

export { navigateTo };
export default LinkElement;