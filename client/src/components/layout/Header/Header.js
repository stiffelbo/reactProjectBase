import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={6}>
              <nav>
                <NavLink to='/home' activeClassName='active'>Home</NavLink>
                <NavLink to='/about' activeClassName='active'>About</NavLink>
                <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
              </nav>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
