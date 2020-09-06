import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from flask import Flask
from flask import render_template

cred = credentials.Certificate("credentials/autentificationfirebase-2a9f4-firebase-adminsdk-5axd2-196b6c35a9 (1).json")
firebase_admin.initialize_app(cred)

#kreira novog usera 
#auth.create_user(email="igor25vasic@gmail.com", password="Pa$$word")

app = Flask(__name__) 
@app.route("/login")#poziva funkciju login 
def login():
    return render_template("auth/login.html")
    
if __name__== "__main__":
    app.run(debug=True)


app = Flask(__name__)
@app.route("/register")#poziva funkciju register 
def register():
    return render_template("auth/register.html")
    
if __name__== "__main__":
    app.run(debug=True)




