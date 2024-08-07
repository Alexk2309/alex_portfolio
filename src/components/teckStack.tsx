import '../styles/techStack.css';
import HeaderSection from '../effects/scrollEffect';

const techStackList = {
    programmingLanguages: ['TypeScript', 'Java', 'Python', 'C', 'C++',],
    markUpLanguages: ['Git', 'HTML', 'CSS', 'React.js', 'Tailwind.css' ],
    frameWorks: ['Django', 'Express.js', 'Node.js', 'SQL', 'AWS',],
}

function TechStack() {
  return (
    <>
    <div>
        {Object.keys(techStackList).map((tech: any, index: number) => (
            <HeaderSection duration={1.5 + (index * 0.5)} key={tech}>
                <div className='tech_item'>
                    {(techStackList as any )[tech].map((language: string, index: number) => (
                    <li className='tech_item' style={{listStyleType: 'none'}} key={index}>{language}</li>
                    ))}
                </div>
            </HeaderSection>
        ))}
    </div>
    </>
  );
}

export default TechStack;

