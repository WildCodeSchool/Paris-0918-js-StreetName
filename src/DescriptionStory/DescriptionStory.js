import React from "react";
import "./DescriptionStory.css";
import { Link } from "react-router-dom";
import DisplayHisto from "./DisplayHisto";
import DisplayMap from "./DisplayMap";
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

const styles = theme => ({
  media: {
    height: 210,
  },
});

class DescriptionStory extends React.Component {
  state = {
    mapState: this.props.match.params.latlng,
    dataOrigine: undefined,
    dataHistorique: undefined,
    dataMonuments: undefined,
    infoDisplay: false,
    dataArron: undefined
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

    let indexFinOrigine = "";
    let indexFinHistorique = "";
    for (let i = 0; i < arrayHisto.length; i++) {
      if (arrayHisto[i].includes("Historique")) {
        indexFinOrigine = i;
      }
      if (arrayHisto[i].includes("Monument classé")) {
        indexFinHistorique = i + 1;
      }
    }
    const origine = arrayHisto
      .slice(2, indexFinOrigine)
      .join(".")
      .replace("~", "");
    const historique = arrayHisto
      .slice(indexFinOrigine + 1, indexFinHistorique - 1)
      .join(".")
      .replace("~", "");
    const monuments = arrayHisto
      .slice(indexFinHistorique)
      .join(".")
      .replace("~", "");

    this.setState({
      dataOrigine: origine,
      dataHistorique: historique,
      dataMonuments: monuments,
      infoDisplay: true,
      dataArron: data.records[0].fields.arron.split(',')[0]
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
            <CardMedia
              className={this.props.classes.media}
              image={require(`../Images/Paris_${this.state.dataArron}.jpg`)}
              title={`Paris ${this.state.dataArron} arrondissement`}
            />
            <h2>Origine</h2>
            <p>{this.state.dataOrigine}</p>
            <DisplayHisto histo={this.state.dataHistorique} monu={this.state.dataMonuments} />
            <DisplayMap latlng={this.state.mapState} />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(DescriptionStory);
