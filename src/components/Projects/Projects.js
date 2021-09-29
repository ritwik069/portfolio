import Projectcard from '../Projectcard/Projectcard'
import './Projects.css'
import {projectData} from '../../data'

function Projects() {
    return (
        <div className='project' id='project'>
            {projectData.map((p)=>(

                <Projectcard key={p.id} image={p.imgurl} lnkurl={p.lnkurl} title={p.prjTitle} desc={p.desc}/>
            ))}

        
        </div>
    )
}

export default Projects
