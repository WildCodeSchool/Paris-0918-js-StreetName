import React from "react";
import "./DescriptionStory.css";

class DescriptionStory extends React.Component {
  render() {
    if (this.props.error)
      return (
        <div>
          {" "}
          <br />
          Pas de correspondance trouvé.
        </div>
      );
      
    else
      return (
        <div>
          {this.props.streetstory && (
            <div className="result">
              <h1 className="story"> HISTOIRE </h1> 
              <h6> {this.props.streetstory} </h6>
              Nom de la rue: <h2>{this.props.streetname}</h2>
            </div>
          )}
        </div>
      );
  }
}

export default DescriptionStory;
