import React, { Component } from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, MenuButton, SubMenu, MenuSubButton, SubMenuItems, SubMenuList} from './NavbarElements';
import logo from '../../assets/logo.svg';
import {  AmplifySignOut } from '@aws-amplify/ui-react';

class Navbar extends Component{
    
    constructor(props) {
     super(props)
        this.state = {
          showMenu: false,
          loggedIn: false,
          username: this.props.user
        };
        
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

        
        console.log(this.state.username)
     
      }
      
      componentDidMount(){
       // console.log(this.state.user)
  
       if(this.state.username !== undefined){
           this.setState({loggedIn: true})
       }
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
                     Services
                 </MenuButton>
              
                 <MenuButton to="/blog">
                     Features
                 </MenuButton>
                 <MenuButton to="/company">
                     Partners
                 </MenuButton>
             </NavMenu>
             
     
            
             {this.state.loggedIn ? (
            <NavBtn>
                 <AmplifySignOut />
             </NavBtn>
             ):(
                <NavBtn>
                <NavBtnLink to="/connect">
                    Let's connect
                </NavBtnLink>
            </NavBtn>
             )}
             
       
             
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
