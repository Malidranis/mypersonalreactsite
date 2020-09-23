import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

import './App.css';

import Main from './components/Main';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
            to="/">The Mike</Link>} scroll>
            <Navigation>                
                <Link to="/about"><p className="link-color">About</p></Link>
                <Link to="/resume"><p className="link-color">Resume</p></Link>
                <Link to="/projects"><p className="link-color">My Projects</p></Link>
                <Link to="/contact"><p className="link-color">Contact</p></Link>
            </Navigation>
        </Header>
        <Drawer title="The Mike">
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
