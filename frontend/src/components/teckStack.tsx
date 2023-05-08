import '../styles/techStack.css';
import HeaderSection from '../effects/scrollEffect';

const techStackList = {
    programmingLanguages: ['TypeScript', 'Java', 'Python', 'C'],
    markUpLanguages: ['Git', 'HTML', 'CSS', 'React.js'],
    frameWorks: ['Django', 'Express.js', 'Node.js', 'SQL']
}

function TechStack() {
  return (
    <>
    {Object.keys(techStackList).map((tech: any, index: number) => (
        <HeaderSection duration={1.5 + (index * 0.5)} key={tech}>
        <div className='tech_layout'>
            {(techStackList as any )[tech].map((language: string, index: number) => (
            <li className='tech_items' key={index}>{language}</li>
            ))}
        </div>
        </HeaderSection>
    ))}
    </>
  );
}

export default TechStack;

