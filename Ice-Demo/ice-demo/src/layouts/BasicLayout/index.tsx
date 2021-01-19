/*
 * @Description: BasicLayout
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-13 18:55:50
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 09:39:11
 */
import React from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';

export default function BasicLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <ConfigProvider>
            <Shell
                style={{
                    minHeight: '100vh',
                }}
                type="brand"
                fixedHeader={false}
            >
                <Shell.Navigation>
                    <PageNav />
                </Shell.Navigation>
                <Shell.Content>{children}</Shell.Content>
            </Shell>
        </ConfigProvider>
    )
}