import React, { Component } from 'react';


class Searchbar extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <div className="App-search">
            <form>
                <input
                    placeholder="Nom de ta rue.."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>

            </div>
        )
    }
}

export default Searchbar;