from Camera import read_camera_data
from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run()

@app.route('/api/', methods=['GET'])
def index():
    return 'Cameras API'

@app.route('/api/cameras', methods=['GET'])
def cameras():
    camera_dicts = [camera.__dict__ for camera in read_camera_data()]
    return json.dumps(camera_dicts)