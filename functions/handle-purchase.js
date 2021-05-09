var stripe = require("stripe");

var sgMail = require("@sendgrid/mail");

exports.handler = async ({ body, headers }) => {
  try {
    var stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;
      const items = eventObject.display_items;
      const shippingDetails = eventObject.shipping;

      const purchase = { items, shippingDetails };
      console.log(purchase);
      const msg = {
        to: process.env.FULFILLMENT_EMAIL_ADDRESS,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: `New purchase from ${shippingDetails.name}`,
        text: JSON.stringify(purchase, null, 2),
      };

      await sgMail.send(msg);
      return {
        status: 200,
        body: JSON.stringify({ recived: true }),
      };
    }
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};