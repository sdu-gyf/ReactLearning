/*
 * @Description: 左侧导航组件
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-13 18:57:31
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-13 20:06:09
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'ice';
import { Nav } from '@alifd/next';
import  AsideMenuConfig  from '../../menuConfig';

const { SubNav } = Nav;
const NavItem = Nav.Item;

export interface IMenuItem {
    name: string;
    path: string;
    icon?: string;
    children?: IMenuItem[];
}


/**
 * @name: getNavMenuItem
 * @test: 
 * @msg: 获取菜单元素
 * @param {any} menusData
 * @param {number|string} initIndex
 * @return {*} List of navItem
 */
function getNavMenuItem(menusData: any[], initIndex?: number | string) {
    if(!menusData) {
        return [];
    }

    return menusData
        .filter(item => item.name && !item.hideInMenu)
        .map((item, index) => {
            return getSubMenuOrItem(item, `${initIndex}-${index}`);
        });
}

/**
 * @name: getSubMenuOrItem
 * @test: 
 * @msg: 获取子节点或者节点元素
 * @param {IMenuItem} item
 * @param {number|string} index
 * @return {*} subNav
 */
function getSubMenuOrItem(item: IMenuItem, index?: number | string) {
    if (item.children && item.children.some(child => child.name)) {
        const childrenItems = getNavMenuItem(item.children, index);
        if (childrenItems && childrenItems.length > 0) {
            const subNav = (
                <SubNav
                    key={item.name}
                    label={item.name}
                >
                    {childrenItems}
                </SubNav>
            );
            return subNav;
        }
        return null;
    }
    const navItem = (
        <NavItem key={item.name}>
            <Link to={item.path}>
                {item.name}
            </Link>
        </NavItem>
    );
    return navItem;
}

/**
 * @name: Navigation
 * @test:
 * @msg: 
 * @param {*} props
 * @param {*} context
 * @return {*}
 */
const Navigation = (props, context) => {
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    
    const { location } = props;
    const { pathname } = location;
    const { isCollapse } = context;

    useEffect(() => {
        const curSubNav = AsideMenuConfig.find((menuConfig) => {
            return menuConfig.children && checkChildPathExists(menuConfig);
        });
        
        function checkChildPathExists(menuConfig) {
            return menuConfig.children.some(child => {
                return child.children ? checkChildPathExists(child) : child.path === pathname;
            });
        }
        if (curSubNav && !openKeys.includes(curSubNav.name)) {
            setOpenKeys([...openKeys, curSubNav.name]);
        }
    }, [pathname]);

    return (
        <Nav
            type="normal"
            openKeys={openKeys}
            selectedKeys={[pathname]}
            defaultSelectedKeys={[pathname]}
            embeddable
            activeDirection="right"
            hasArrow={false}
            mode={isCollapse ? 'popup' : 'inline'}
            onOpen={setOpenKeys}
        >
            {getNavMenuItem(AsideMenuConfig, 0)}
        </Nav>
    );
};

Navigation.contextTypes = {
    isCollapse: PropTypes.bool,
};

const PageNav = withRouter(Navigation);

export default PageNav;