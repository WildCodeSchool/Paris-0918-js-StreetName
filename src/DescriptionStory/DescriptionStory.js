import React from "react";
import "./DescriptionStory.css";
import { Link } from 'react-router-dom';

class DescriptionStory extends React.Component {

  state = {
    dataInfos: undefined,
    infoDisplay: false,
  }

  componentWillMount() {
    fetch(`https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q=${this.props.match.params.typo}`)
      .then(data => data.json())
      .then(data => this.setState({
        dataInfos: data.records[0].fields,
        infoDisplay: true
      }))


    // this.monumentsClasses()
  }

  render() {
    if (!this.state.infoDisplay)
      return (
        <div className="noCorrespondence">
          <Link to='/' >
            <button
              type="button"
              onClick={this.clearState}
            >
              Nouvelle recherche
        </button>
          </Link>
          <div>
            {" "}
            <br />
            Pas de correspondance trouvé.
    </div>
        </div>
      )

    return (
      <div className="DescriptionStory">
        <Link to='/' >
          <button
            type="button"
            onClick={this.clearState}
          >
            Nouvelle recherche
          </button>
        </Link>
        {this.state.infoDisplay &&
          <div className="result">
            <h1 className="story"> HISTOIRE </h1>
            <h6> {this.state.dataInfos.histo} </h6>
            Nom de la rue: <h2>{this.state.dataInfos.typo}</h2>
          </div>
        }
      </div>
    );
  }
}

export default DescriptionStory;
