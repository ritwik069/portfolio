import './Portfolio.css'
import { plist } from '../../data'
import PortfolioList from '../PortfolioList/PortfolioList'
import { useEffect, useState } from 'react'
import { framework, styling, others } from '../../data'
function Portfolio() {
    const [data, setdata] = useState([]);
    const [selected, setselected] = useState('framework')
    useEffect(() => {
        switch (selected) {
            case 'framework':
                setdata(framework);
            break;
            case 'styling':
                setdata(styling);
            break;
            case 'others':
                setdata(others);
            break;

            default:
                break;
        }

    }, [selected])
    return (

        <div className="portfolio" id="portfolio">
            <h1>Technology Stack</h1>
            <ul>
                {plist.map((item) => (
                    <PortfolioList title={item.title}
                        id={item.id}
                        active={selected === item.id} setselected={setselected} />

                ))}


            </ul>
            <div className="pcontainer">
                {data.map((d)=>(

                    <div className="pitem">

                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
               
            </div>
        </div>


    )
}

export default Portfolio
