require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
  .base("appyah89ZWdt2SWXH")
  .table("products");

exports.handler = async (event) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `no product with ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: `server error`,
      };
    }
  }
  return {
    statusCode: 400,
    body: "please provide product id",
  };
};
