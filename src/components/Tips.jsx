// src/components/Tips.jsx
import React from 'react';
import { Typography, Container, Box, List, ListItem, ListItemText } from '@material-ui/core';

const Tips = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Tips and Information for Farmers
        </Typography>

        {/* Wind Speed Section */}
        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Wind Speed
          </Typography>
          <Typography variant="body1" paragraph>
            Wind speed affects several key factors in farming:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Leaf Temperature" 
                secondary="High winds can cause leaves to lose moisture quickly, leading to cooler leaf temperatures." 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Evaporation and Transpiration" 
                secondary="Wind increases the rate of evaporation from the soil and transpiration from plants, causing the soil to dry out faster and increasing the need for irrigation." 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Plant Stability" 
                secondary="Strong winds can uproot plants, especially those with shallow roots, so understanding wind conditions helps with plant protection and support." 
              />
            </ListItem>
          </List>
        </Box>

        {/* Air Mass & Sea Level Pressure Section */}
        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Air Mass & Sea Level Pressure
          </Typography>
          <Typography variant="body1" paragraph>
            Atmospheric pressure can impact both soil moisture and plant growth in several ways:
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Water Content in Soil" 
                secondary="High pressure can cause more water to evaporate from the soil, while low pressure can lead to condensation and more moisture in the soil, providing plants with better growing conditions." 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Nutrient Distribution" 
                secondary="High pressure may push nutrients deeper into the soil, while low pressure can keep them closer to the surface, making them more accessible to plants." 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Oxygen Availability" 
                secondary="Air pressure determines how much oxygen plants can absorb through their leaves, which is vital for photosynthesis. High pressure brings more oxygen, helping plants grow taller and faster." 
              />
            </ListItem>
          </List>
          <Typography variant="body2" paragraph>
            Overall, understanding air pressure is important for managing the water, nutrients, and oxygen needed for healthy plant growth.
          </Typography>
        </Box>

        {/* Precipitation Section */}
        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Precipitation
          </Typography>
          <Typography variant="body1" paragraph>
            Knowing the rate and amount of rainfall helps you optimize your irrigation schedule. By understanding how much water is naturally available, you can reduce the need for extra irrigation, saving water and costs.
          </Typography>
        </Box>

        {/* Surface Soil Wetness Section */}
        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Surface Soil Wetness
          </Typography>
          <Typography variant="body1" paragraph>
            Soil moisture indicates how much water is available in the soil between the wilting point and field capacity. This is the amount of water that plants can actually absorb through their roots.
          </Typography>
          <Typography variant="body1" paragraph>
            In simple terms, it shows how much water is in the soil that is close enough for the plant roots to access. If soil moisture is too low, irrigation will be needed to keep crops healthy.
          </Typography>
        </Box>

        <Typography variant="body2" paragraph>
          These insights help farmers make better decisions about watering schedules, nutrient management, and plant care to improve crop yields and sustainability.
        </Typography>
      </Box>
    </Container>
  );
};

export default Tips;
