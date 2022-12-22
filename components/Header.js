import React,{Component} from "react";
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Header extends Component{

    render(){
        return(
            <Menu style={{marginTop:'10px'}}>
                <Menu.Item>CrowdCrypto</Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>Campaings</Menu.Item>
                    <Menu.Item>+</Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default Header;