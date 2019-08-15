import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { removeFeature, buyFeature } from './actions';

export const store = createStore(reducer);

const App = props => {
  console.log(props);
  const { state, removeFeature, buyFeature } = props;

  return (
    <Provider store={store}>
      <div className='boxes'>
        <div className='box'>
          <Header car={state.car} />
          <AddedFeatures car={state.car} removeFeature={removeFeature} />
        </div>
        <div className='box'>
          <AdditionalFeatures store={state.store} buyFeature={buyFeature} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  { buyFeature, removeFeature },
  null,
)(App);
