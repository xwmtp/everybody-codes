# Keep Talking and Everybody Codes

Mijn uitwerking van https://github.com/infi-nl/everybody-codes

## Backend

De backend is geschreven in Python, gebruik ten minste Python 3.7.

### CLI

`python Search.py --name [zoekterm]`

### API

Zorg dat `Flask` en `Flask-CORS` geïnstalleerd zijn met `pip install flask flask-cors`. Run vervolgens:
```
export FLASK_APP=App.py
flask run
```

De API is nu beschikbaar op http://localhost:5000/api

## Frontend

De frontend is geschreven in Javascript met React.

### Webapplicatie

Run:
```
npm install
npm start
```

De webapplicatie is nu bereikbaar op http://localhost:3000