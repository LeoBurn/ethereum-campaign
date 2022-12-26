import React, { Component } from "react";
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes'

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaings().call();
        return { campaigns };
    }

    async componentDidMount() {

    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                <Link route={`/campaigns/${address}`}>
                    <a>View Campaign</a>
                </Link>
                ),
                fluid: true
            }
        });
        return <Card.Group items={items} />
    }

    render() {
        return (
        <Layout>
            <div>
                <h3>Open Campaings</h3>
                <Link route= "/campaigns/new">
                    <a>
                        <Button floated="right" content = "Create Campaign" icon = "add" primary/>
                    </a>
                </Link>
                { this.renderCampaigns() }
            </div>    
        </Layout>
        );

    }
}

export default CampaignIndex;