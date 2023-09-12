const School = require("./school");

const school = new School();

school.on("ringBell", ({ period, text }) => {
  console.log(`Sir ${period} ${text}`);
});

school.startPeriod();
