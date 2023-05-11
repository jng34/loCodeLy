## LoCodely ##

An app that connects coders (users) based on their zip codes and suggests cafes & coffee shops for coding meetups


Backend Deliverables
 -Find shortest path from zip1 to zip2  ✔
 -Find all zip codes in shortest path between zip1 and zip2 ✔
 -Find an API to gather all cafes/coffee shops in specific zip codes ✔ 
 -Set up and test yelp fusion API calls ✔ 
  (Reference: https://github.com/tonybadguy/yelp-fusion#business-search)

Frontend Deliverables
-Create input (frontend) for searching zips
-Create user profile
-Create list of users in zip codes
-Allow user to add/suggest a cafe to study (submit a request for approval)


Criteria for Yelp API search:
- Good for working
- Wifi
- Seating

Return list of cafes to user
Each cafe should include:
-Name
-Address (link to Google Maps)
-URL 



Extra Deliverables
-Create visuals (dropped pins for users) on a map of Manhattan


KEEP IT SIMPLE!!!

/*
  - DB: Initialize each zipcode object with 3 cafes w/ free wifi, etc. 
  - Upon registering a user, make call to DB to grab cafes around user zipcode
  - Additionally, add to count of available users to each zip code
*/


GraphQL augmented.
-Allows for customizable querying of users, zips, and cafes


