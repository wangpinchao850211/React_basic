import React from 'react';
import './App.css';
import RouteMap from './router';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  
  return (
      <div className="App">
        <Provider store={store}>
          <RouteMap />
        </Provider>
      </div>
  );
}

export default App;
