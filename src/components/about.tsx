import '../styles/about.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import TechStack from './teckStack';
import profilePhoto from '../effects/me_and_cat.jpg'

function About() {
    return (
        <div id='about_layout'>
            <HeaderSection>
                <span className='header-label'>/about-me</span>
                <div className='about_content'>
                    <div className='about_description'>
                        <p id='about-paragraph'>
                            I am a currently a student studying a
                            <b> Bachelor's of Computer Science</b>
                            <span> at </span>
                            <a href='https://www.unsw.edu.au/' style={{ color: 'aqua', textDecoration: 'none' }} >UNSW. </a>
                            I develop software in my freetime occassionally, while studying fulltime.
                        </p>
                        <span id='tech-line'>I am familiar with the following technologies: </span>
                        <HeaderSection>
                            <TechStack></TechStack>
                        </HeaderSection>
                        <span id='about_final'>Outside of work I enjoy training, reading, and playing computer games.</span>
                    </div>

                    <div id='portfolio_photo'>
                        <img src={profilePhoto} style={{borderRadius: '30px'}} alt='portfolio photo'></img>
                    </div>
                </div>

                {/* <div id='portfolio_photo'>
                    <img src={profilePhoto} style={{borderRadius: '30px'}} alt='portfolio photo'></img>
                </div> */}
            </HeaderSection>
        </div>
    );
}

export default About;

