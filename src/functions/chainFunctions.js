import { contract, wallets, bigNumberString } from '../chainData';
import Web3 from 'web3';

const WEB3_INFURA_API_KEY = process.env.REACT_APP_INFURA_KEY;
const web3 = new Web3(WEB3_INFURA_API_KEY);
const router = new web3.eth.Contract(contract.uniswap.abi, contract.uniswap.address);

function getRebase() {
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

function getAccounts() {
    web3.eth.getAccounts().then(res => {
        this.setState({ accounts: res })
    })
}

function getFoodCirculating() {
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

function getFusdcPricePeg() {
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

function getFethPricePeg() {
    const fethPegAbi = contract.fETH.pegAbi;
    const fethPegAddress = contract.fETH.pegAddress;
    const fethPeg = new web3.eth.Contract(fethPegAbi, fethPegAddress);

    fethPeg.methods.price().call((err, result) => {
      const fethPeg = result * 10 ** -18;
      this.setState({ 
        fethPeg: fethPeg 
      })
    })
}

function getFoodEthPrice() {
    const uniswapAbi = contract.uniswap.abi;
    const uniswapAddress = contract.uniswap.address;
    const foodAddress = contract.food.address;
    const weth = contract.wETH.address;
    const uniRouter = new web3.eth.Contract(uniswapAbi, uniswapAddress);
    const bigNumber = '1000000000000000000';

    uniRouter.methods.getAmountsOut(bigNumber,[foodAddress, weth]).call(((err, result) => { 
      const foodEthPrice = result[1] * 10 ** -18;
      const foodEthRounded = foodEthPrice.toFixed(8);
      this.setState({
        foodEthPrice: foodEthRounded
      })
    }))
}

function getBalanceEthRewards() {
    web3.eth.getBalance(wallets.rewards, (err, result) => {
      let balance = result * 10 ** -18;
      this.setState({
        rewardsEth: balance,
      })
    })
}

function getBalanceFethLP() {
    var feth = new web3.eth.Contract(contract.fToken.abi, contract.fETH.address);
    var weth = new web3.eth.Contract(contract.food.abi, contract.wETH.address);

    feth.methods.balanceOf(contract.fETH.lpAddress).call((err, result) => { 
      const fethBalance = result*10**-9;
      this.setState({
        fethBalanceLP: fethBalance,
      })
    });
    weth.methods.balanceOf(contract.fETH.lpAddress).call((err, result) => { 
      const wethBalance = result*10**-18;
      this.setState({
        wethBalanceLP: wethBalance,
      })
    })
}

function getFoodUSDC() {
    const food = contract.food.address;
    const weth = contract.wETH.address;
    const usdc = contract.usdc.address;

    router.methods.getAmountsOut(bigNumberString, [food, weth, usdc]).call((err, result) => {
      const foodPriceUSD = result[2] * 10 ** -6;
      this.setState({
        foodUsdc: foodPriceUSD,
      })
    })
}

function getEthUSDC() {
    const weth = contract.wETH.address;
    const usdc = contract.usdc.address;

    router.methods.getAmountsOut(bigNumberString, [weth, usdc]).call((err, result) => {
      const wethPriceUSD = result[1] * 10 ** -6;
      this.setState({
        wethPrice: wethPriceUSD,
      })
    })
}

function getFethUSDC() {
    const feth = contract.fETH.address;
    const weth = contract.wETH.address;
    const usdc = contract.usdc.address;

    router.methods.getAmountsOut(bigNumberString, [feth, weth, usdc]).call((err, result) => {
      const fethPriceUSD = result[1]*10**-18;
      console.log(fethPriceUSD)
    })
}