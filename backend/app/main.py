from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

VERSION = os.getenv('APP_VERSION', '1.0.0')
ENVIRONMENT = os.getenv('ENVIRONMENT', 'development')

@app.route('/')
def home():
    return jsonify({
        'message': 'CI/CD Playground API',
        'version': VERSION,
        'environment': ENVIRONMENT,
        'status': 'healthy'
    })

@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'version': VERSION}), 200

@app.route('/api/users')
def get_users():
    return jsonify({
        'users': [
            {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'},
            {'id': 2, 'name': 'Bob', 'email': 'bob@example.com'}
        ]
    })

@app.route('/api/status')
def status():
    return jsonify({
        'database': 'connected',
        'cache': 'active',
        'environment': ENVIRONMENT
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5100, debug=(ENVIRONMENT == 'development'))
