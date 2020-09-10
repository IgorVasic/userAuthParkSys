import React from "react";

class Singup extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: '',srname:'',reg:'', psw:'',cnfpsw:'' };
        //varijabla state salje vrijednosti korisnika putem post metode
      }
    handleSubmit(event){

        fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
        
        event.preventDefault();
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }

    render(){
        return( 
        //onchange uyima ono sto stavimo u8 input i spasava u state varijablu 
        //
        
        <form onSubmit={this.handleSubmit}>
          <h3>Registracija</h3>
          <div className="form-group">
            <label>Ime</label>
            <input onChange={this.handleChange} className="form-control" type="text" placeholder="Unesite Vaše ime" name="name" required></input>
          </div>
          <div className="form-group">
            <label >Prezime</label>
            <input onChange={this.handleChange} className="form-control" type="text" placeholder="Unesite Vaše prezime" name="srname" required></input>
          </div>
          <div className="form-group">
            <div className="form-group">
              <label >Registracijska oznaka</label>
              <input onChange={this.handleChange} className="form-control" type="text" placeholder="Unesite Vaše registracijsku oznaku" name="reg" required></input>
            </div>
            <label >E-mail</label>
            <input onChange={this.handleChange} className="form-control" type="text" placeholder="Unesite Vašu e-mail adresu" name="email" required></input>
          </div>
          
          <div className="form-group">
            <label >Lozinka</label>
            <input onChange={this.handleChange} className="form-control" type="password" placeholder="Unesite Vašu lozinku" name="psw" required></input>
          </div>
          <div className="form-group">
            <label>Potvrdite lozinku</label>
            <input onChange={this.handleChange} className="form-control" type="password" placeholder="Potvrdite Vašu lozinku" name="cnfpsw" required></input>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Registriraj se</button>
            <button type="reset" className="btn btn-success">Poništi</button>
          </div>
        </form>
        
      
            );
    };
}
export default Singup;