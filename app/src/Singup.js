import React, { useReducer } from 'react';
import Avatar from '@material-ui/core/Avatar';
import RaisedButton from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Alert from '@material-ui/lab/Alert';

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2)

  },

});//sav css


class Singup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", srname: "", email: "", psw: "", reg: "", cnfpass: "", message: "", code: "" };
    //code varijabla za status 200 300 400 500
    //message varijabla 
    //varijabla state salje vrijednosti korisnika putem post metode
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    let self = this;
    const payload = {
      name: this.state.name,
      srname: this.state.srname,
      email: this.state.email,
      reg: this.state.reg,
      psw: this.state.psw,
      cnfpsw: this.state.cnfpsw
    }

    fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(payload)//zamjenjeno 
    }).then(function (response) {//response odgovor sa servera najbitniji
      var json = response.json();
      self.setState({ "code": response.status });
      json.then(function (data) {
        self.setState({ "message": data.message });
      });
      return json;

    });
    //event.target.reset();
    this.setState({name : "", srname : "", reg : "",email : "",psw : "",cnfpsw:""})//postavlja vrijednosti na prazno
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            SUM FPMOZ
                </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    return (
      //onchange uzima ono sto stavimo u input i spasava u state varijablu 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {this.state.message !== "" && <Alert severity={this.state.code === 200 ? "success" : "error"}>
            <AlertTitle>{this.state.code === 200 ? "Uspješno obrađen zahtjev" : "Nastala je neka greška"}</AlertTitle>
            {this.state.message}
          </Alert>
          }
          <Typography align="center" component="h1" variant="h5" >
            Registracija
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit} action="/" method="POST">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="name"
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="firstName"
                  label="Ime"
                  value={this.state.name}
                  onChange={this.handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="srname"
                  variant="outlined"
                  required={true}
                  fullWidth
                  id="lastName"
                  label="Prezime"
                  autoComplete="lname"
                  onChange={this.handleChange}
                  value={this.state.srname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  name="email"
                  label="Email Adresa"
                  autoComplete="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  name="reg"
                  label="Registracijska oznaka"
                  autoComplete="registracijska-oznaka"
                  onChange={this.handleChange}
                  value={this.state.reg}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required={true}
                  fullWidth
                  label="Lozinka"
                  type="password"
                  id="password"
                  name="psw"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                  value={this.state.psw}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange}
                  value={this.state.cnfpsw}
                  variant="outlined"
                  required={true}
                  fullWidth
                  label="Potvrda lozinke"
                  name="cnfpsw"
                  type="password"
                />
              </Grid>
            </Grid>
            <RaisedButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registriraj se
            </RaisedButton>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Već imate račun? Prijavite se.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={1}>
          <Copyright />
        </Box>
      </Container>

    );
  };
}

export default withStyles(useStyles, { withTheme: true })(Singup);//razlog zasto sve dobro radi 