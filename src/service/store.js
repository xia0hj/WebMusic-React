import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './DevTools';


import { combineReducers } from 'redux';





const initialState = {
  banner:[],
}

const bannerReducer = function(banner=[], action){
  switch(action.type){
    case "change_banner":
      return action.banner;
    default:
      return banner;
  }
}

const rootReducer = combineReducers({
  banner: bannerReducer,
});


const enhancer = compose(
  //applyMiddleware加上要使用的中间件，没有可省略
  applyMiddleware(thunk),
  DevTools.instrument()
);
const store = createStore(rootReducer, initialState, enhancer);
export default store;



// store.state = { banner:[] }