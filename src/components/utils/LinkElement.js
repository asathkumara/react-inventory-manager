import React from "react";

const navigateTo = (url) => {
    document.location.href = url;
};

const LinkElement = ({link, className, children}) => {
    return (
        <div className={className} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

export { navigateTo };
export default LinkElement;