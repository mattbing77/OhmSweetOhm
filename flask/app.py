from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS

# Import the generate_sensor_data function
from SensorData import sensorData

app = Flask(__name__)
CORS(app)

# In-memory storage for device states
device_states = {
    "light": False,  # Initially off
    "onning": False  # Assuming "onning" is correct; replace with "awning" if it was a typo
}

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/sensor_data')
def sensor_data():
    # Use the imported function to get sensor data
    data = sensorData()
    return jsonify(data)

@app.route('/api/toggle_light', methods=['POST'])
def toggle_light():
    # Toggle the light state
    current_state = device_states["light"]
    new_state = not current_state
    device_states["light"] = new_state
    # Return the new state
    status = "on" if new_state else "off"
    print(f"Light toggled to {status}!")
    return jsonify({'status': status})

@app.route('/api/toggle_onning', methods=['POST'])
def toggle_onning():
    # Toggle the onning state
    current_state = device_states["onning"]
    new_state = not current_state
    device_states["onning"] = new_state
    # Return the new state
    status = "on" if new_state else "off"
    print(f"Onning toggled to {status}!")  # Note: This seems to be a typo. Did you mean 'awning' toggled?
    return jsonify({'status': status})

if __name__ == '__main__':
    app.run(debug=True)
