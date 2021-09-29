import kukku from '../../image/Screenshot (73).png'
import '../Projects/Projects.css'
function Projectcard({image,lnkurl,title}) {
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa dolorum deserunt, vitae, rerum in laudantium suscipit dignissimos quia cum consequatur quam nam, nisi molestiae reprehenderit. Excepturi asperiores repellat dolorum?
            </div> 
            <a href={lnkurl}>
            <button className='vewbtn'>View</button>         
                </a>
        </div>
    )
}

export default Projectcard
