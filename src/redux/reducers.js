import { createReducer, combineReducers } from '@reduxjs/toolkit';
import settings from './features/settingsFeatureSlice';
import errors from './features/errorsFeatureSlice';
import success from './features/successFeatureSlice';

const rehydrate = createReducer(false, {
  REHYDRATE: (state, action) => (state = true),
});

export default combineReducers({
  settings,
  errors,
  success,
  rehydrate,
});
