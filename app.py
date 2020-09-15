import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from flask import Flask
from flask import render_template
from flask import request
import re
import json

cred = credentials.Certificate(
    "credentials/autentificationfirebase-2a9f4-firebase-adminsdk-5axd2-196b6c35a9.json")
firebase_admin.initialize_app(cred)

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
        # dodaje ovog usera
        try:
            auth.create_user(email=email, password=password,
                             display_name=ime + " " + prezime)
            return {"message": "Uspjesno ste se prijavili na sustav"}
        except:
            return {"message": "Nastala je greška prilikom stvaranja računa, možda ste već registrirani s ovom email adresom"}


if __name__ == "__main__":
    app.run(debug=True)
