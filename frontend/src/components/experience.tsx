import '../styles/experience.css';
import HeaderSection from '../effects/scrollEffect';

import ExperienceList from './experienceList';

function Experience() {
    
    return (
        <HeaderSection>
            <div className='experience_layout'> 
                <span id='experience_label'>/experience </span>
                <div style={{paddingTop:'30px'}}>
                <ExperienceList></ExperienceList>
                </div>
            </div>
        </HeaderSection>
    );
}

export default Experience;

