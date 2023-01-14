import { Link } from "react-router-dom";
import { Warning } from "phosphor-react";

import styles from "./NotFound.module.css";

export const NotFound = () => {
    return (
        <div className={styles["not-found-page"]}>
            <div className={styles["not-found-message"]}>
                <div className={styles["not-found-message-main"]}>
                    <Warning size={40} />
                    <div className={styles["not-found-message-title"]}>
                        <h2>Whoops.</h2>
                        <p>Page Not Found...</p>
                    </div>
                </div>

                <p>We can't find the page you are looking for.</p>
            </div>

            <button>
                Return to <Link to="/">home</Link>
            </button>
        </div>
    );
};
