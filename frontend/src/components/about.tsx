import '../styles/introPage.css';
import HeaderSection from '../effects/scrollEffect';
import TechStack from './teckStack';
import  profilePhoto from '../effects/bmo.jpg'

function About() {
    return (
        <HeaderSection>
            <div className='about_layout'> 
                <span id='about_me_label'>/about me</span>
                <div className='about_content'>
                    <div className='about_description'>
                        <p style={{fontSize: '20px', maxWidth: '600px', lineHeight: '1.8' }}>
                            I am a currently a student studying a
                            <b> Bachelor's of Computer Science</b> 
                            <span> at </span>
                            <a href='https://www.unsw.edu.au/' style={{ color: 'aqua', textDecoration: 'none' }} >UNSW. </a>
                            I develop software in my freetime occassionally, while studying fulltime.
                        </p>
                        <span style={{fontSize: '20px'}}>I am familiar with the following technologies: </span>
                        <HeaderSection>
                            <TechStack></TechStack>
                        </HeaderSection>
                        <span id='about_final'>Outside of work I enjoy training, reading, and playing computer games.</span>
                    </div>
                    <div id='portfolio_photo'>
                        <img src={profilePhoto} style={{borderRadius: '30px'}} alt='portfolio photo'></img>
                    </div>
                    <div className='about_layout'></div>
                </div>
            </div>
        </HeaderSection>
    );
}

export default About;

