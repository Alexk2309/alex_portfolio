import '../styles/experience.css';
import HeaderSection from '../effects/scrollEffect';
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



interface jobPosting {
    jobTitle: string;
    timePeriod: string;
    description: string[];
}

function ExperienceList() {

    const [value, setValue] = React.useState('0');
    const handleChange = (event: any, newValue: string) => {
        setValue(newValue);
    };
    
    const JobList: Record<string, jobPosting> = {

        Demo:  {
            jobTitle: 'programing god',
            timePeriod: '1922 - 2004',
            
            description: ['This is a demo with ', 'dot pointts', 'used react to make really cool websites']
        },
        Demo2: {
            jobTitle: 'programing nerd',
            timePeriod: '1922 - 2004',
            description: ['next demo', 'programming space ships', 'lost my pieces']
        }
    }

    const keys: string[] =  Object.keys(JobList);
    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', flexDirection: 'row'  }}>
                <TabList onChange={handleChange} orientation='vertical'>
                    {keys.map((name: string, index: number) => (
                        <Tab label={name} value={index.toString()} sx={{color: 'white'}}/>
                    ))}
                </TabList>
                <div style={{ marginLeft: '100px' }}>
        
                    {keys.map((name: string, index: number) => (
                        <TabPanel value={index.toString()} sx={{p: 0}}>
                            <div style={{paddingBottom: '17px'}}>
                                {(JobList as any)[name].jobTitle} {(JobList as any)[name].timePeriod} @{ name }
                            </div>
                            {(JobList as any)[name].description.map((content: string, index: number) => (
                                <HeaderSection duration={1 + (index * 0.25)}>
                                    <div style={{paddingBottom: '17px' }}>
                                        <li>
                                            {content}
                                        </li>
                                    </div>
                                </HeaderSection>
                            ))}
                        </TabPanel>
                    ))}
                </div>
            </Box>
        </TabContext>
    
    );
}

export default ExperienceList;

