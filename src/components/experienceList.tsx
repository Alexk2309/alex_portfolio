import '../styles/experience.css';
import HeaderSection from '../effects/scrollEffect';
import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface jobPosting {
    jobTitle: string;
    timePeriod: string;
    description: string[];
    companyLink: string;
}

function ExperienceListings() {

    const [value, setValue] = React.useState('0');
    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };
    
    const JobList: Record<string, jobPosting> = {
        Freelance:  {
            jobTitle: 'Web Developer',
            timePeriod: 'DEC 2021 - PRESENT',
            description: ['Made websites for myself and clients. Clients were family or close friends, for personal websites and businesses.', 
            'Intergrated a database system using SQL (pSQl), using typeORM.', 
            'Created websites with different frameworks, such as express.js, django, and flask.',
            "Familiar with CRUD requests, and intergrated api's to work with websites. "],
            companyLink: 'https://github.com/Alexk2309'
        },
        /*
        Demostration: {
            jobTitle: 'Sample Demoer',
            timePeriod: 'INFINITY',
            description: ['This is just a demo', 'To showcase the different clickable sections', 'Programmed with MUI'],
            companyLink: 'https://mui.com/'
        }
        */  
    }

    const styleTabLabels = {
        color: 'white',
        display: 'flex',
        fontWeight: 'bold',
        alignItems: 'start',
        p:0.5
    }

    const keys: string[] =  Object.keys(JobList);
    return (
        <TabContext value={value}>
            <div id='experience-display'>
                <TabList onChange={handleChange} orientation={'vertical'} textColor='inherit' TabIndicatorProps={{
                    style: { background: 'aqua'}
                }} sx={{ minWidth: '200px'}}>
                    {keys.map((name: string, index: number) => (
                        <Tab key={index} label={name} value={index.toString()} sx={styleTabLabels}/>
                    ))}
                </TabList>
                <div id='experience-listing-desc'>
                    {keys.map((name: string, index: number) => (
                        <TabPanel key={index} value={index.toString()} sx={{p: 0}}>
                            <div id='job_info'>
                                <b id='job_title'> {(JobList as any)[name].jobTitle}
                                <b> @</b> 
                                <a href={(JobList as any)[name].companyLink} style={{ color: 'aqua', textDecoration: 'none'}} >{ name }</a></b> 
                                <span id='job_timeline'> {(JobList as any)[name].timePeriod}</span>
                            </div>
                            {(JobList as any)[name].description.map((content: string, index: number) => (
                                <HeaderSection key={index} duration={1 + (index * 0.15)}>
                                    <div className='job-description'>
                                        <li>
                                            {content}
                                        </li>
                                    </div>
                                </HeaderSection>
                            ))}
                        </TabPanel>
                    ))}
                </div>
            </div>
        </TabContext>
    
    );
}

export default ExperienceListings;

