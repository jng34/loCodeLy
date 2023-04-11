const zipCodeGraph = {
  10034: [10040],
  10040: [10034, 10033],
  10033: [10040, 10032],
  10032: [10034, 10033],
  10039: [10032, 10031, 10030, 10037],
  10031: [10032, 10039, 10030, 10037, 10027],
  10030: [10037, 10039, 10031, 10027, 10035],
  10037: [10030, 10039, 10031, 10027, 10035],
  10027: [10031, 10030, 10037, 10035, 10026, 10025],
  10026: ["Central Park", 10025, 10027, 10035, 10029],
  "Central park": [
    10019, 10023, 10024, 10025, 10026, 10029, 10128, 10028, 10021, 10022,
  ],
  10035: [10030, 10037, 10027, 10026, 10029],
  10025: [10027, 10026, "Central Park", 10024],
  10029: [10035, 10026, "Central Park", 10128],
  10024: [10025, "Central Park", 10023],
  10128: ["Central Park", 10029, 10028],
  10023: [10024, "Central Park", 10019],
  10028: [10128, "Central Park", 10021],
  10021: [10028, "Central Park", 10022, 10044],
  10019: [10020, 10023, 10022, 10036, "Central Park"],
  10036: [10020, 10019, 10017, 10018],
  10018: [10036, 10017, 10016, 10001],
  10001: [10018, 10016, 10010, 10011],
  10011: [10001, 10010, 10003, 10012, 10014],
  10014: [10011, 10012, 10013],
  10012: [10011, 10003, 10002, 10013, 10014],
  10013: [10014, 10012, 10002, 10038, 10007],
  10007: [10013, 10038, 10006, 10048],
  10048: [10007, 10006],
  10006: [10048, 10005, 10004],
  10004: [10006, 10005],
  10022: [10020, 10019, 10021, 10044, "Central Park"],
  10044: [10021, 10022],
  10017: [10019, 10020, 10022, 10036, 10018, 10016],
  10016: [10017, 10018, 10001, 10010],
  10010: [10016, 10001, 10011, 10003, 10009],
  10003: [10010, 10011, 10012, 10002, 10009],
  10009: [10010, 10003, 10002],
  10002: [10009, 10003, 10012, 10013, 10038],
  10038: [10002, 10013, 10007, 10006, 10005],
  10005: [10038, 10006, 10004],
  10020: [10019, 10036, 10017, 10022],
  10282: [10007, 10006, 10048, 10013],
  10280: [10006, 10007, 10048]
};

// console.log(Object.keys(zipCodeGraph).length);
// console.table(Object.keys(zipCodeGraph).sort((a,b) => a-b));

module.exports = zipCodeGraph;