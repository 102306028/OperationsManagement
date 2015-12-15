import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import AuthConstants from '../constants/AuthConstants.js';
import assign from 'object-assign';

// Server Side Hotfix
const localStorage = localStorage || {};

const CHANGE_EVENT = 'change';

let materialArray = [1000,500,100,100,500];

let enough = '正常';
let notEnough = '缺貨中';
let finalresult = '';

const AuthStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  matchNoodle(material){
    if (material > materialArray[0]){
      return notEnough;
    }else{
      return enough;
    }
  },

  matchMother(material){
    if (material > materialArray[1]){
      return notEnough;
    }else{
      return enough;
    }
  },

  matchEgg(material){
    if (material > materialArray[2]){
      return notEnough;
    }else{
      return enough;
    }
  },

  matchSugar(material){
    if (material > materialArray[3]){
      return notEnough;
    }else{
      return enough;
    }
  },

  matchMilk(material){
    if (material > materialArray[4]){
      return notEnough;
    }else{
      return enough;
    }
  },

  getNoodle(){
    return materialArray[0];
  },

  getMother(){
    return materialArray[1];
  },

  getEgg(){
    return materialArray[2];
  },

  getSugar(){
    return materialArray[3];
  },

  getMilk(){
    return materialArray[4];
  },

  convertToDiscount(result){
    var size = Math.pow(10,2);
    var ans = (Math.round(result*size)/size)*100;
    if(ans<0 || ans>100){
      return("建議方案：買一送一");
    }else if (0 <= ans && ans<= 100) {
      return("建議方案：降價" + ans + "%");
    }
    else {
      return("資料有誤，請重新輸入");
    }
  },

  getfinalresult(){
    return finalresult;
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case AuthConstants.AUTH_MATCHNOODLE:
      AuthStore.matchNoodle(payload.noodle);
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHMOTHER:
      AuthStore.matchMother(payload.mother);
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHEGG:
      AuthStore.matchEgg(payload.egg);
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHSUGAR:
      AuthStore.matchSugar(payload.sugar);
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_MATCHMILK:
      AuthStore.matchMilk(payload.milk);
      AuthStore.emitChange();
    break;

    case AuthConstants.AUTH_DISCOUNT:
    var result = 5*(payload.left/payload.sold)/(3+((payload.left/payload.sold)*0.01));
      finalresult = AuthStore.convertToDiscount(result);
      AuthStore.emitChange();
      break;


  }
  return true;
});

export default AuthStore;
