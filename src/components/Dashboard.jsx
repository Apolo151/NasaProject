import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { getNasaPowerData } from '../services/nasaDataService'; // Assuming you have an API function to fetch data
import { TextField, Button, Box, Typography } from '@mui/material';
import { Chart, LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Legend, Title } from 'chart.js';

// Register required components from Chart.js
Chart.register(LinearScale, CategoryScale, LineElement, PointElement, Tooltip, Legend, Title);

const Dashboard = () => {
    const getDefaultStartDate = () => {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        return date.toISOString().split('T')[0];
    };

    const getDefaultEndDate = () => {
        const date = new Date();
        return date.toISOString().split('T')[0];
    };

    const [dates, setDates] = useState([]);
    const [solarRadiation, setSolarRadiation] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [surfacePressure, setSurfacePressure] = useState([]);
    const [windSpeed, setWindSpeed] = useState([]);
    const [soilMoisture, setSoilMoisture] = useState([]);
    const [surfaceSoilMoisture, setSurfaceSoilMoisture] = useState([]);
    const [startDate, setStartDate] = useState(getDefaultStartDate());
    const [endDate, setEndDate] = useState(getDefaultEndDate());

    useEffect(() => {
        fetchData();
    }, [startDate, endDate]);

    const fetchData = async () => {
        try {
            // remove - from date
            const sDate = startDate.replace(/-/g, '');
            const eDate = endDate.replace(/-/g, '');
            const data = await getNasaPowerData(25, 25, sDate, eDate); // Example coordinates (latitude, longitude)
            const solarData = data.properties.parameter.ALLSKY_SFC_SW_DWN;
            const tempData = data.properties.parameter.T2M;
            const surfacePressureData = data.properties.parameter.PS;
            const windSpeedData = data.properties.parameter.WS2M;
            const soilMoistureData = data.properties.parameter.GWETPROF;
            const surfaceSoilMoistureData = data.properties.parameter.GWETTOP;

            // Set the data for the charts
            setDates(Object.keys(solarData)); // The dates (x-axis)
            setSolarRadiation(Object.values(solarData)); // Solar radiation data (y-axis)
            setTemperature(Object.values(tempData)); // Temperature data (y-axis)
            setSurfacePressure(Object.values(surfacePressureData)); // Surface pressure data (y-axis)
            setWindSpeed(Object.values(windSpeedData)); // Wind speed data (y-axis)
            setSoilMoisture(Object.values(soilMoistureData)); // Soil moisture data (y-axis)
            setSurfaceSoilMoisture(Object.values(surfaceSoilMoistureData)); // Surface soil moisture data (y-axis)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDateChange = (setter) => (event) => {
        setter(event.target.value);
    };

    const climateChartData = {
        labels: dates,
        datasets: [
            {
                label: 'Solar Radiation',
                data: solarRadiation,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y1',
            },
            {
                label: 'Temperature',
                data: temperature,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y2',
            },
            {
                label: 'Surface Pressure',
                data: surfacePressure,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                yAxisID: 'y3',
            },
            {
                label: 'Wind Speed',
                data: windSpeed,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                yAxisID: 'y4',
            },
            {
                label: 'Soil Moisture',
                data: soilMoisture,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                yAxisID: 'y5',
            },
            {
                label: 'Surface Soil Moisture',
                data: surfaceSoilMoisture,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                yAxisID: 'y6',
            },
        ],
    };

    const options = {
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: { display: true, text: 'Solar Radiation' },
                grid: { drawOnChartArea: false },
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Temperature (°C)' },
                grid: { drawOnChartArea: false },
            },
            y3: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Surface Pressure (hPa)' },
                grid: { drawOnChartArea: false },
            },
            y4: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Wind Speed (m/s)' },
                grid: { drawOnChartArea: false },
            },
            y5: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Soil Moisture (%)' },
                grid: { drawOnChartArea: false },
            },
            y6: {
                type: 'linear',
                position: 'right',
                title: { display: true, text: 'Surface Soil Moisture (%)' },
                grid: { drawOnChartArea: false },
            }
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Climate Data Dashboard',
            },
        },
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Climate Data Dashboard
            </Typography>
            <Box display="flex" justifyContent="center" mb={4} gap={2}>
                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={handleDateChange(setStartDate)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={handleDateChange(setEndDate)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" onClick={fetchData}>
                    Update
                </Button>
            </Box>
            <Line data={climateChartData} options={options} />
        </Box>
    );
};

export default Dashboard;