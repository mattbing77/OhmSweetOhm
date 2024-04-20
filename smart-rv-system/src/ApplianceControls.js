import React, { useState } from 'react';
import axios from 'axios';

function ApplianceControls() {
    // States to track the status of light and awning
    const [isLightOn, setIsLightOn] = useState(false);
    const [isAwningOn, setIsAwningOn] = useState(false);

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

    const toggleAwning = () => {
        axios.post('/api/toggle_awning')
            .then(response => {
                alert(`Awning toggled! Response: ${response.data.status}`);
                // Update state based on the response
                setIsAwningOn(response.data.status === 'on');
            })
            .catch(error => {
                alert('Error toggling awning');
                console.error(error);
            });
    };

    // Style objects for buttons based on their statuses
    const lightButtonStyle = {
        backgroundColor: isLightOn ? 'blue' : 'gray',
        color: 'white',
    };
    
    const awningButtonStyle = {
        backgroundColor: isAwningOn ? 'blue' : 'gray',
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
                id="toggleAwning" 
                onClick={toggleAwning} 
                style={awningButtonStyle}
            >
                Toggle Awning
            </button>
        </div>
    );
}

export default ApplianceControls;
