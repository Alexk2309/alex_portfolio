import '../styles/techStack.css';
import HeaderSection from '../effects/scrollEffect';



function TechStack() {
  return (
    <>
    <HeaderSection>
        <div className='tech_layout'>
            <li className='tech_items'> TypeScript </li>
            <li className='tech_items'> Java </li>
            <li className='tech_items'> Python </li>
            <li className='tech_items'> C </li>
        </div>
    </HeaderSection>

    <HeaderSection>
        <div className='tech_layout'>
            <li className='tech_items'> Git </li>
            <li className='tech_items'> HTML </li>
            <li className='tech_items'> CSS </li>
            <li className='tech_items'> React </li>
        </div>
    </HeaderSection>
    
    <HeaderSection>
        <div className='tech_layout'>
            <li className='tech_items'> Django </li>
            <li className='tech_items'> Express.js </li>
            <li className='tech_items'> Node.js </li>
            <li className='tech_items'> SQL </li>
        </div>
    </HeaderSection>
    </>
  );
}
export default TechStack;

