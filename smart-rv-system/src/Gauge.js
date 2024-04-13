//Guage.js
import React, { useRef, useEffect } from 'react';

function Gauge({ label, value, max, unit }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 45; // Adjust based on your canvas size

        const drawGauge = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // Draw background arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 10;
            ctx.stroke();

            // Calculate the end angle based on the value
            const endAngle = Math.PI + (Math.PI * value / max);

            // Draw value arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, Math.PI, endAngle, false);
            ctx.strokeStyle = 'green'; // Change as per your requirement
            ctx.stroke();

            // Draw the needle
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            const needleLength = radius * 0.8;
            const needleAngle = endAngle - 0.05; // Slight offset for aesthetic purposes
            ctx.lineTo(centerX + needleLength * Math.cos(needleAngle), centerY + needleLength * Math.sin(needleAngle));
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        drawGauge();
    }, [value, max]);

    return (
        <div>
            <p>{label}: <span>{`${value}${unit}`}</span></p>
            <canvas ref={canvasRef} width="200" height="100"></canvas>
        </div>
    );
}

export default Gauge;
