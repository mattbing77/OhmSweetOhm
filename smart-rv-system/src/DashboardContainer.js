//DashboardContainer.js
import React from 'react';
import SensorData from './SensorData';
import ApplianceControls from './ApplianceControls';

function DashboardContainer() {
    return (
        <div id="dashboardContainer">
            <h1>Smart RV System Dashboard</h1>
            <SensorData />
            <ApplianceControls />
        </div>
    );
}

export default DashboardContainer;
