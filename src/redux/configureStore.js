import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
