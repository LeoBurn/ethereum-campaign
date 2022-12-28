import React, { Component } from 'react';
import {Form , Button , Input, Message} from 'semantic-ui-react'
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';


class ContributeForm extends Component{
    
    state = {
        value: '',
        erroMessage:'',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);

        this.setState({loading:true,erroMessage:''});

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value: web3.utils.toWei(this.state.value,'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`);

        } catch (error) {
            this.setState({erroMessage: error.message});
        }

        this.setState({loading:false, value:''});
    }

    render(){
        return(
            <Form onSubmit= {this.onSubmit} error={!!this.state.erroMessage}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input  label='ether' labelPosition='right' value={this.state.value} onChange={ event => this.setState({value: event.target.value})} />
                <Message error header="Oops!" content={this.state.erroMessage}/>
                <Button primary style={{marginTop:'10px'}} loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form.Field>
        </Form>
        );
    }
}

export default ContributeForm;