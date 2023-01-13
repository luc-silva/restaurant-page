import { GithubLogo, LinkedinLogo, Code } from "phosphor-react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles["website-footer"]}>
            <div className={styles["footer-credits"]}>
                Made with HTML, CSS, Javascript and React. Icons from
                <a href="https://www.npmjs.com/package/phosphor-react" target={"_blank"}>
                    {" Phosphor-React."}
                </a>
            </div>
            <div className={styles["footer-links"]}>
                <a href="https://github.com/luc-silva/restaurant-page" target={"_blank"}>
                    View Source
                    <Code size={24}/>
                </a>
                <div className={styles["social-pages"]}>
                    <a href="https://github.com/luc-silva" target={"_blank"}>
                        <GithubLogo weight="fill" size={30} />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/silva-luc/" target={"_blank"}>
                        <LinkedinLogo weight="fill" size={30} />
                        LinkedIn
                    </a>
                </div>
                <div></div>
            </div>
        </footer>
    );
};
