import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
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
  
});

class Login extends React.Component{

  constructor(props) {
    super(props);
    this.state = { email: "", psw:"" , message: "", code: "" };
    //code varijabla za status 200 300 400 500
    //message varijabla 
    //varijabla state salje vrijednosti korisnika putem post metode
  }
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    let self = this;
    const payload = {
     
      email: this.state.email,
      psw: this.state.psw
     
    }
  
  fetch('http://localhost:5000/api/token', {
      method: 'POST',
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(payload)//zamjenjeno 
    }).then(function (response) {//response odgovor sa servera najbitniji
      var json = response.json();
      self.setState({ "code": response.status });
      json.then(function (data) {
        localStorage.setItem('token', data.token);
        self.setState({ "message": data.message });
      });
      return json;

    });
    //event.target.reset();
    this.setState({email : "",psw : ""})//postavlja vrijednosti na prazno
    event.preventDefault();
  }







    render(){
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

        return( 
        
        
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            {this.state.message !== "" && <Alert severity={this.state.code === 200 ? "success" : "error"}>
            <AlertTitle>{this.state.code === 200 ? "Uspješno obrađen zahtjev" : "Nastala je neka greška"}</AlertTitle>
            {this.state.message}
          </Alert>}
            <Typography component="h1" variant="h5">
              Prijava
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}  noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Adresa"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
                value={this.state.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="psw"
                label="Lozinka"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
                value={this.state.psw}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Spremi moje podatke."
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Prijavi se
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Zaboravljena lozinka?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Nemate račun, registrirajte se!"}
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
export default withStyles(useStyles, { withTheme: true })(Login);