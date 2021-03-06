import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from flask import Flask
from flask import render_template
from flask import request
import re
import json
import pyrebase
import os
from functools import wraps

print(os.getcwd())

cred = credentials.Certificate("credentials/realtimethesis-firebase-adminsdk-elwjt-e65bbf0293.json")
firebase_admin.initialize_app(cred)
pb = pyrebase.initialize_app(json.load(open('credentials/firebaseconfig.json')))
#db = pb.database()
#db.child("name").push({"people":"22"})

# kreira novog usera
# auth.create_user(email="igor25vasic@gmail.com", password="Pa$$word")

app = Flask(__name__)


@app.route("/api/signin", methods=["POST"])  # poziva funkciju sign in
def signin():
    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    # dohvatamo sve varijable
    request.data = json.loads(request.data)
    ime = request.data["name"]
    prezime = request.data["srname"]
    email = request.data["email"]
    password = request.data["psw"]
    cnfPassword = request.data["cnfpsw"]
    regPlt = request.data["reg"]
    # provjerava da li su unesena sva polja
    if (ime == ""
        or prezime == ""
        or email == ""
        or password == ""
        or cnfPassword == ""
        or regPlt == ""
        ):
        return {"message": "Niste popunili sva polja"}, 400
    elif not re.search(regex, email):
        return {"message": "Email račun nije ispravnog formata"}, 400
    elif (password != cnfPassword):
        return {"message": "Unesene lozinke se ne poklapaju"}, 400
    else:
        # dodaje novog usera
        try:
            auth.create_user(email=email, password=password,
                             display_name=ime + " " + prezime)
            return {"message": "Uspjesno ste se prijavili na sustav"}
        except:
            return {"message": "Nastala je greška prilikom stvaranja računa, možda ste već registrirani s ovom email adresom"}, 400


@app.route('/api/token')#salje email i pass i logira usera 
def token():
    request.data = json.loads(request.data)
    email = request.data['email']
    password = request.data['password']
    try:
        user = pb.auth().sign_in_with_email_and_password(email, password)
        jwt = user['idToken']
        return {'token': jwt}, 200
    except:
        return {'message': 'Nastao je problem prilikom prijave, možda korisnički podaci nisu ispravni'},400

def check_token(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if not request.headers.get('authorization'):
            return {'message': 'Nije dodijeljen token'},400
        try:
            user = auth.verify_id_token(request.headers['authorization'])
            request.user = user
        except:
            return {'message':'Neispravana token.'},400
        return f(*args, **kwargs)
    return wrap
@app.route('/api/home')
#@check_token
def home():
    return 'Home'

if __name__ == "__main__":
    app.run(debug=True)



