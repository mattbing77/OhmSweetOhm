//SensorData.js
import React from 'react';
import axios from 'axios'; // Import Axios
import Gauge from './Gauge';

class SensorData extends React.Component {
    state = {
        wasteWaterLevel: 0,
        waterPressureLevel: 0,
        gasLevel: 0,
        airQuality: 'Good',
    };

    componentDidMount() {
        this.updateSensorData();
        this.interval = setInterval(this.updateSensorData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateSensorData = () => {
        // Use Axios for the HTTP request
        axios.get('/api/sensor_data')
            .then(response => {
                // Axios wraps the response data inside a 'data' attribute
                const { data } = response;
                this.setState({
                    wasteWaterLevel: data.wasteWaterLevel,
                    waterPressureLevel: data.waterPressureLevel,
                    gasLevel: data.gasLevel,
                    airQuality: data.airQuality,
                });
            })
            .catch(error => console.error('Error fetching data: ', error));
    };

    render() {
        return (
            <div id="sensorData">
                <div className="header">
                    <h2>Sensor Readings</h2>
                </div>
                <div className="grid-container">
                    <Gauge label="Waste Water Level" value={this.state.wasteWaterLevel} max={100} unit="%" />
                    <Gauge label="Water Pressure" value={this.state.waterPressureLevel} max={120} unit="PSI" />
                    <Gauge label="Gas Level" value={this.state.gasLevel} max={100} unit="%" />
                    <Gauge label="Air Quality" value={this.state.airQuality === 'Good' ? 100 : 0} max={100} unit="" />
                </div>
            </div>
        );
    }
}

export default SensorData;
