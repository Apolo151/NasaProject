import React from 'react'
import "./HeroSection.css"
import Button from '@mui/material/Button';
import ImageCard from './ImageCard';
import Container from '@mui/material/Container';

export default function HeroSection() {
    return (
    <>
        <div className='HeroSectionContainer'>
            <img src="https://th.bing.com/th/id/R.c2181f2f7b18726405e1f774c679b359?rik=5ppdHq3l9Qre4A&pid=ImgRaw&r=0" alt="" />
            <div className='HeroSectionContent'>
                <h1>FarmIQ</h1>
                <h3>Join us to transform your farming journey</h3>
                {/* <Button variant="contained" id="subscribeNow" sx={{fontSize:"2rem"}}>Checkout!</Button> */}
            </div>
        </div>
        <Container maxWidth="xl">
            <div className='AboutUSSection'>
                <h1>About Us </h1>
                <div className='blurLight' style={{backgroundColor:"#022201" , top:"0" , left:"-15%"}}></div>
                <div className='blurLight' style={{backgroundColor:"#022201" , top:"0" , right:"-15%"}}></div>

                <ImageCard dir={"right"} 
                img={"https://th.bing.com/th/id/R.64146264e667d5d27180d3fed5e9d116?rik=OtuF3yo0VHVA2A&pid=ImgRaw&r=0"}  
                title = {"FarmIQ"}
                description={"Welcome to FarmIQ, your trusted partner in smart farming. We are dedicated to empowering farmers with advanced tools and insights to optimize their farming processes. Our website provides you with accurate weather predictions tailored to your specific agricultural needs, ensuring that you can plan your activities efficiently and maximize your yield."}>
                </ImageCard>
                
                <ImageCard dir={"left"}
                img={"https://th.bing.com/th/id/R.787713fb0b1b8606feb684abbce18f64?rik=hTGIqVDhAl6jdQ&riu=http%3a%2f%2fwww.wallpaperup.com%2fuploads%2fwallpapers%2f2013%2f02%2f05%2f34896%2fde2e06f99a18826a5b4341753b7faec1.jpg&ehk=cotRWZz3tydhNVWOxghOzSwm3YNajMYgxFrA2k7qbqg%3d&risl=&pid=ImgRaw&r=0"}
                title = {""}
                description={"At FarmIQ, we believe in the power of data to drive farming success. Whether you're looking for real-time weather updates or detailed information about different farms and their conditions, we've got you covered. Our platform allows you to make informed decisions, ensuring your crops are always in sync with the best environmental conditions."}></ImageCard>
                
                <div className='blurLight' style={{backgroundColor:"#022201" , top:"50%" , left:"-15%"}}></div>
                <div className='blurLight' style={{backgroundColor:"#022201" , top:"50%" , right:"-15%"}}></div>
                <ImageCard dir={"right"} 
                img={"https://th.bing.com/th/id/R.cb24d21f9165aa63e07c15817d18d11c?rik=92vqNxm%2fjXeqhw&riu=http%3a%2f%2fmedia.beam.usnews.com%2f13%2f18%2fddbead684c69af9e437eded399dc%2f141105-farm-stock.jpg&ehk=L4WREhw8MW2MjlytQAmr9Sdorr9MpZMbFGPhCn%2f%2fbKk%3d&risl=&pid=ImgRaw&r=0"}
                title = {""} 
                description={"Join us in revolutionizing the farming process by embracing the future of weather-informed agriculture. Together, we can make farming smarter, more sustainable, and more productive."}>
                </ImageCard>
            </div>
        </Container>
    </>
  )
}
