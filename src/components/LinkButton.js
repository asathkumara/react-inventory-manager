import React from "react";

const LinkButton = ({link, className, children}) => {
    let navigateTo = (url) => {
        document.location.href += url;
    };

    return (
        <button className={className} onClick={() => navigateTo(link)}>
            {children}
        </button>
    );
};

export default LinkButton;