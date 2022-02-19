require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_KEY })
  .base("appyah89ZWdt2SWXH")
  .table("products");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { name, images, price } = product.fields;
      const url = images[0].url;
      return { id, name, url, price };
    });
    console.log(records);
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "error",
    };
  }
};
