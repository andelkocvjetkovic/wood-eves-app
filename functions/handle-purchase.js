const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

var sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler = async ({ body, headers }) => {
  try {
    var stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );
    if (stripeEvent.type == "charge.succeeded") {
      console.log("stripeEvent", stripeEvent.data.object.receipt_email);
      const msg = {
        to: stripeEvent.data.object.receipt_email,
        from: process.env.FROM_EMAIL_ADDRESS,
        subject: `New purchase from ${stripeEvent.data.object.description}`,
        text: "A order from Wood-Elves Shop",
        html: "<strong>Thank you for order</strong>",
      };

      await sgMail.send(msg);
      console.log("Email sent");
      return {
        statusCode: 200,
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
