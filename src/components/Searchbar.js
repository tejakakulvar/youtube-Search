import React from 'react';

class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uservideo : ''
    }
  }
  render(){
    return(
        <form onSubmit = {(event) => this.termfixation(event)} className="searchbar">
          <input
          value = {this.state.uservideo}
          onChange={ (event) => this.setState({uservideo: event.target.value})}
          />
          <button type="submit" className="btn btn-default" >
            <span className="glyphicon glyphicon-search"></span>
          </button>
        </form>
    );
  }

  termfixation = (event) => {
    event.preventDefault();
    this.props.searchvideo(this.state.uservideo);
  }
}

export default Searchbar;
