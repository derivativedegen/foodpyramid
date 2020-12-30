import React, { Component } from 'react';
import NavBar from './navBar';
import HeaderVideo from './headerVideo';
import InfoSection from './infoSection';
import Stats from './stats';
import Team from './team';
import Web3 from 'web3';
import './App.css';
import './Stars.css';
import { contract, wallets, bigNumberString } from './chainData';
//const web3 = new Web3("HTTP://127.0.0.1:7545");
//const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");

const WEB3_INFURA_API_KEY = process.env.REACT_APP_INFURA_KEY;
const web3 = new Web3(WEB3_INFURA_API_KEY);
const router = new web3.eth.Contract(contract.uniswap.abi, contract.uniswap.address);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'home',
      nextRebase: 0,
      mobile: false,
      foodCirculating: 100000,
      foodUsdcPrice: 0,
      foodEthPrice: 0,
      foodBalanceFoodEthLP: 0,
      ethBalanceFoodEthLP: 0,
      fethBalanceLPinEth: 0,
    //  fethBalanceFethEthLP: 0,
      ethBalanceFethEthLP: 0,
      fusdcBalanceFusdcUsdcLP: 0,
      usdcBalanceFusdcUsdcLP: 0,
      rewardsFeth: 0,
      rewardsFood: 0,
      rewardsFusdc: 0,
      wethPrice: 0,
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

  getFoodCirculatingSupply() {
    const foodAbi = contract.erc20Token.abi;
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

  getPricePegFusdc() {
    const fusdcPegAbi = contract.fToken.pegAbi;
    const fusdcPegAddress = contract.fusdc.pegAddress;
    const fusdcPeg = new web3.eth.Contract(fusdcPegAbi, fusdcPegAddress);

    fusdcPeg.methods.price().call((err, result) => {
      const fusdcPeg = result * 10 ** -18;
      this.setState({ 
        fusdcPeg: fusdcPeg 
      })
    })
  }

  getPricePegFeth() {
    const fethPegAbi = contract.fToken.pegAbi;
    const fethPegAddress = contract.feth.pegAddress;
    const fethPeg = new web3.eth.Contract(fethPegAbi, fethPegAddress);

    fethPeg.methods.price().call((err, result) => {
      const fethPegged = result * 10 ** -18;
      this.setState({ 
        fethPeg: fethPegged 
      })
    })
  }

  getPriceFoodEth() {
    const uniswapAbi = contract.uniswap.abi;
    const uniswapAddress = contract.uniswap.address;
    const foodAddress = contract.food.address;
    const weth = contract.weth.address;
    const uniRouter = new web3.eth.Contract(uniswapAbi, uniswapAddress);

    uniRouter.methods.getAmountsOut(bigNumberString,[foodAddress, weth]).call(((err, result) => { 
      const foodEthPrice = result[1] * 10 ** -18;
      const foodEthRounded = parseFloat(foodEthPrice.toFixed(8));
      this.setState({
        foodEthPrice: foodEthRounded
      })
    }))
  }

  getPriceFethEth() {
    const uniswapAbi = contract.uniswap.abi;
    const uniswapAddress = contract.uniswap.address;
    const fethAddress = contract.feth.address;
    const weth = contract.weth.address;
    const uniRouter = new web3.eth.Contract(uniswapAbi, uniswapAddress);

    uniRouter.methods.getAmountsOut(bigNumberString,[fethAddress, weth]).call(((err, result) => { 
      const fethEthPrice = result[1] * 10 ** -18;
      const fethEthRounded = parseFloat(fethEthPrice.toFixed(8));
      this.setState({
        fethBalanceLPinEth: fethEthRounded
      })
    }))
  }

  getBalanceFethRewards() {
    const foodAbi = contract.erc20Token.abi;
    const foodAddress = contract.food.address;
    const foodPyramid = new web3.eth.Contract(foodAbi, foodAddress);

    foodPyramid.methods.balanceOf(contract.feth.rewards).call((err, result) => {
      let balance = result * 10 ** -18;
      this.setState({
        rewardsFeth: balance,
      })
    })
  }

  getBalanceFusdcRewards() {
    const usdcAbi = contract.erc20Token.abi;
    const usdcAddress = contract.usdc.address;
    const usdc = new web3.eth.Contract(usdcAbi, usdcAddress)

    usdc.methods.balanceOf(contract.fusdc.rewards).call((err, result) => {
      let balance = result * 10 ** -6
      this.setState({
        rewardsFusdc: balance,
      })
    })
  }

  getBalanceFoodRewards() {
    web3.eth.getBalance(contract.food.rewards, (err, result) => {
      let balance = result * 10 ** -18;
      this.setState({
        rewardsFood: balance,
      })
    })
  }

  getBalancesFoodLP() {
    var food = new web3.eth.Contract(contract.erc20Token.abi, contract.food.address);
    var weth = new web3.eth.Contract(contract.erc20Token.abi, contract.weth.address);

    food.methods.balanceOf(contract.food.lpAddress).call((err, result) => { 
      const foodBalance = result*10**-18;
      this.setState({
        foodBalanceFoodEthLP: foodBalance,
      })
    });
    weth.methods.balanceOf(contract.food.lpAddress).call((err, result) => { 
      const wethBalance = result*10**-18;
      this.setState({
        ethBalanceFoodEthLP: wethBalance,
      })
    })
  }

  getBalancesFethLP() {
    var feth = new web3.eth.Contract(contract.fToken.abi, contract.feth.address);
    var weth = new web3.eth.Contract(contract.erc20Token.abi, contract.weth.address);

    /*feth.methods.balanceOf(contract.feth.lpAddress).call((err, result) => { 
      const fethBalance = result*10**-9;
      this.setState({
        fethBalanceFethEthLP: fethBalance,
      })
    });*/
    weth.methods.balanceOf(contract.feth.lpAddress).call((err, result) => { 
      const wethBalance = result*10**-18;
      this.setState({
        ethBalanceFethEthLP: wethBalance,
      })
    })
  }

  getBalancesFusdcLP() {
    var fusdc = new web3.eth.Contract(contract.fToken.abi, contract.fusdc.address);
    var usdc = new web3.eth.Contract(contract.erc20Token.abi, contract.usdc.address);

    fusdc.methods.balanceOf(contract.fusdc.lpAddress).call((err, result) => { 
      const fusdcBalance = result*10**-9;
      this.setState({
        fusdcBalanceFusdcUsdcLP: fusdcBalance,
      })
    });
    usdc.methods.balanceOf(contract.fusdc.lpAddress).call((err, result) => { 
      const usdcBalance = result*10**-6;
      this.setState({
        usdcBalanceFusdcUsdcLP: usdcBalance,
      })
    })
  }

  getUsdcPriceFood() {
    const food = contract.food.address;
    const weth = contract.weth.address;
    const usdc = contract.usdc.address;

    router.methods.getAmountsOut(bigNumberString, [food, weth, usdc]).call((err, result) => {
      const foodPriceUSD = result[2] * 10 ** -6;
      this.setState({
        foodUsdcPrice: foodPriceUSD,
      })
    })
  }

  getUsdcPriceEth() {
    const weth = contract.weth.address;
    const usdc = contract.usdc.address;

    router.methods.getAmountsOut(bigNumberString, [weth, usdc]).call((err, result) => {
      const wethPriceUSD = result[1] * 10 ** -6;
      this.setState({
        wethPrice: wethPriceUSD,
      })
    })
  }

  componentDidMount() {
    this.detectMobile();
    this.getRebase();
    this.getFoodCirculatingSupply();
    this.getPriceFoodEth();
    this.getPriceFethEth();
    this.getUsdcPriceFood();
    this.getUsdcPriceEth();
    this.getBalanceFethRewards();
    this.getBalanceFusdcRewards();
    this.getBalanceFoodRewards();
    this.getBalancesFoodLP();
    this.getBalancesFethLP();
    this.getBalancesFusdcLP();
  //  this.getPricePegFusdc();
  //  this.getPricePegFeth();
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
                  foodRewards={this.state.rewardsFood}
                  foodEthPrice={this.state.foodEthPrice}
                  foodUsdcPrice={this.state.foodUsdcPrice} 
                  foodBalanceFoodEthLP={this.state.foodBalanceFoodEthLP}
                  ethBalanceFoodEthLP={this.state.ethBalanceFoodEthLP}
                  rewardsFeth={this.state.rewardsFeth}
                  rewardsFusdc={this.state.rewardsFusdc}
                  ethBalanceFethEthLP={this.state.ethBalanceFethEthLP}
                  fethBalanceLPinEth={this.state.fethBalanceLPinEth}
                  fusdcBalanceFusdcUsdcLP={this.state.fusdcBalanceFusdcUsdcLP}
                  usdcBalanceFusdcUsdcLP={this.state.usdcBalanceFusdcUsdcLP} />
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