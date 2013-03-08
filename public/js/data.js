var create_project = function(name, short_desc, long_desc, goal, categories, year, state, url, team, location, municipality) {
  var project = new Array();
  project['name'] = name;
  project['short_desc'] = short_desc;
  project['long_desc'] = long_desc;
  project['goal'] = goal;
  project['categories'] = categories;
  project['year'] = year;
  project['team'] = team
  project['location'] = location
  project['municipality'] = municipality

  return project;
};

var locations

var projects = [
  create_project("Two Bridges Neighborhood Council",
  "Food Access Guide to local fresh food related businesses",
  "As developers of affordable housing and advocates for all residents and merchants in the culturally diverse and economically challenged neighborhoods of the Lower East Side, they offer community-based programs and strategic partnerships.",
  "After the closing of a local supermarket, the community needs visual design services for their Food Access Guide to local fresh food related businesses. The guide will be categorized by price, benefits acceptance, offerings, in the form of a multi-language free handout with an online component.",
  ["neighborhood revitalization", "social/economic justice"],
  2013,
  "future",
  "http://www.chscc.org",
  {
    nonprofit: ["Central Harlem Senior Citizens’ Council – Harlem, Manhattan"],
    design_partner: ["Alison Duncan, Landscape Architect"],
    advisors: ["Rob Goodwin", "Perkins + Will"]
  },
  "34 W 134th St  New York, NY 10037",
  "municipality"
  ),

  create_project("Weeksville Heritage Center",
  "",
  "Set in Bedford-Stuyvesant, Brooklyn  the Weeksville Heritage Center is a multi-dimensional museum dedicated to preserving the history of what was once a vibrant 19th century community of free African-Americans.",
  "They need an interior design strategy for the newly restored historic garage, that will feature interpretive displays about green educational programs, a storage area for their gardening and farmers market-related activities, including a heirloom seed collection and an aquaponics demonstration area.",
  ["arts/community", "urban farming + food"],
  2013,
  "future",
  "http://www.weeksvillesociety.org",
  {
    nonprofit: ["Weeksville Heritage Center"],
    design_partner: ["Matiz Architecture & Design (MAD)"],
    advisors: ["Rob Goodwin", "Perkins + Will"]
  },
  "1698 Bergen St  Brooklyn, NY 11213",
  "municipality"
  )
];
