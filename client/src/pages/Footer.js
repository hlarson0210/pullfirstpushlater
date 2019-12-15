import React from "react";

function Footer() {
    return (
        <footer className="page-footer white">
            <div className="container">
                <div className="row footerMargin">
                    <ul className="col s12 center footerMargin">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className="footerIcons" src="https://simpleicons.org/icons/github.svg" alt="github"></img></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className="footerIcons" src="https://simpleicons.org/icons/gmail.svg" alt="email"></img></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className="footerIcons" src="https://simpleicons.org/icons/linkedin.svg" alt="linkedin"></img></a>
                    </ul>
                </div>
                <div className="row center black-text copyright"> © 2019 Copyright Project 3</div>
            </div>
        </footer >
    );
}

export default Footer;