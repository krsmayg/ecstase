import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';

const Canceled = ({ history }) => {
  return (
    <Layout>
      <div className='checkout'>
        <h1>Payment failed</h1>
        <p>Payment was not successful</p>
        <div>
          <button className='basket-footer__checkout-btn' 
          onClick={() => history.push('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default withRouter(Canceled);