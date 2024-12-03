import { IoCartSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineStarRate } from "react-icons/md";
import DashboardBox from "./components/dashboardbox";
import Menu from '@mui/material/Menu';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";

import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';

import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
  export const options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };


const Dashboard = () =>{

    const [anchorEl, setAnchorEl] = useState(null);

    const [showBy, setshowBy] = useState('');
    const [catBy, setcatBy] = useState('');
    const [brandBy, setbrandBy] = useState('');
    const [searchBy, setsearchBy] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setshowBy(event.target.value);
        setcatBy(event.target.value);
        brandBy(event.target.value);
        searchBy(event.target.value);
    };

    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
           <div className="right-content w-100">
                <div className="card shadow border-0 p-3 mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="hd">Ecommerce</h3>
                        </div>
                    </div>
                    
                </div>
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#4eda89","#1a9f53"]} icon={<FaUserCircle/>} grow={true}/>
                            <DashboardBox color={["#ed68ff","#be0ee1"]} icon={<IoCartSharp/>}/>
                            <DashboardBox color={["#64b3f6","#2b77e5"]} icon={<AiOutlineProduct/>}/>
                            <DashboardBox color={["#f4d02b","#e1940e"]} icon={<MdOutlineStarRate/>}/>                           
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0">Total Sales</h6>  
                                <div className="ml-auto">
                                    <Button className="ml-auto toggleIcon"  onClick={handleClick}><HiDotsVertical/></Button>    
                                    <Menu
                                        className="dropdown_menu"
                                        MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                        paper: {
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                        },
                                        }}
                                    >
                                    
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer/> Last Day
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer/> Last Week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer/> Last Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer/> Last Year
                                        </MenuItem>
                                    
                                    </Menu>      
                                </div>
                                
                            </div>
                            <h4 className="text-white font-weight-bold">$3,787,681.00</h4>
                            <p>$3,578.90 in last month</p>
                            <Chart
                                chartType="AreaChart"
                                width="100%"
                                data={data}
                            />
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best selling products</h3>
                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={catBy}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={brandBy}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={searchBy}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="table-responsive mt-3">
                        <table className="table table-bordered v-align">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALE</th>
                                    <th>ACTION</th> 
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#2</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#3</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#4</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#6</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#7</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#8</td>
                                    <td>
                                        <div className="d-flex align-items-center productBox">
                                            <div className="imgWrapper">
                                                <div className="img">
                                                    <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100"/>
                                                </div>
                                            </div>
                                            <div className="info pl-0">
                                                <h6>Tops and skirt set for Female</h6>
                                                <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>womans</td>
                                    <td>richman</td>
                                    <td>
                                        <del className="old">$20.00</del>
                                        <span className="new text-danger">$19.00</span>
                                    </td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$38k</td>
                                    <td>
                                        <div className="actions d-flex align-items-center">
                                            <Button className="secondary" color="secondary"><FaEye/></Button>
                                            <Button className="success" color="success"><FaPencilAlt/></Button>
                                            <Button className="error" color="error"><MdDelete/></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                        <div class="d-flex tableFooter">
                            <p>showing <b>10</b> of <b>60</b> results</p>
                            <Pagination count={10} variant="outlined" shape="rounded" className="pagignation" showFirstButton showLastButton/>
                        </div>
                    </div>                    
                </div>
           </div>
        </>
    )
}

export default Dashboard;