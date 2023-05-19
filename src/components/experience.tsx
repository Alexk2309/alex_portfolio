import '../styles/experience.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';
import ExperienceListings from './experienceList';

function Experience() {
    
    return (
        <div id='experience_layout'>
            <HeaderSection>
                <span className='header-label' style={{paddingBottom: '30px'}}>/experience </span>
                <ExperienceListings></ExperienceListings>
            </HeaderSection>
        </div>
        
    );
}

export default Experience;

