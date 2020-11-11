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
    this.state = { 
      page: 'home',
      utcTime: []
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
        this.changePage(this.state.page);
    }
  }

  componentDidMount() {
    const endpoint = 'http://worldtimeapi.org/api/timezone/Etc/UTC';

    fetch(endpoint)
        .then((response) => response.json())
        .then(utcInfo => {
            const unixtime = utcInfo.unixtime;
            this.setState({ utcTime: unixtime * 1000 })
        });
}

  showPage() {
    switch (this.state.page) {
      case 'home':
        return <HeaderVideo onClick={this.changePage} page={this.state.page} />
      case 'about':
        return <InfoSection />
      case 'stats':
        return <Stats utcTime={this.state.utcTime} />
      case 'team':
        return <Team />
      default:
        return <HeaderVideo />
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar onClick={this.changePage} page={this.state.page} />
        
        {this.showPage()}
        
      </div>
    )
  }
}

export default App;