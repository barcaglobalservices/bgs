import React, { Component } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, MenuButton, SubMenu, MenuSubButton, SubMenuItems, SubMenuList} from './NavbarElements';
import logo from '../../assets/logo.svg';

class Navbar extends Component{
    
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
    
    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true });
        
        if(this.state.showMenu){
            this.setState({ showMenu: false });
        }
      }
      
      closeMenu(event) {
        
            if(this.state.showMenu){
                this.setState({showMenu: false});
            }
          
        
      }
    render() {
    return (
        <>
         <Nav>
             <NavLink to="/">
                 <img src={logo} height="32px" alt="logo"/>
             </NavLink>
             <Bars />
             <NavMenu>
                 <MenuButton to="/about" >
                     About
                 </MenuButton>
                 <MenuSubButton onClick={this.showMenu}>
                     Services
                 </MenuSubButton>
                 <MenuButton to="/cases">
                     Cases
                 </MenuButton>
                 <MenuButton to="/company">
                     Partners
                 </MenuButton>
             </NavMenu>
             
             <NavBtn>
                 <NavBtnLink to="/connect">
                     Let's connect
                 </NavBtnLink>
             </NavBtn>
         </Nav>
         {
          this.state.showMenu
            ? (
         <SubMenu ref={(element) => {
            this.dropdownMenu = element;
          }}>
             <SubMenuList>
                        <SubMenuItems to="/services1">
                            Application Development
                        </SubMenuItems>
                        <SubMenuItems to="/services2">
                            Application Design
                        </SubMenuItems>
                        <SubMenuItems to="/services3">
                            Application Optimalisation
                        </SubMenuItems>
                     </SubMenuList>
                     
                     <SubMenuList>
                        <SubMenuItems to="/services1">
                            Warehousing
                        </SubMenuItems>
                        <SubMenuItems to="/services2">
                            Transportation
                        </SubMenuItems>
                        <SubMenuItems to="/services3">
                           Tax declaration
                        </SubMenuItems>
                     </SubMenuList>
                     <SubMenuList>
                        <SubMenuItems to="/services1">
                            Market Analysis
                        </SubMenuItems>
                         
                        <SubMenuItems to="/services2">
                            Market Advise
                        </SubMenuItems>
                        <SubMenuItems to="/services3">
                            Advertisement 
                        </SubMenuItems>
                     </SubMenuList>
                     <SubMenuList>
                        <SubMenuItems to="/services1">
                            Tender Submission 
                        </SubMenuItems>
                         
                        <SubMenuItems to="/services2">
                            Partner Connection 
                        </SubMenuItems>
                        <SubMenuItems to="/services3">
                            Product Translations 
                        </SubMenuItems>
                     </SubMenuList>
                 </SubMenu>
            ):(null)
    }
         
         </>
        
     )
    }
}


export default Navbar;
