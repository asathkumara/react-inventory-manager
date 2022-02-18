import React from "react";

const LinkElement = ({link, className, children}) => {
    let navigateTo = (url) => {
        document.location.href = url;
    };

    return (
        <div className={className} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

export default LinkElement;