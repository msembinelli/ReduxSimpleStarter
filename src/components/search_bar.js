import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input
              className="form-control SearchBar"
              placeholder="Search for..."
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
              onKeyPress={event => this.onKeyPress(event)} />
              <span className="input-group-btn">
                <button className="btn btn-defaul SearchButton" onClick={event => this.onSearchClick(event)}>
                  <span className="glyphicon glyphicon-search SearchIcon" ></span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }

  onKeyPress(event) {
    if(event.key == "Enter") {
      this.props.onSearchTermChange(this.state.term);
    }
  }

  onSearchClick() {
    this.props.onSearchTermChange(this.state.term);
  }
}

export default SearchBar;
