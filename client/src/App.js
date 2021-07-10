import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './styles/animationSwitch.scss';
//components import
import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
