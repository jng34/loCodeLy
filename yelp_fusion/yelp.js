// To be deleted

const yelp = require("yelp-fusion");
const client = yelp.client(process.env.YELP_API);


const yelpSearch = async (req, res) => {
  const search = await client.search({
    term: "Four Barrel Coffee",
    location: "san francisco, ca",
  });
  res.status(200).json(search.jsonBody);
};



module.exports = yelpSearch;
