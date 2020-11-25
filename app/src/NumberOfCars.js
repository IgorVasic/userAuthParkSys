
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Broj automobila</Title>
      <Typography component="p" variant="h4">
        24
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        24.11.2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Vidi broj Automobila
        </Link>
      </div>
    </React.Fragment>
  );
}