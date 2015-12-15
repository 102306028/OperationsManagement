import React from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';
import MarketingResultPopup from './MarketingResultPopup.js';
const styles = {
  wrap: {
    margin: '0 auto',
    width: '1280px',
    height: '600px',
    overflow: 'hidden',
    backgroundColor: '#FFDDAA'
  }
};

const Marketing = React.createClass({
  getInitialState(){
    var state = {
    sold:'',
    left:'',
    showLoginPopup: false,
    };
    return state;
  },
  componentDidMount(){
    AuthStore.addChangeListener(this.dataUpdate)
  },

  componentWillUnmount(){
    AuthStore.removeChangeListener(this.dataUpdate)
  },
  dataUpdate(){
    this.setState({
      sold:'',
      left:'',
      result:''
    });
  },

  _onSoldChange(e){
    this.setState({
      sold: e.target.value
    });
  },
  _onLeftChange(e){
    this.setState({
      left: e.target.value
    });
  },
  _onDiscountSubmit(){
      AuthActions.discount(this.state.sold,this.state.left);
    this.togglePopup();
  },
  togglePopup() {
    if(!this.state.showLoginPopup){
      this.setState({
        showLoginPopup: !this.state.showLoginPopup,
      });
    }
    },
    toggleClose(){
      if(this.state.showLoginPopup){
        this.setState({
          showLoginPopup: !this.state.showLoginPopup,
        });
      }
    },



  render() {
    return (

      <div style={styles.wrap}>
        <div id='title'>
        <p>
          今日已販售<input onChange={this._onSoldChange} value={this.state.sold}></input>個甜甜圈
        </p>
        <p>
          剩餘數量<input onChange={this._onLeftChange} value={this.state.left}></input>個甜甜圈
        </p>
        <p>
          <button type="button" onClick={this._onDiscountSubmit}>查看建議行銷策略</button>
          <MarketingResultPopup toggleClose={this.toggleClose} show={this.state.showLoginPopup} />
        </p>
        </div>
      </div>


    )
  }
});

module.exports = Marketing;
