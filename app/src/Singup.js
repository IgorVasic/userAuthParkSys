import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';


  

const useStyles = makeStyles((theme) => ({
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
    },
  }));//sav css


class Singup extends React.Component{
    constructor(props) {
        super(props);
        this.state= { name: '',srname:'',reg:'', psw:'',cnfpsw:'', message:'','code':""};
        //code varijabla za status 200 300 400 500
        //message varijabla 
        //varijabla state salje vrijednosti korisnika putem post metode
        
    }
    handleSubmit = (event) => {
        let self = this;
        fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {//response odgovor sa servera najbitniji
        var json = response.json();
            self.setState({ "code": response.status });
            json.then(function (data) {
                    self.setState({ "message": data.message });
                });
                return json;
        
      });
        event.target.reset();
        event.preventDefault();
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

      
    render(){
        const { classes } = this.props;
        function Copyright() {
            return (
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                  Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            );
          }
           
        
        return( 
        //onchange uzima ono sto stavimo u input i spasava u state varijablu 
        
        
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography align="center" component="h1" variant="h5" >
            Registracija
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
        
                  onChange={this.handleChange}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Ime"
                  value = {this.props.name}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                
                onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Prezime"
                  value = {this.props.srname}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
            
                onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Adresa"
                  value = {this.props.email}
                  autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="reg"
                  label="Registracijska oznaka"
                  autoComplete="registracijska-oznaka"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  value = {this.props.psw}
                  label="Lozinka"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value = {this.props.cnfpsw}
                  label="Potvrda lozinke"
                  type="password"
                />
              </Grid>
            </Grid>
            <Button mt={5} 
           
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
               >
              Registriraj se
            </Button>
            
            
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Već imate račun? Prijavite se.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        <Copyright />
      </Box>
      </Container>
      
            );
    };
}
export default withStyles(useStyles)(Singup);