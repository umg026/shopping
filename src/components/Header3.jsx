import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GridViewIcon from '@mui/icons-material/GridView';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header3() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">

<Navbar.Brand href="#home">
    <Dropdown className='ms-2'>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "#3BB77E", height: "45px", display: "flex", alignItems: "center" }}>
            <GridViewIcon className='me-1' />
            Browse All Categories
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Milks and Dairies</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Clothing & Beauty</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pet Foods & Toy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Baking material</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fresh Fruit</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Wines & Alcohol</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fresh Seafood</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fast food</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Vegetables</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bread and Juice</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto ms-3" style={{ fontSize: "17px", fontWeight: "500" }}>
        <Nav.Link href="#features" className="me-3 text-dark" style={{ display: "flex", alignItems: "center" }}><WhatshotIcon style={{ color: "#3BB77E", marginRight: "5px" }} /> Deals</Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Home <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a class="dropdown-item" href="#">Home 1</a></li>
                        <li><a class="dropdown-item" href="#">Home 2</a></li>
                        <li><a class="dropdown-item" href="#">Home 3</a></li>
                        <li><a class="dropdown-item" href="#">Home 4</a></li>
                        <li><a class="dropdown-item" href="#">Home 5</a></li>
                        <li><a class="dropdown-item" href="#">Home 6</a></li>
                    </ul>
                </span>
            </span>
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">About</Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Shop  <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a class="dropdown-item" href="#!">Shop Grid - Right Sidebar</a></li>
                        <li><a class="dropdown-item" href="#!">Shop Grid - Left Sidebar</a></li>
                        <li><a class="dropdown-item" href="#!">Shop List - Right Sidebar</a></li>
                        <li><a class="dropdown-item" href="#!">Shop List - Left Sidebar</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Wide</a></li>
                        <li><a class="dropdown-item" href="#!">Shop Product</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Filter</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Wishlist</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Cart</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Checkout</a></li>
                        <li><a class="dropdown-item" href="#!">Shop - Compare</a></li>
                        <li><a class="dropdown-item" href="#!">Shop Invoice</a></li>
                    </ul>
                </span>
            </span>
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Vendors <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a class="dropdown-item" href="#!">Vendors Grid</a></li>
                        <li><a class="dropdown-item" href="#!">Vendors List</a></li>
                        <li><a class="dropdown-item" href="#!">Vendors Details 01</a></li>
                        <li><a class="dropdown-item" href="#!">Vendors Details 02</a></li>
                        <li><a class="dropdown-item" href="#!">Vendors Deshboard</a></li>
                        <li><a class="dropdown-item" href="#!">Vendors Guide</a></li>
                    </ul>
                </span>
            </span>
            </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Mega menu <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown" style={{ marginLeft :  "-600px"}} >
                        <div className='d-flex'>
                        <ul style={{listStyle : "none",marginTop: "40px"}} >
                          <li> <h5 style={{color:"#3BB77E"}}>Fruit & Vegetables</h5></li> 
                        <li><a class="dropdown-item" href="#!">Meat & Poultry</a></li>
                        <li><a class="dropdown-item" href="#!">Fresh Vegetables</a></li>
                        <li><a class="dropdown-item" href="#!">Herbs & Seasonings</a></li>
                        <li><a class="dropdown-item" href="#!">Cuts &  Sprouts</a></li>
                        <li><a class="dropdown-item" href="#!">Exotic Fruits & Veggies</a></li>
                        <li><a class="dropdown-item" href="#!">Packaged Produce</a></li>
                        </ul>
                        <ul style={{listStyle : "none",marginTop: "40px"}}>
                        <li> <h5 style={{color:"#3BB77E"}}>Breackfast & Dairy</h5></li> 
                        <li><a class="dropdown-item" href="#!">Milk & Flavoured Milk</a></li>
                        <li><a class="dropdown-item" href="#!">Butter and  Margarine</a></li>
                        <li><a class="dropdown-item" href="#!">Eggs Substitutes</a></li>
                        <li><a class="dropdown-item" href="#!">Marmalades</a></li>
                        <li><a class="dropdown-item" href="#!">Sour Cream</a></li>
                        <li><a class="dropdown-item" href="#!">Cheese</a></li>
                        </ul>
                        <ul style={{listStyle : "none",marginTop: "40px"}}>
                        <li> <h5 style={{color:"#3BB77E"}}>Meat & Seafood</h5></li> 
                        <li><a class="dropdown-item" href="#!">Breackfast Sausage</a></li>
                        <li><a class="dropdown-item" href="#!">Dinner Sausage</a></li>
                        <li><a class="dropdown-item" href="#!">Chicken</a></li>
                        <li><a class="dropdown-item" href="#!">Sliced Deli Meat</a></li>
                        <li><a class="dropdown-item" href="#!">Wild Caught Fillets</a></li>
                        <li><a class="dropdown-item" href="#!">Crab and Shellfish </a></li>
                        </ul>
                        <ul><img src="https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-menu.png" alt=""/></ul>
                        </div>
                    </ul>
                </span>
            </span>
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Blog <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a class="dropdown-item" href="#!">Blog Category Grid</a></li>
                        <li><a class="dropdown-item" href="#!">Blog Category List</a></li>
                        <li><a class="dropdown-item" href="#!">Blog Category Big</a></li>
                        <li><a class="dropdown-item" href="#!">Blog Category Wide</a></li>
                        <li><a class="dropdown-item" href="#!">Single post </a></li>
                    </ul>
                </span>
            </span>
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">
            <span class=" navbar-expand-md  bsb-navbar bsb-navbar-hover ">
                <span class="nav-item dropdown">
                    Pages <KeyboardArrowDownIcon style={{ color: "grey" }} />
                    <ul class="dropdown-menu border-0 shadow bsb-zoomIn" aria-labelledby="accountDropdown">
                        <li><a class="dropdown-item" href="#!">About Us</a></li>
                        <li><a class="dropdown-item" href="#!">Contact</a></li>
                        <li><a class="dropdown-item" href="#!">My Account</a></li>
                        <li><a class="dropdown-item" href="#!">Login</a></li>
                        <li><a class="dropdown-item" href="#!">Register</a></li>
                        <li><a class="dropdown-item" href="#!">Forgot Password</a></li>
                        <li><a class="dropdown-item" href="#!">Reset Password</a></li>
                        <li><a class="dropdown-item" href="#!">Purchase Guide</a></li>
                        <li><a class="dropdown-item" href="#!">Privacy Policy</a></li>
                        <li><a class="dropdown-item" href="#!">Terms of Service</a></li>
                        <li><a class="dropdown-item" href="#!">404 Page</a></li>
                    </ul>
                </span>
            </span>
        </Nav.Link>
        <Nav.Link href="#pricing" className="me-3 text-dark">Contact</Nav.Link>

    </Nav>
    <Nav>
        <Nav.Link href="#deets">
            <HeadsetMicIcon style={{ fontSize: "30px", marginTop: "10px" }} />
        </Nav.Link>
        <Nav.Link eventKey={2} href="#memes" style={{ fontSize: "15px", color: "#3BB77E", fontWeight: "600" }}>
            1900 - 888
            <p style={{ fontSize: "9px", color: "grey", fontWeight: "300", }} >24/7 Support Center</p>
        </Nav.Link>
    </Nav>
</Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Header3