import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import ContributeForm from '../../components/ContributeForm';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The Manager created this Campaign and can create requests to withdraw funds',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (Wei)',
        description:
          'You must contribute this much wei to be able to approve Spending Requests'
      },
      {
        header: requestsCount,
        meta: 'Number of Spending Requests',
        description:
          'A Spending Request tries to withdraw money from the contract. Requests must be approved by approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated, and are allowed to approve spending requests'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Budget Balance (Ether)',
        description:
          'The balance is how much money this budget has left to spend'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Budget View</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Spending Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
