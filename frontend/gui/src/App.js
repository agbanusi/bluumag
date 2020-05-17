import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import BaseRouter from './Routes';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Container maxWidth='xl' style={{ padding: '0%' }}>
            <BaseRouter />
          </Container>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;