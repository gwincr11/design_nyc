var create_project = function(id, name, short_desc, long_desc, goal, categories, year, state, url, team, location, municipality) {
  var project = new Array();
  project['id'] = id;
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

var projects = [
  create_project(1, "Two Bridges Neighborhood Council",
  "Food Access Guide to local fresh food related businesses",
  "As developers of affordable housing and advocates for all residents and merchants in the culturally diverse and economically challenged neighborhoods of the Lower East Side, they offer community-based programs and strategic partnerships.",
  "After the closing of a local supermarket, the community needs visual design services for their Food Access Guide to local fresh food related businesses. The guide will be categorized by price, benefits acceptance, offerings, in the form of a multi-language free handout with an online component.",
  ["Neighborhood Revitalization", "Social/Economic Justice"],
  2013,
  "future",
  "http://www.chscc.org",
  {
    nonprofit: ["Central Harlem Senior Citizens’ Council – Harlem, Manhattan"],
    design_partner: ["Alison Duncan, Landscape Architect"],
    advisors: ["Rob Goodwin", "Perkins + Will"]
  },
  "34 W 134th St  New York, NY 10037",
  "Manhattan"
  ),

  create_project(2, "Weeksville Heritage Center", 
  "A center for a seed library and green curriculum activities", 
  "Set in Bedford-Stuyvesant, Brooklyn the Weeksville Heritage Center is a multi-dimensional museum dedicated to preserving the history of what was once a vibrant 19th century community of free African-Americans.",
  "They need an interior design strategy for the newly restored historic garage, that will feature interpretive displays about green educational programs, a storage area for their gardening and farmers market-related activities, including a heirloom seed collection and an aquaponics demonstration area.", 
  ["Arts/Community", "Urban Farming + Food"], 
  2013, 
  "future", 
  "http://www.weeksvillesociety.org", 
  { 
    nonprofit: ["Weeksville Heritage Center"],
    design_partner: ["Matiz Architecture & Design (MAD)"],
    advisors: ["Rob Goodwin", "Perkins + Will"]
  },
  "1698 Bergen St  Brooklyn, NY 11213",
  "Brooklyn"
  ),
  
  create_project(3, "Safe Horizon", 
  "A campaign to help human traffic victims gain agency by ReBoot", 
  "Safe Horizon’s Anti-Trafficking Program provides services to all victims of human trafficking, including both labor and sex trafficking. They are in need of outreach materials based upon the testimonies of survivors, as well as training materials for member-led, community-based organizations.",
  "", 
  ["Public Housing", "Sustainability Advocacy"], 
  2013, 
  "current", 
  "http://www.safehorizon.org", 
  { 
    nonprofit: ["Safe Horizon"],
    design_partner: ["Reboot"],
    advisors: ["Chelsea Mauldin"],
  },
  "2 Lafayette Street, 3rd Floor, New York, NY 10007",
  "Manhattan"
  ),
  
  create_project(4, "OpenPlans Transportation", 
  "An outreach campaign to encourage the use of bus transportation by Purpose", 
  "OpenPlans Transportation is a strategic technology consultancy that uses open data and open source initiatives to improve public transportation systems and experiences. They are seeking collaboration with various creatives to brainstorm about ways to engage bus riders, communities along bus routes, transit advocacy groups, and the general public.",
  "", 
  ["Public transportation"], 
  2013, 
  "current", 
  "http://transportation.openplans.org", 
  { 
    nonprofit: ["OpenPlans Transportation"],
    design_partner: ["Purpose"],
    advisors: ["Michael DelGaudio"],
  },
  "148 Lafayette St, PH, New York, NY 10013",
  "Manhattan"
  ),
  
  create_project(5, "Clemente Soto Velez Center", 
  "A signage system for a Latino cultural center by Studio Kudos", 
  "In addition to promoting Puerto Rican/Latino culture, CSVC embraces the city’s cultural diversity, provides studio space to artists, and hosts performances and exhibitions in a former public school owned by the City. Their home on the Lower East Side is undergoing renovation of its façade, theaters, and lobby and is in need of a unified way-finding signage, coherent with the organization’s mission.",
  "",
  ["Arts/Community", "Public Housing"], 
  2013, 
  "current",
  "http://csvcenter.org", 
  { 
    nonprofit: ["Clemente Soto Velez Center"],
    design_partner: ["Studio Kudos"],
    advisors: ["Lisa Green"],
  },
  "107 Suffolk Street #312, New York, NY 10002",
  "Manhattan"
  ),
  
  create_project(6, "Neighborhood Economic Development Advocacy Project", 
  "NEDAP and Rodrigo Corral Design", 
  "Neighborhood Economic Development Advocacy Project (NEDAP) is a resource and advocacy center that works with community groups to promote economic justice in NYC’s low income communities and communities of color. NEDAP leads the NYC Immigrant Financial Justice Network, which conducts community education, organizing, and policy advocacy to promote immigrants’ economic rights and financial inclusion.",
  "NEDAP and Rodrigo Corral Design are collaborating to produce a series of Financial Rights Guides that will be widely disseminated through the NYC Immigrant Financial Justice Network and to other NYC groups serving diverse immigrant communities. The goal of the project is to arm new immigrants with concrete information about their rights and where to turn for free, trusted help.  Immigrant groups will use the material as an education and advocacy tool with their members. The guides will be translated in Spanish and other needed languages, including French, Chinese, Korean, Nepali, Urdu, and Bengali.",
  ["Arts/Community", "Social/Economic Justice", "Workforce Empowerment"], 
  2013, 
  "current",
  "http://www.nedap.org", 
  { 
    nonprofit: ["Neighborhood Economic Development Advocacy Project"],
    design_partner: ["Rodrigo Corral principal; Gonzalo Muino, illustrator"],
    advisors: ["Gabriela Mirensky, AIGA"],
  },
  "176 Grand Street, Suite 300, New York, NY 10013",
  "Manhattan"
  ),
  
  create_project(7, "Identity + Style Guide", 
  "Bronx River Alliance + Felix Sockwell and Tom Vasquez", 
  "The Bronx River Alliance is a nonprofit organization that works closely with the New York City Department of Parks & Recreation and over 100 other local, regional, and national nonprofits, government agencies and other partners to protect and restore the Bronx River and Greenway. The Alliance grew out of a community groundswell to reclaim the Bronx River as a resource for Bronx River communities.",
  "The objective for the desigNYC partnership is to unify the look and feel of their materials (print, web, email, etc.) via a Style Guide, so that all of their communications reinforce the new identity as an organization. A secondary goal of the project is to provide the Alliance with some updated and new icons that can be put into use in their promotional communications for the various events held throughout the year. It is our collective hope that once our work is put to use, a greater awareness about the Bronx River Alliance’s mission will be understood. Through the use of a cohesive, consistent aesthetic approach, more people will be inspired to contribute toward this worthy endeavor. Eventually, additional revenue streams could be garnered through the sale of consumer-based artifacts that utilize the work that we created, such as t-shirts, mugs, tote bags, buttons, posters, and more.",
  ["Arts/Community"], 
  2013, 
  "future",
  "http://www.bronxriver.org", 
  { 
    nonprofit: ["Bronx River Alliance"],
    design_partner: ["Felix Sockwell", "Tom Vasquez"],
    advisors: [""]
  },
  "1 Bronx River Parkway, Bronx, NY 10462",  
  "Bronx"
  )

];
