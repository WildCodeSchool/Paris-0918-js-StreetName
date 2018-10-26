import React from "react";
import "./DescriptionStory.css";
import { Link } from "react-router-dom";
import DisplayHisto from "./DisplayHisto";
import DisplayMap from "./DisplayMap";
import { Grid, Button, CardMedia, Modal } from '@material-ui/core';
import Search from '../Search';

import { withStyles } from '@material-ui/core/styles';
import Autorenew from '@material-ui/icons/Autorenew';

// material ui
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  media: {
    height: 210,
  },
});

function getModalStyle() {
  return {
    transform: 'translate(14vw, 5%)',
    width: '70%'
  };
}
// fin material ui

class DescriptionStory extends React.Component {
  state = {
    mapState: this.props.match.params.latlng,
    dataOrigine: undefined,
    dataHistorique: undefined,
    dataMonuments: undefined,
    infoDisplay: false,
    dataArron: undefined,
    open: false,
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
      infoDisplay: true,
      dataArron: data.records[0].fields.arron.split(',')[0]
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
    // material ui
    const { classes } = this.props;
    // fin material ui

    return (
    
        
      

      <div className="DescriptionStory">
       <Link to="/">
       <Search />
        </Link>
       
        {this.state.infoDisplay && (
          <div className="result">
            <CardMedia
              className={this.props.classes.media}
              image={require(`../Images/Paris_${this.state.dataArron}.jpg`)}
              title={`Paris ${this.state.dataArron} arrondissement`}
              onClick={this.handleOpen}
            />
            <h2>Origine</h2>
            <p>{this.state.dataOrigine}</p>

            <Grid container>
              <Grid item xs={10} justify="flex-start">
                <DisplayHisto histo={this.state.dataHistorique} monu={this.state.dataMonuments} />
              </Grid>
              <Grid item xs={2} justify="flex-end">
                <DisplayMap latlng={this.state.mapState} />
              </Grid>
            </Grid>
          </div>

        )}

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
            <img style={getModalStyle()} src={require(`../Images/Paris_${this.state.dataArron}.jpg`)} /> 
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(DescriptionStory);
