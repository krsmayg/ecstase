const stripe =  require('stripe')(process.env.STRIPE_SECRET_KEY);
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const  domainUrl = process.env.WEB_APP_URL; 
  const {line_items, customer_email} = req.body;
  //check req body has line items and email
  if(!line_items || !customer_email) {
    return next(new AppError('missing required session parameters ', 404));
  };
  
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items,
    customer_email,
    success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainUrl}/canceled`,
    shipping_address_collection: {allowed_countries: ['UA']}
  });
  res.status(200).json({sessionId: session.id});
});