import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { useState, useContext } from 'react';
import { MyContext } from '../../App';


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    
    const context = useContext(MyContext);

    const isOpenSubmenu = (tabIndex)=> {
        setIsToggleSubmenu(!isToggleSubmenu);
        setActiveTab(tabIndex);
    }
    
    return(
        <>
            <div className="sidebar">
                <ul>
                   <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li> 
                    <li>
                        <Button className={`w-100 ${activeTab===1 && isToggleSubmenu==true ? 'active':''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            Products
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu==true ? 'colapse' : 'colapsed'}`}>
                            <ul className="submenu">
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product View</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===2 ? 'active':''}`} onClick={()=>isOpenSubmenu(2)}>
                                <span className='icon'><IoCartOutline /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===3 ? 'active':''}`} onClick={()=>isOpenSubmenu(3)}>
                                <span className='icon'><MdMessage /></span>
                                Message
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===4 ? 'active':''}`} onClick={()=>isOpenSubmenu(4)}>
                                <span className='icon'><FaBell /></span>
                                Notification
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===5 ? 'active':''}`} onClick={()=>isOpenSubmenu(5)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===6 ? 'active':''}`} onClick={()=>isOpenSubmenu(6)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li> 
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===7 ? 'active':''}`} onClick={()=>isOpenSubmenu(7)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===8 ? 'active':''}`} onClick={()=>isOpenSubmenu(8)}>
                                <span className='icon'><IoCartOutline /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===9 ? 'active':''}`} onClick={()=>isOpenSubmenu(9)}>
                                <span className='icon'><MdMessage /></span>
                                Message
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===10 ? 'active':''}`} onClick={()=>isOpenSubmenu(10)}>
                                <span className='icon'><FaBell /></span>
                                Notification
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===11 ? 'active':''}`} onClick={()=>isOpenSubmenu(11)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===12 ? 'active':''}`} onClick={()=>isOpenSubmenu(12)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li> 
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===13 ? 'active':''}`} onClick={()=>isOpenSubmenu(13)}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===14 ? 'active':''}`} onClick={()=>isOpenSubmenu(14)}>
                                <span className='icon'><IoCartOutline /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===15 ? 'active':''}`} onClick={()=>isOpenSubmenu(15)}>
                                <span className='icon'><MdMessage /></span>
                                Message
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===16 ? 'active':''}`} onClick={()=>isOpenSubmenu(16)}>
                                <span className='icon'><FaBell /></span>
                                Notification
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <Button className={`w-100 ${activeTab===17 ? 'active':''}`} onClick={()=>isOpenSubmenu(17)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;