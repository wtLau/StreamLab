import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'

import './style.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <Header className="headerClass" />
        <div className="inlayout">
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;