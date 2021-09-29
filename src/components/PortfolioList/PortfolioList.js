

function PortfolioList({id,title ,active ,setselected}) {
    return (
            <li className={active?'liActive':''} onClick={()=>setselected(id)}>
                {title}

            </li>
    )
}

export default PortfolioList
