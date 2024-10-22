import './index.css'
import CashWithdrawal from '../CashWithdrawal';
import { Component } from 'react'

class DenominationItem extends Component{
  state={
   balance : 2000,
  };

  withdrawFifty = () => {
    const { balance } = this.state;
    const fifty = balance - 50;
    this.setState({balance:fifty}) 
  }

  withdrawHundered = () => {
    const { balance } = this.state;
    const Hundered = balance - 100;
    this.setState({balance:Hundered}) 
  }

  withdrawTwoHundered = () => {
    const { balance } = this.state;
    const TwoHundered = balance - 200;
    this.setState({balance:TwoHundered}) 
  }

  withdrawFiveHundered = () => {
    const { balance } = this.state;
    const FiveHundered = balance - 500;
    this.setState({balance:FiveHundered}) 
  }

  render() {
    const { balance } = this.state;

    return (
      <div className='container'>
          <CashWithdrawal/>
          <div className='Your-balance'>
             <p className='paragraph-1'>Your Balance</p>
             <h1 className='balance'>{balance}</h1>
          </div>
          <p className='inRupees'>In Rupees</p>
              <h1 className='withdraw'>Withdraw</h1>
              <p className='chooseRupees'>CHOOSE SUM IN (RUPEES)</p>
              <div className='list-buttons'>
                <button className='button' onClick={this.withdrawFifty}>50</button>
                <button className='button' onClick={this.withdrawHundered}>100</button>
                <button className='button' onClick={this.withdrawTwoHundered}>200</button>
                <button className='button' onClick={this.withdrawFiveHundered}>500</button>
              </div>
      </div>
    );
  }
}

export default DenominationItem;
