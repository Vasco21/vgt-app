import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from './sidebarItems';


type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.8rem;
    font-weight:550;
    padding: 3rem;
    text-decoration: none;
    color:  black;
    &:hover {
        background-color: pink;
        border-left: 4px solid #6d44dc;
    }
    @media (max-width: 350px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.75rem;
        font-size: 1.7rem;
        padding: 2rem;
        text-decoration: none;
        color: black;
        &:hover {
            background-color: pink;
            border-left: 4px solid #6d44dc;
    }
    @media (max-width: 750px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.75rem;
        font-size: 1.125rem;
        padding: 2rem;
        text-decoration: none;
        color: black;
        &:hover {
            background-color: pink;
            border-left: 4px solid #6d44dc;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.6rem;
    font-weight:550;
    padding-left: 3.5rem;
    text-decoration: none;
    color: black;
    &:hover {
    background-color: pink;
    }
    @media (max-width: 350px){
        display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.6rem;
    padding-left: 3rem;
    text-decoration: none;
    color: black;
    &:hover {
    background-color: pink;
    }
    @media (max-width: 750px){
        display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: black;
    &:hover {
    background-color: pink;
    }
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};
export default Submenu;