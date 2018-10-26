import React, { Component } from "react";

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
    this.state.readButtonState ? readText = "Read More" : readText = "Read Less";

    return (
      <div>
        <button onClick={this.switchHisto}>{readText}</button>
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

export default DisplayHisto;
