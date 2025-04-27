from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.get_json()

        if not data or 'name' not in data or 'message' not in data or 'email' not in data:
            return jsonify({"error": "Nom, email et message sont requis."}), 400

        sender_email = os.getenv("SENDER_EMAIL")  # Charge depuis .env
        receiver_email = os.getenv("RECEIVER_EMAIL")
        password = os.getenv("EMAIL_PASSWORD")

        if not sender_email or not receiver_email or not password:
            return jsonify({"error": "Configuration email manquante."}), 500

        subject = f"Nouveau message de {data['name']}"
        body = f"Nom: {data['name']}\nEmail: {data['email']}\n\nMessage:\n{data['message']}"

        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = receiver_email

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, msg.as_string())

        return jsonify({"success": "Message envoyé avec succès!"}), 200

    except smtplib.SMTPAuthenticationError:
        return jsonify({"error": "Erreur d'authentification SMTP. Vérifiez votre email et mot de passe."}), 500
    except Exception as e:
        return jsonify({"error": f"Erreur serveur: {str(e)}"}), 500
    



def send_email(subject, body):
    try:
        sender_email = os.getenv("SENDER_EMAIL")  # Charge depuis .env
        receiver_email = os.getenv("RECEIVER_EMAIL")
        password = os.getenv("EMAIL_PASSWORD")

        if not sender_email or not receiver_email or not password:
            raise Exception("Configuration email manquante.")

        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = receiver_email

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, msg.as_string())

    except smtplib.SMTPAuthenticationError:
        raise Exception("Erreur d'authentification SMTP. Vérifiez votre email et mot de passe.")
    except Exception as e:
        raise Exception(f"Erreur serveur lors de l'envoi de l'email: {str(e)}")

@app.route('/api/form', methods=['POST'])
def handle_project_form():
    try:
        # Récupérer les données JSON envoyées par le frontend
        data = request.get_json()

        # Extraire les informations du formulaire
        project_name = data.get('projectName')
        description = data.get('description')
        resources = data.get('resources')
        category = data.get('category')
        budget = data.get('budget')
        deadline = data.get('deadline')

        # Créer le corps du message pour l'email
        email_subject = f"Nouvelle soumission de projet: {project_name}"
        email_body = f"""
        Nom du projet: {project_name}
        Description: {description}
        Ressources: {resources}
        Catégorie: {category}
        Budget estimé: {budget} DT
        Date limite: {deadline}
        """

        # Envoyer l'email avec les données du formulaire
        send_email(email_subject, email_body)

        # Répondre au frontend avec un message de succès
        return jsonify({"success": True, "message": "Le projet a été soumis avec succès et un e-mail a été envoyé!"}), 200

    except Exception as e:
        # En cas d'erreur, renvoyer une réponse d'erreur
        return jsonify({"success": False, "message": f"Une erreur s'est produite : {str(e)}"}), 500











if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
