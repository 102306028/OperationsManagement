import React from 'react';
import AuthActions from '../actions/AuthActions';
import AuthStore from '../stores/AuthStore';

const styles = {
  wrap: {
    margin: '0 auto',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
    backgroundColor: 'rgb(254,226,168)',
  },
  divA:{
    display: 'flex',
    marginTop: '5px',
    backgroundColor: 'rgb(107,97,78)',
    height: '80px',
    opacity: 0.8
  },
  divB:{
    display: 'flex',
    marginTop: '5px',
    backgroundColor: 'rgb(185,174,136)',
    height: '80px',
    opacity: 0.8
  },
  nameA:{
    flex: 1,
    color: 'rgb(249,255,221)',
    textAlign: 'center',
    fontSize:'1.7em'
  },
    nameB:{
    flex: 1,
    color: 'rgb(249,255,221)',
    textAlign: 'center',
    fontSize:'1.7em'
  },
  input:{
    flex:0.6,
    height:'55px',
    textAlign:'center',
    backgroundColor: '#DCDCDC',
    fontSize:'1.5em',
    marginTop: '10px',
    marginRight: '20px',
    outline: 'none'
  },
  button:{
    flex: 0.3,
    color: 'rgb(106,105,106)',
    backgroundColor: 'rgb(215,217,210)',
    fontSize: '1.5em',
    outline: 'none',
    height: '50px',
    marginTop: '15px',
    borderRadius:'10px'
  },
  blankDiv:{
    flex:0.8
  }
};

const Inventory = React.createClass({

  getInitialState(){
    var materials = {
      noodle: '',
      mother: '',
      egg: '',
      sugar: '',
      milk: '',
      inventoryNoodle: '',
      inventoryMother: '',
      inventoryEgg: '',
      inventorySugar: '',
      inventoryMilk: '',
      noodleState: '',
      motherState: '',
      eggState: '',
      sugarState: '',
      milkState: '',
      noodleDate: true,
      motherDate: true,
      eggDate: true,
      sugarDate: true,
      milkDate: true
    };
    return materials;
  },

  componentDidMount(){
    AuthStore.addChangeListener(this.materialUpdate)
  },

  componentWillUnmount(){
    AuthStore.removeChangeListener(this.materialUpdate)
  },

  materialUpdate(){
    this.setState({
      noodle: this.state.noodle,
      mother: this.state.mother,
      egg: this.state.egg,
      sugar: this.state.sugar,
      milk: this.state.milk
    });
  },

  _onNoodleChange(e){
    this.setState({
      noodle: e.target.value
    });
  },

  _onMotherChange(e){
    this.setState({
      mother: e.target.value
    });
  },

  _onEggChange(e){
    this.setState({
      egg: e.target.value
    });
  },

  _onSugarChange(e){
    this.setState({
      sugar: e.target.value
    });
  },

  _onMilkChange(e){
    this.setState({
      milk: e.target.value
    });
  },

  _onNoodleSubmit(){
    AuthActions.matchNoodle(this.state.noodle);

    this.setState({
      noodle: this.state.noodle,
      inventoryNoodle: AuthStore.getNoodle(),
      noodleState: AuthStore.matchNoodle(this.state.noodle)
    });
  },

  _onMotherSubmit(){
    AuthActions.matchMother(this.state.mother);

    this.setState({
      mother: this.state.mother,
      inventoryMother: AuthStore.getMother(),
      motherState: AuthStore.matchMother(this.state.mother)
    });
  },

  _onEggSubmit(){
    AuthActions.matchEgg(this.state.egg);

    this.setState({
      egg: this.state.egg,
      inventoryEgg: AuthStore.getEgg(),
      eggState: AuthStore.matchEgg(this.state.egg)
    });
  },

  _onSugarSubmit(){
    AuthActions.matchSugar(this.state.sugar);

    this.setState({
      sugar: this.state.sugar,
      inventorySugar: AuthStore.getSugar(),
      sugarState: AuthStore.matchSugar(this.state.sugar)
    });
  },

  _onMilkSubmit(){
    AuthActions.matchMilk(this.state.milk);

    this.setState({
      milk: this.state.milk,
      inventoryMilk: AuthStore.getMilk(),
      milkState: AuthStore.matchMilk(this.state.milk)
    });
  },

  _onNoodleOrder(){
    this.setState({
      noodleDate: !this.state.noodleDate
    });
  },

  _onMotherOrder(){
    this.setState({
      motherDate: !this.state.motherDate
    });
  },

  _onEggOrder(){
    this.setState({
      eggDate: !this.state.eggDate
    });
  },

  _onSugarOrder(){
    this.setState({
      sugarDate: !this.state.sugarDate
    });
  },

  _onMilkOrder(){
    this.setState({
      milkDate: !this.state.milkDate
    });
  },

  render() {

    var noodleOrder

    if(this.state.noodleDate){
      noodleOrder = <button style={styles.button} onClick={this._onNoodleOrder}>訂購</button>;
    }else{
      noodleOrder = <h2 style={{paddingTop:'8px', fontSize:'1.4em', color:'rgb(215,70,58)'}}> 3天後到貨 </h2>
    }

    var motherOrder

    if(this.state.motherDate){
      motherOrder = <button style={styles.button} onClick={this._onMotherOrder}>訂購</button>;
    }else{
      motherOrder = <h2 style={{paddingTop:'8px', fontSize:'1.4em', color:'rgb(215,70,58)'}}> 2天後到貨 </h2>
    }

    var eggOrder

    if(this.state.eggDate){
      eggOrder = <button style={styles.button} onClick={this._onEggOrder}>訂購</button>;
    }else{
      eggOrder = <h2 style={{paddingTop:'8px', fontSize:'1.4em', color:'rgb(215,70,58)'}}> 2天後到貨 </h2>
    }

    var sugarOrder

    if(this.state.sugarDate){
      sugarOrder = <button style={styles.button} onClick={this._onSugarOrder}>訂購</button>;
    }else{
      sugarOrder = <h2 style={{paddingTop:'8px', fontSize:'1.4em', color:'rgb(215,70,58)'}}> 1天後到貨 </h2>
    }

    var milkOrder

    if(this.state.milkDate){
      milkOrder = <button style={styles.button} onClick={this._onMilkOrder}>訂購</button>;
    }else{
      milkOrder = <h2 style={{paddingTop:'8px', fontSize:'1.4em', color:'rgb(215,70,58)'}}> 1天後到貨 </h2>
    }

    return (
      <div style={styles.wrap}>
        <div style={{display:'flex'}}>
          <div style={{'flex':1, paddingLeft:'135px',fontSize:'1.5em',fontFamily:'impact',color:'rgb(60,27,11)'}}>
            <p> 品項 </p>
          </div>
          <div style={{'flex':1, fontSize:'1.5em',fontFamily:'impact',color:'rgb(60,27,11)'}}>
            <p> 希望安全存量 </p>
          </div>
          <div style={{'flex':1, paddingLeft:'170px', fontSize:'1.5em',fontFamily:'impact',color:'rgb(60,27,11)'}}>
            <p> 存貨狀態 </p>
          </div>
          <div style={{'flex':1, paddingLeft:'40px', paddingRight:'60px', fontSize:'1.5em',fontFamily:'impact',color:'rgb(60,27,11)'}}>
            <p> 存貨數量 </p>
          </div>
        </div>

        <div id='noodle' style={styles.divA}>
          <h2 style={styles.nameA}> 麵粉 </h2>
          <input style={styles.input} onChange={this._onNoodleChange} value={this.state.noodle}></input>
          <button style={styles.button} onClick={this._onNoodleSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}> {this.state.noodleState} </h2>
          </div>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}>{this.state.inventoryNoodle}</h2>
          </div>
          {noodleOrder}
        </div>

        <div id='mother' style={styles.divB}>
          <h2 style={styles.nameB}> 酵母 </h2>
          <input style={styles.input} onChange={this._onMotherChange} value={this.state.mother}></input>
          <button style={styles.button} onClick={this._onMotherSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}> {this.state.motherState} </h2>
          </div>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}>{this.state.inventoryMother}</h2>
          </div>
          {motherOrder}
        </div>

        <div id='egg' style={styles.divA}>
          <h2 style={styles.nameA}> 雞蛋 </h2>
          <input style={styles.input} onChange={this._onEggChange} value={this.state.egg}></input>
          <button style={styles.button} onClick={this._onEggSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}> {this.state.eggState} </h2>
          </div>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}>{this.state.inventoryEgg}</h2>
          </div>
          {eggOrder}
        </div>

        <div id='sugar' style={styles.divB}>
          <h2 style={styles.nameB}> 糖 </h2>
          <input style={styles.input} onChange={this._onSugarChange} value={this.state.sugar}></input>
          <button style={styles.button} onClick={this._onSugarSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}> {this.state.sugarState} </h2>
          </div>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}>{this.state.inventorySugar}</h2>
          </div>
          {sugarOrder}
        </div>

        <div id='milk' style={styles.divA}>
          <h2 style={styles.nameA}> 牛奶 </h2>
          <input style={styles.input} onChange={this._onMilkChange} value={this.state.milk}></input>
          <button style={styles.button} onClick={this._onMilkSubmit}>確認</button>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}> {this.state.milkState} </h2>
          </div>
          <div style={styles.blankDiv}>
            <h2 style={{textAlign:'center', color:'#F5F5F5', paddingTop:'8px'}}>{this.state.inventoryMilk}</h2>
          </div>
          {milkOrder}
        </div>
      </div>
    )
  }
});

module.exports = Inventory;
