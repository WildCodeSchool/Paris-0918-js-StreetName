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
        histoState: this.props.histo.length,
        readButtonState: true,
        open: false
    }

    switchHisto = () => {
        this.setState({
            renderHisto: !this.state.renderHisto,
            readButtonState: !this.state.readButtonState
        })
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

  render() {

    let readText = "";
    this.state.readButtonState ? readText = "En savoir plus" : readText = "Réduire";
    
    // material UI
    const { classes } = this.props;
    console.log(this.state.histoState);
    // FIN MATERIAL UI

    return (
      
      <div className='styleresult'>
      
       
       {this.state.histoState !== 0 ?
       <Button variant="outlined" color="primary" className={classes.button}  onClick={this.switchHisto}>{readText}
      
      </Button>: <Button variant="outlined" color="primary" className={classes.button}>Pas d'histoire disponible</Button>
    }
        
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
