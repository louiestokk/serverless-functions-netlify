const items = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
