import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';


const Success = ({ history }) => {
  return (
    <Layout>
      <div className='checkout'>
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and 
          will send you a confirmation email shortly
        </p>
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

export default withRouter(Success);