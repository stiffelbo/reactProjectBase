import React from 'react';
import styles from './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
//components import
import MainLayout from '../MainLayout/MainLayout.js';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={} />

      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
