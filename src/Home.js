import React from 'react'
import GridProducts from './GridProducts';
import AwesomeSlider from 'react-awesome-slider';
import coreStyles from 'react-awesome-slider/src/core/styles.scss';
import animationStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import './Home.css';

function Home() {
    const fn = () => {

    }
    return (
        <div className="home">
            <AwesomeSlider
                animation="fallAnimation"
                cssModule={[coreStyles, animationStyles]}
            >
                <div data-src="https://scontent.fscl19-1.fna.fbcdn.net/v/t1.0-9/119194941_117648890069341_6119360393443990905_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=hc_dhfJyBvMAX-l_jjh&_nc_ht=scontent.fscl19-1.fna&oh=e62da485db0f0f6b801e32d2ffe9cb62&oe=5F8219B4" />
                <div data-src="https://scontent.fscl19-1.fna.fbcdn.net/v/t1.0-9/119261698_117651410069089_401172430666952796_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=zyeXl9M4K_gAX_NWtPa&_nc_ht=scontent.fscl19-1.fna&oh=e35eccb818ce7cfc37bd00bb551e3062&oe=5F83B0C8" />
                <div data-src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/119470566_117908850043345_8138657292717600358_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=vrFu1Ib7sw0AX_N1wmG&_nc_ht=scontent.fscl18-1.fna&oh=95495659827df3e83eeb33cf1d9551c8&oe=5F83F36E" />
            </AwesomeSlider>
            <p className="home__titulo">Destacados del Mes</p>
            <GridProducts/>
        
        </div>
    )
}

export default Home
