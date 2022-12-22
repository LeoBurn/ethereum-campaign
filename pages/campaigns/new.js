import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input } from 'semantic-ui-react';

class CampaignNew extends Component{
    render(){
        return(
            <Layout>
                <h2>Create a Campaign</h2>
                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label='wei' labelPosition='right'/>
                    </Form.Field>
                    <Button primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;