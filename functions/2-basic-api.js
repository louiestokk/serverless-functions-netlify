const items = require("../assets/data");

exports.handler = async (event, context) => {
  console.log(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
