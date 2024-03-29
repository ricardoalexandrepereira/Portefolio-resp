from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)
app.secret_key = 'thicode'

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("SENHA")
}
app.config.update(mail_settings)

mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/works')
def works():
    return render_template('works.html')


@app.route('/send', methods=['GET','POST'])
def send():
    if request.method == 'POST':
        formContato = Contato(
            request.form["nome"],request.form["email"],request.form["mensagem"]
        )
        msg = Message(
            subject = f'{formContato.nome} envio-te uma mensagem no portefólio',
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ['almamia100pree@gmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''
            
            {formContato.nome} com o e-mail {formContato.email}, enviou-te a seguinte mensagem:
            
            {formContato.mensagem}

            '''
        )
        mail.send(msg)
        flash('message sent successfully!')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)