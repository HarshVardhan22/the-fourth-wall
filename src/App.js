import React, { useState } from 'react';
import ReactDom from "react";
import logo from "./logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from 'reactstrap';

import { FaShoppingCart } from 'react-icons/fa';

import { BsSearch } from 'react-icons/bs';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
 const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div>
    {/* //***********NAVBAR********************* */}
    <div className = "bg1">
       <Container className = "container">
       <Navbar className="nav-color" light expand="md" fixed="top">
        
        <NavbarBrand href="/"> <img src={logo} alt="" width = "60px" height = "60px"/></NavbarBrand>
        
        <NavbarToggler onClick={toggle} className = "text"/>
        
        <Collapse isOpen={isOpen} navbar className = "text"> 
       
          <Nav className = "ml-auto" navbar>

            <div style = {{ marginLeft : "20px"}}>
               <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret className = "text">
                    SPACE DECOR
                  </DropdownToggle>
                      <DropdownMenu right>
                          <DropdownItem  >
                            FOYER
                          </DropdownItem>
                          <DropdownItem  >
                            LIVING 
                          </DropdownItem>
                          <DropdownItem  >
                            DINING
                          </DropdownItem>
                          <DropdownItem  >
                            MY CORNER
                          </DropdownItem>
                      </DropdownMenu>
               </UncontrolledDropdown>
            </div> 

            <div style = {{ marginLeft : "20px"}}> 
            <NavItem>
               <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret  className = "text">
                FURNITURE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  FOOTREST
                </DropdownItem>
                <DropdownItem >
                  COFFEE TABLES
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
             </div> 

             <div style = {{marginLeft: "20px"}}>
            <NavItem>
              <NavLink href="/"  className = "text">HOME</NavLink>
            </NavItem>
            </div>

            <div style = {{marginLeft: "20px"}}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret  className = "text">
                SAMPLE
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  PRODUCT 1
                </DropdownItem>
                <DropdownItem>
                  PRODUCT 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </div>

            <div style = {{marginLeft: "20px"}}>
              <NavItem>
                <NavLink href="/"  className = "text">ABOUT</NavLink>
              </NavItem>
            </div> 

          <div style = {{marginLeft: "20px"}}>
            <NavItem>
              <NavLink href=""  className = "text">CONTACT US</NavLink>
            </NavItem>
          </div>

          <div style = {{marginLeft: "20px"}}>
            <NavItem>
              <NavLink href="/"  className = "text"><BsSearch/></NavLink>
            </NavItem>
          </div>

          <div style = {{marginLeft: "20px"}}>
            <NavItem>
              <NavLink href="/"  className = "text"><FaShoppingCart/></NavLink>
            </NavItem>
          </div>
        
          </Nav>
          
        </Collapse>
  
      </Navbar> 

      {/* ******WELCOME MESSAGE */}

      <div className="welcomeContainer">
        <h1 className = "welcomeMsg">Welcome aboard!</h1>
        <h6 className = "welcomeMsg2">Bridging the gap between vintage and modern.</h6>
        <button className = "welcomeBtn">Button 1</button>
      </div>
     </Container>
    </div>


    <div className="bg2">
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
      <div className="new">fff*20</div>
    </div>
    </div>
  );
  
}

export default App;
