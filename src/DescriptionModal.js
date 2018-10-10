import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";


const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
    },
  });

class DescriptionModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
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
          <Typography gutterBottom>
          </Typography>
          <Button onClick={this.handleOpen}>Click to see story</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div className={classes.paper}>
              <Typography variant="h6" id="modal-title">
                Street Story
              </Typography>
              <Typography variant="subtitle1" id="simple-modal-description">
              {this.props.streetstory}
              </Typography>   
            </div>
          </Modal>
        </div>
      );
  }
}
DescriptionModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
   
export default withStyles(styles)(DescriptionModal);

{
  /* <div>
               { this.props.streetstory &&  <div><h1> ORIGIN STORY TIME : </h1> <h6> {this.props.streetstory} </h6> </div>}
        {this.props.streetname && <div> Nom de la rue : <h1>{this.props.streetname}</h1> </div> }
            </div> */
}
