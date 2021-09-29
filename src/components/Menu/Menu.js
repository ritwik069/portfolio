import './Menu.css'
function Menu({menu,setmenu}) {
    return (
        <div className={'menu '+(menu && 'menuActive')}>
            <ul>
                <li onClick={()=>{setmenu(false)}}>
                    <a href="#intro">
                        Home
                    </a>
                </li>
                <li onClick={()=>{setmenu(false)}}>
                    <a href="#portfolio">
                        Technology
                    </a>
                </li>
                <li onClick={()=>{setmenu(false)}}>
                    <a href="#project">
                        Project
                    </a>
                </li>
                <li onClick={()=>{setmenu(false)}}>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default Menu
