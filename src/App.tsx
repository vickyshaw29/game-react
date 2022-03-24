import React from 'react';
import {
  BrowserRouter,
  Route,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import routes from '../routes';
import theme from './styles/theme';
import { Header } from './components/atoms';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={(props: RouteComponentProps<any>) => (
                <route.component {...props} {...route.props} />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
