from flask import Flask, request
from flask_mail import Mail, Message
from flask_cors import CORS

from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

# Configuração do Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.googlemail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USER')  
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')  

mail = Mail(app)

@app.route('/enviar_email', methods=['POST'])
def enviar_email():
    data = request.get_json()

    msg = Message(data['assunto'],
                  sender= os.getenv('EMAIL_USER'), 
                  recipients= [
                    'mateustorquato98@proton.me'
                    ])
    msg.body = f"Nome: {data['fullname']}\nAssunto: {data['assunto']}\nEmail: {data['emaildestinatario']}\nTelefone: {data['mobile']}\nMensagem: {data['message']}"

    mail.send(msg)

    return 'Mensagem enviada', 200

if __name__ == '__main__':
    app.run()
