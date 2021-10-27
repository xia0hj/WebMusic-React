import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './DevTools';


import { combineReducers } from 'redux';





const initialState = {
  banner:[],
}



/**
 * @param {object[]} banners
 * @returns {{type:"get_banner", banner: object[]}}
 */
export const getBannerAction = (banners)=>{
  return {
    type: "get_banner",
    banner: banners,
  }
};
const bannerReducer = function(banner=[], action){
  switch(action.type){
    case "get_banner":
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
export const store = createStore(rootReducer, initialState, enhancer);
