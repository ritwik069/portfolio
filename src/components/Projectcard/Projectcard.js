import kukku from '../../image/Screenshot (73).png'
import '../Projects/Projects.css'
function Projectcard({image,lnkurl,title,desc}) {
    return (
        <div className='projectCard'>
            <div className="cardimg">
                <img src={image} alt="" />

            </div>
            <div className="cardtitle">
                <h2>{title}</h2>
            </div>  
            <div className="desc">
                <span><strong>Description</strong> :</span>
            {desc}
            </div> 
            <a href={lnkurl}>
            <button className='vewbtn'>View</button>         
                </a>
        </div>
    )
}

export default Projectcard
