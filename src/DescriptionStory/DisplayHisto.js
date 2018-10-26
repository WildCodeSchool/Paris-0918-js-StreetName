import React, { Component } from "react";
import './Displayhisto.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// material UI
const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
   
  });
// FIN material UI



class DisplayHisto extends Component {
    state = {
        renderHisto: false,
        readButtonState: true
    }

    switchHisto = () => {
        this.setState({
            renderHisto: !this.state.renderHisto,
            readButtonState: !this.state.readButtonState
        })
    }


  render() {

    let readText = "";
    this.state.readButtonState ? readText = "En savoir plus" : readText = "Réduire";

    // material UI
    const { classes } = this.props;
    // FIN MATERIAL UI

    return (
      <div className='styleresult'>
       <Button variant="outlined" color="primary" className={classes.button}  onClick={this.switchHisto}>{readText}
        
      </Button>
        
        {this.state.renderHisto &&
        <div>
            <hr/>
            <h2>Histoire et Monuments</h2>
            <p>{this.props.histo}</p>
        </div>}
      </div>
    );
  }
}

export default withStyles(styles) (DisplayHisto);
