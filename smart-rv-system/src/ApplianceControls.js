import React, { useState } from 'react';
import axios from 'axios';

function ApplianceControls() {
    // States to track the status of light and onning
    const [isLightOn, setIsLightOn] = useState(false);
    const [isOnningOn, setIsOnningOn] = useState(false);

    const toggleLight = () => {
        axios.post('/api/toggle_light')
            .then(response => {
                alert(`Light toggled! Response: ${response.data.status}`);
                // Assuming the API returns the new status in response.data.status
                // Update state based on the response
                setIsLightOn(response.data.status === 'on');
            })
            .catch(error => {
                alert('Error toggling light');
                console.error(error);
            });
    };

    const toggleOnning = () => {
        axios.post('/api/toggle_onning')
            .then(response => {
                alert(`Onning toggled! Response: ${response.data.status}`);
                // Update state based on the response
                setIsOnningOn(response.data.status === 'on');
            })
            .catch(error => {
                alert('Error toggling onning');
                console.error(error);
            });
    };

    // Style objects for buttons based on their statuses
    const lightButtonStyle = {
        backgroundColor: isLightOn ? 'blue' : 'gray',
        color: 'white',
    };
    
    const onningButtonStyle = {
        backgroundColor: isOnningOn ? 'blue' : 'gray',
        color: 'white',
    };

    return (
        <div id="applianceControls">
            <h2>Appliance Controls</h2>
            <button 
                id="toggleLight" 
                onClick={toggleLight} 
                style={lightButtonStyle}
            >
                Toggle Light
            </button>
            <button 
                id="toggleOnning" 
                onClick={toggleOnning} 
                style={onningButtonStyle}
            >
                Toggle Onning
            </button>
        </div>
    );
}

export default ApplianceControls;
