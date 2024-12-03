import React,{useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

import SearchBox from "../SearchBox";
import { CiLight } from "react-icons/ci";

import { FaRegBell } from "react-icons/fa";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaShieldAlt } from "react-icons/fa";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';
import { useContext } from 'react';



const Header = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const open = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const context = useContext(MyContext);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenotificationsDrop = () => {
        setisOpennotificationDrop(true)
    }

    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false)
    }
    return (
        <>
            <header className="d-flex allign-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex allign-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex allign-items-center logo">
                                <img src={logo} />
                                <span className="ml-2">AHILTECH</span>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex allign-items-center part2">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar===false ? <MdMenuOpen /> : <MdOutlineMenu/>
                                }
                            </Button>
                            <SearchBox/>
                        </div>
                        <div className="col-sm-7 d-flex allign-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3">
                                <CiLight style={{ color: 'black'}} size={18} onClick={()=>context.setThemeMode(!context.themeMode)}/>
                            </Button>
                            <div className='dropdownWrapper position-relative'>
                                <Button className="rounded-circle mr-3" onClick={handleOpenotificationsDrop}><FaRegBell style={{ color: 'black', marginTop: '10px' }} size={18}/></Button>
                                <Menu 
                                    anchorEl={isOpennotificationDrop} 
                                    className='notifications dropdown_list' 
                                    id="notifications" 
                                    open={openNotifications} 
                                    onClose={handleClosenotificationsDrop} 
                                    onClick={handleClosenotificationsDrop} 
                                    transformOrigin={{ horizontal: 'left', vertical: 'top' }} 
                                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                                >
                                    <div className='head pl-3 pb-2'>
                                        <h4> Notifications (34) </h4>
                                    </div>

                                    <Divider className="mb-1"/>
                                    <div className="scroll">
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                        <MenuItem onClick={handleClosenotificationsDrop}>
                                            <div className="d-flex">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='dropdownInfo'>
                                                    <h4>
                                                        <span>
                                                            <b>Mahabul</b> 
                                                            added to his favorite list 
                                                            <b>Leather belt steav Madain</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>    
                                        </MenuItem>
                                    </div>
                                    <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                                        <Button className='btn-blue w-100'>View All Notification</Button>
                                    </div>
                                </Menu>
                            </div>
                                {
                                    context.isLogin!==true ? <Link to={'/login'}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link> : 
                                    <div className="myAccWrapper">
                                        <Button className="myAcc d-flex allign-items-center" onClick={handleClick}>
                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>    
                                                </span>
                                            </div>
                                            <div className="userInfo">
                                                <h4>Babua Mondal</h4>
                                                <p className="mb-0">@ahiltech.in</p>
                                            </div>
                                        </Button>
                                        <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <FaShieldAlt fontSize="small" />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;