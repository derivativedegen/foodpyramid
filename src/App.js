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
      nextRebase: 0,
      mobile: false,
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  detectMobile() {
    if (window.innerWidth <= 1000) {
        this.setState({ mobile: true })
    } else {
        this.setState({ mobile: false })
    }
  }

  getRebase() {
    const now = new Date();
    const currentUTCHour = now.getUTCHours();
    const rebaseHours = [4, 8, 12, 16, 20, 24];
    const nextRebaseHour = rebaseHours.filter(e => { return currentUTCHour < e })[0];
    const nextRebase = now;
      nextRebase.setUTCHours(nextRebaseHour);
      nextRebase.setUTCMinutes(0);
      nextRebase.setUTCSeconds(0);
      nextRebase.setUTCMilliseconds(0);
    this.setState({
      nextRebase: nextRebase
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
        this.changePage(this.state.page);
        this.getRebase();
        this.detectMobile();
    }
  }

  componentDidMount() {
    this.getRebase();
    this.detectMobile();
  }


  showPage() {
    switch (this.state.page) {
      case 'about':
        return <InfoSection onClick={this.changePage} mobile={this.state.mobile} />
      case 'stats':
        return <Stats onClick={this.changePage} mobile={this.state.mobile} nextRebase={this.state.nextRebase} />
      case 'team':
        return <Team onClick={this.changePage} mobile={this.state.mobile} />
      default:
        return <HeaderVideo onClick={this.changePage} mobile={this.state.mobile} page={this.state.page} />
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