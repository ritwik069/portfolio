import './intro.css'
import kukku from '../../image/kukku.png'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'
function Intro() {
    const textref=useRef();
    useEffect(() => {
        init(textref.current,{
            showCursor:true,
            backDelay:1000,
            backSpeed:60,
            strings:['Software Developer','React.JS Developer','Freelancer',]
        }
            );
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgcontainer">
                    <img src={kukku} alt="" />
                </div>

            </div>
            <div className="right">
                <div className="Introwrapper">

                    <h2>Hi,I am</h2>
                    <h1>Ritwik Singh Yadav</h1>
                    <h3><span ref={textref}></span></h3>
                </div>
                <a href='#portfolio'>Scroll Down</a>

            </div>
        </div>
    )
}

export default Intro
