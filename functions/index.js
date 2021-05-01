const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};
exports.handler = async (event, context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
    };
  }
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "Invalid http method",
      }),
    };
  }
  const data = JSON.parse(event.body);
  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.");

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "Missing information",
      }),
    };
  }
  try {
    await stripe.customers
      .create({
        email: data.stripeEmail,
        source: data.stripeToken,
      })
      .then((customer) => {
        console.log(
          `starting the charges, amt: ${data.stripeAmt}, email: ${data.stripeEmail}`
        );
        return stripe.charges
          .create(
            {
              currency: "usd",
              amount: data.stripeAmt,
              receipt_email: data.stripeEmail,
              description: "Order from store",
              customer: customer.id,
            },
            {
              idempotencyKey: data.stripeIdempotency,
            }
          )
          .then((result) => {
            return {
              statusCode: 200,
              headers,
              body: JSON.stringify({
                data: result,
              }),
            };
          });
      });
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err,
      }),
    };
  }
};
