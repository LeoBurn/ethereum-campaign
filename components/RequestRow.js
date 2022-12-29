import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RequestRow extends Component{


    render(){

        const { Row, Cell } = Table;
        const { id , request } = this.props;

        return (
            <Row>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell></Cell>
            </Row>
        );
    }
}

export default RequestRow;