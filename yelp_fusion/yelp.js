// To be deleted
const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API);


const businessSearch = async (req, res) => {
  const data = await client.search({
    term: "good for working",
    location: "10002",
    attributes: "cafes",
    limit: 5,
  });
  res.status(200).json(data.jsonBody);
};


module.exports = businessSearch;
