// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { getNasaPowerData } from '../services/nasaDataService';

// Register all necessary components in Chart.js
Chart.register(...registerables);

const Dashboard = () => {
    const [dates, setDates] = useState([]);
    const [solarRadiation, setSolarRadiation] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [precipitation, setPrecipitation] = useState([]);
    const [surfacePressure, setSurfacePressure] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);
    const [soilMoisture, setSoilMoisture] = useState([]);
    const [surfaceSoilMoisture, setSurfaceSoilMoisture] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNasaPowerData(25, 25); // Example coordinates (latitude, longitude)
                const solarData = data.properties.parameter.ALLSKY_SFC_SW_DWN;
                const tempData = data.properties.parameter.T2M;
                const precipData = data.properties.parameter.PRECTOT;
                const surfacePressureData = data.properties.parameter.PS;
                const windSpeedData = data.properties.parameter.WS2M;
                const soilMoistureData = data.properties.parameter.GWETPROF;
                const surfaceSoilMoistureData = data.properties.parameter.GWETTOP;

                // Set the data for the charts
                setDates(Object.keys(solarData)); // The dates (x-axis)
                setSolarRadiation(Object.values(solarData)); // Solar radiation data (y-axis)
                setTemperature(Object.values(tempData)); // Temperature data (y-axis)
                setPrecipitation(Object.values(precipData)); // Precipitation data (y-axis)
                setSurfacePressure(Object.values(surfacePressureData)); // Surface pressure data (y-axis)
                setWindSpeed(Object.values(windSpeedData)); // Wind speed data (y-axis)
                setSoilMoisture(Object.values(soilMoistureData)); // Soil moisture data (y-axis)
                setSurfaceSoilMoisture(Object.values(surfaceSoilMoistureData)); // Surface soil moisture data (y-axis)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Data and options for Solar Radiation, Temperature, Precipitation chart
    const climateChartData = {
        labels: dates,
        datasets: [
            {
                label: 'Solar Radiation (W/m²)',
                data: solarRadiation,
                borderColor: 'rgba(255, 206, 86, 1)', // Yellow
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                fill: true,
                yAxisID: 'y1',
            },
            {
                label: 'Temperature (°C)',
                data: temperature,
                borderColor: 'rgba(75, 192, 192, 1)', // Teal
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                fill: false,
                yAxisID: 'y2',
            },
            {
                label: 'Precipitation (mm)',
                data: precipitation,
                borderColor: 'rgba(153, 102, 255, 1)', // Purple
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                fill: false,
                yAxisID: 'y3',
            },
        ],
    };

    const climateChartOptions = {
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Solar Radiation (W/m²)',
                },
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                },
                grid: {
                    drawOnChartArea: false, // Removes the grid lines for this axis
                },
            },
            y3: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Precipitation (mm)',
                },
                grid: {
                    drawOnChartArea: false, // No grid lines for this axis either
                },
            },
        },
    };

    // Data and options for Surface Pressure and Wind Speed chart
    const pressureWindChartData = {
        labels: dates,
        datasets: [
            {
                label: 'Surface Pressure (Pa)',
                data: surfacePressure,
                borderColor: 'rgba(255, 99, 132, 1)', // Red
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: true,
            },
            {
                label: 'Wind Speed (m/s)',
                data: windSpeed,
                borderColor: 'rgba(54, 162, 235, 1)', // Blue
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                fill: true,
            },
        ],
    };

    const pressureWindChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Pressure (Pa) & Wind Speed (m/s)',
                },
            },
        },
    };

    // Data and options for Soil Moisture chart
    const soilMoistureChartData = {
        labels: dates,
        datasets: [
            {
                label: 'Soil Moisture (m³/m³)',
                data: soilMoisture,
                borderColor: 'rgba(255, 159, 64, 1)', // Orange
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                fill: true,
            },
            {
                label: 'Surface Soil Moisture (m³/m³)',
                data: surfaceSoilMoisture,
                borderColor: 'rgba(75, 192, 192, 1)', // Teal
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                fill: true,
            },
        ],
    };

    const soilMoistureChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Soil Moisture (m³/m³)',
                },
            },
        },
    };

    return (
        <div>
            <h1>Agricultural Dashboard</h1>
            
            {/* Climate Chart */}
            <h2>Climate Data</h2>
            <div>
                <Line data={climateChartData} options={climateChartOptions} />
            </div>
            
            {/* Surface Pressure and Wind Speed Chart */}
            <h2>Surface Pressure and Wind Speed</h2>
            <div>
                <Line data={pressureWindChartData} options={pressureWindChartOptions} />
            </div>

            {/* Soil Moisture Chart */}
            <h2>Soil Moisture</h2>
            <div>
                <Line data={soilMoistureChartData} options={soilMoistureChartOptions} />
            </div>
        </div>
    );
};

export default Dashboard;
