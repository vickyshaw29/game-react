import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';
import headerStyle from './HeaderStyles';
import { Fragment, useState } from 'react';
import { CustomButton } from '../../atoms';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const history = useHistory();
  const classes = headerStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  let tabsArray = [
    { label: 'Market', href: '/' },
    { label: 'Exchange', href: '/' },
    { label: 'Tutorials', href: '/' },
    { label: 'Wallet', href: '/' },
  ];

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ minHeight: 52.5 }}>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};
export default Header;
