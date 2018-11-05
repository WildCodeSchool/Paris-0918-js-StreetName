import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component {
    render() {
        return (
            <div className="noCorrespondence">
                <Link to="/">
                <br />
                    Revenir à l'accueil
                    <br />
                </Link>
                <div>
                    {" "}
                    <br />
                    Pas de correspondance trouvé.
                </div>
            </div>
        )
    }
}

export default Error;