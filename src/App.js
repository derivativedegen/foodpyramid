import React, { Component } from 'react';
import NavBar from './navBar';
import HeaderVideo from './headerVideo';
import InfoSection from './infoSection';
import Stats from './stats';
import Team from './team';
import Web3 from 'web3';
import './App.css';
import './Stars.css';
import { contract, wallets } from './chainData';
//const web3 = new Web3("HTTP://127.0.0.1:7545");
//const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");

const WEB3_INFURA_API_KEY = process.env.REACT_APP_INFURA_KEY;
const web3 = new Web3(WEB3_INFURA_API_KEY);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'home',
      nextRebase: 0,
      mobile: false,
      foodCirculating: 100000,
      fusdcPeg: 0,
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

  getAccounts() {
    web3.eth.getAccounts().then(res => {
        this.setState({ accounts: res })
    })
  }

  getFoodCirculating() {
    const foodAbi = contract.food.abi;
    const foodAddress = contract.food.address;
    const foodPyramid = new web3.eth.Contract(foodAbi, foodAddress);

    let supplyTotal = 100000
    let supplyTeam = 8875
    supplyTotal += supplyTeam

    foodPyramid.methods.balanceOf(wallets.treasury).call((err, result) => {
      const supplyTreasury = result * 10 ** -18;
        supplyTotal -= supplyTreasury;
      this.setState({ 
        foodCirculating: supplyTotal 
      })
    })

    foodPyramid.methods.balanceOf(wallets.marketing).call((err, result) => {
      const supplyMarketing = result * 10 ** -18;
        supplyTotal -= supplyMarketing
      this.setState({ 
        foodCirculating: supplyTotal 
      })
    })
  }

  getFusdcPricePeg() {
    const fusdcPegAbi = contract.fUSDC.pegAbi;
    const fusdcPegAddress = contract.fUSDC.pegAddress;
    const fusdcPeg = new web3.eth.Contract(fusdcPegAbi, fusdcPegAddress);

    fusdcPeg.methods.price().call((err, result) => {
      const fusdcPeg = result * 10 ** -18;
      this.setState({ 
        fusdcPeg: fusdcPeg 
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
        this.changePage(this.state.page);
        this.detectMobile();
    }
  }

  componentDidMount() {
    this.getRebase();
    this.detectMobile();
    this.getFoodCirculating();
    this.getFusdcPricePeg();
  //  this.getAccounts();
  }

  showPage() {
    switch (this.state.page) {
      case 'about':
        return <InfoSection 
                  onClick={this.changePage} 
                  mobile={this.state.mobile} />
      case 'stats':
        return <Stats 
                  onClick={this.changePage} 
                  mobile={this.state.mobile} 
                  nextRebase={this.state.nextRebase}
                  foodCirculating={this.state.foodCirculating}
                  fusdcPeg={this.state.fusdcPeg} />
      case 'team':
        return <Team 
                  onClick={this.changePage} 
                  mobile={this.state.mobile} />
      default:
        return <HeaderVideo 
                  onClick={this.changePage} 
                  mobile={this.state.mobile} 
                  page={this.state.page} />
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