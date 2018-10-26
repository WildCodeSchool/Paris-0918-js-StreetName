import React from "react";
import "./DescriptionStory.css";
import { Link } from "react-router-dom";
import DisplayHisto from "./DisplayHisto";
import DisplayMap from "./DisplayMap";

class DescriptionStory extends React.Component {
  state = {
    mapState: this.props.match.params.latlng,
    dataOrigine: undefined,
    dataHistorique: undefined,
    dataMonuments: undefined,
    infoDisplay: false
  };

  async componentWillMount() {
    const result = await fetch(
      `https://opendata.paris.fr/api/records/1.0/search/?dataset=voiesactuellesparis2012&q=${
        this.props.match.params.typo
      }`
    );
    const data = await result.json();
    console.log(data);
    const information = data.records[0].fields.histo;
    const arrayHisto = information.split(".");
    console.log(arrayHisto);

    const origine = arrayHisto
      .slice(2, 3)
      .join(".")
      .replace("~", "");
    const historique = arrayHisto
      .slice(3, arrayHisto.length)
      .join(".")
      .replace("~", "");


    this.setState({
      dataOrigine: origine,
      dataHistorique: historique,
      infoDisplay: true
    });
  }

  render() {
    if (!this.state.infoDisplay)
      return (
        <div className="noCorrespondence">
          <Link to="/">
            <button type="button">Nouvelle recherche</button>
          </Link>
          <div>
            {" "}
            <br />
            Pas de correspondance trouvé.
          </div>
        </div>
      );

    return (
      <div className="DescriptionStory">
        <Link to="/">
          <button type="button">Nouvelle recherche</button>
        </Link>
        {this.state.infoDisplay && (
          <div className="result">
            <h2>Origine</h2>
            <p>{this.state.dataOrigine}</p>
            <DisplayHisto
              histo={this.state.dataHistorique}
              monu={this.state.dataMonuments}
            />
            <DisplayMap latlng={this.state.mapState} />
          </div>
        )}
      </div>
    );
  }
}

export default DescriptionStory;
