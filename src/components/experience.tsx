import '../styles/experience.css';
import '../styles/index.css';
import HeaderSection from '../effects/scrollEffect';

import ExperienceList from './experienceList';

function Experience() {
    
    return (
        <HeaderSection>
            <div className='experience_layout'> 
                <span className='header-label' style={{paddingBottom: '30px'}}>/experience </span>
                <ExperienceList></ExperienceList>
            </div>
        </HeaderSection>
    );
}

export default Experience;

