import './Topbar.css'

function Topbar({menu,setmenu}) {
    return (
        <div className={"topbar "+(menu && "--tbactive")} id="topbar">

            <div className="wrapper">
                <a href='#intro' style={{ textDecoration: 'none' }}>
                    <div className={"logo "+(menu && "--lgactive")}>

                        Ritwik
                    </div>
                </a>
                <div className={"hamburger "+(menu && "hamActive")} onClick={()=>setmenu(!menu)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
