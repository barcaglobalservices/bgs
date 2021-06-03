import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #FFF;
    
    display: flex;
    justify-content: space-between;
    //padding: 0.5rem calc((100cw - 1000px)/2);
    z-index: 10;
    padding-left: 48px;
    padding-right: 48px;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2.5rem;
    margin: 1rem;
    height: 100%;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;

    &.active{
        color: #004;

    }

`
export const MenuSubButton = styled.div`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #004;

    }
    
    &:hover{
        padding-top: 2px;
        border-bottom: 2px solid #000;
    }
`

export const MenuButton = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    margin: 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color: #004;
    }
    
    &:hover{
        padding-top: 2px;
        border-bottom: 2px solid #000;
    }
`
export const SubMenu = styled.div`
   transition: all 5s ease;
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.5rem 2rem;
    padding-top: 1.5rem;
    height: 100%;
    border-top: 1px solid rgb(111,111,111, 0.50);
    cursor: pointer;

    &.active{
        color: #004;
    }
    
    ul{
        padding: 0 4rem;
    }
   
`
export const SubMenuList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 3rem;

`

export const SubMenuItems = styled(Link)`
    padding: 1rem;
        text-decoration: none;
        list-style: none;
        color: rgb(111,111,111);
        
        &:hover{
            color: #000;
            transition: all .7s ease-out;
            text-decoration: underline;
        }
`

export const Bars = styled(FaBars)`
display:none;
color: #fff;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
  
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #fff;
padding: 8px 22px;
border-radius: 20px;
border: 1px solid #000;
outline: none;
color: #000;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{   
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff; 
}
`
