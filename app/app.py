import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

cred = credentials.Certificate("credentials/autentificationfirebase-2a9f4-firebase-adminsdk-5axd2-196b6c35a9 (1).json")
firebase_admin.initialize_app(cred)


auth.create_user(email="igor25vasic@gmail.com", password="Pa$$word")