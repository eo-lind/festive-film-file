import React from "react"
import "./footer.css"

export const Footer = () => {
    const starterYear = 2022
    const currentYear = new Date().getFullYear()
    const dateRangeString = `${starterYear} - ${currentYear}`

    return (
        <section className="footer__outerContainer">
            <div className="footer__innerContainer">
                <div className="footer__leftColumn">
                    &copy;{" "}
                    {starterYear === currentYear
                        ? starterYear
                        : dateRangeString}{" "}
                    Olivia Lind. All Rights Reserved.
                </div>
                <div className="footer__rightColumn">
                    <a
                        href="https://www.instagram.com/marshmallowambrosia"
                        target="_blank"
                        className="footer__linkIcon"
                    >
                        <img
                            src="/images/assets/icon-instagram-white-iconmonstr.png"
                            alt="Instagram logo"
                            className="footer__socialIcon"
                        />
                    </a>
                    <a
                        href="https://github.com/eo-lind"
                        target="_blank"
                        className="footer__linkIcon"
                    >
                        <img
                            src="/images/assets/icon-github-white-iconmonstr.png"
                            alt="GitHub logo"
                            className="footer__socialIcon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olivialind"
                        target="_blank"
                        className="footer__linkIcon"
                    >
                        <img
                            src="/images/assets/icon-linkedin-white-iconmonstr.png"
                            alt="LinkedIn logo"
                            className="footer__socialIcon"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}
