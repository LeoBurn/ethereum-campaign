import React,{Component} from "react";
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header'

class Layout extends Component{


    render(){
        return(
            <Container>
                <Header/>
                { this.props.children }
            </Container>
        );
    }
}

export default Layout;