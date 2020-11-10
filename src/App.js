import React, { Component } from 'react';
import NavBar from './navBar';
import HeaderVideo from './headerVideo';
import InfoSection from './infoSection';
import Stats from './stats';
import Team from './team';
import './App.css';
import './Stars.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'stats' };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    return (
      <div className="App">
        <NavBar onClick={this.changePage} page={this.state.page} />
        
        {this.state.page === 'home' ? <HeaderVideo /> : null}
        {this.state.page === 'about' ? <InfoSection /> : null}
        {this.state.page === 'stats' ? <Stats /> : null}
      </div>
    )
  }
}

export default App;
