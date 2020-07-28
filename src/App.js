import React from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './Redux/store/configStore';
import { Provider } from "react-redux";
import Header from './Component/header';

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
