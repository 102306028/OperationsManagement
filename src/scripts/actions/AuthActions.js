import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AuthConstants from '../constants/AuthConstants.js';
import AuthStore from '../stores/AuthStore.js';

export default {
  login(email, password) {
    // Do Server Action

    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_LOGIN_SUCCESSFUL,
      token: 'ACCESS_TOKEN',
      name: 'admin'
    });
  },

  logout() {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_LOGOUT
    });
  },

  matchNoodle(noodle) {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_MATCHNOODLE,
      noodle: noodle
    });
  },

  matchMother(mother) {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_MATCHMOTHER,
      mother: mother
    });
  },

  matchEgg(egg) {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_MATCHEGG,
      egg: egg
    });
  },

  matchSugar(sugar) {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_MATCHSUGAR,
      sugar: sugar
    });
  },

  matchMilk(milk) {
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_MATCHMILK,
      milk: milk
    });
  },

  discount(sold,left){
    AppDispatcher.dispatch({
      action: AuthConstants.AUTH_DISCOUNT,
      sold: sold,
      left: left
    });
  },


}
