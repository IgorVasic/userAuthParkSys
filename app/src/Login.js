import React from "react";

class Login extends React.Component{
    render(){
        return( 
        
        
            <form action="" method="post">
              <h3>Prijava na sustav</h3>
              <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" placeholder="Unesite E-mail adresu" name="uname" required></input>
              </div>
              <div className="form-group">
                <label>Lozinka</label>
                <input className="form-control" type="password" placeholder="Unesite Vašu lozinku" name="psw" required></input>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" class="form-check-input" name="remember"></input>
                <label className="form-check-label">Zapamti me</label>
              </div>
              <div class="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Prijavite se</button>
                <button type="reset" className="btn btn-success" >Poništi</button>
              </div>
              <span className="psw"><a>Zaboravili ste lozinku?</a></span>
            </form>
        
      
            );
    };
}
export default Login;