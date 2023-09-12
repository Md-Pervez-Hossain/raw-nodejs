const EventEmetier = require("events");

class school extends EventEmetier {
  startPeriod() {
    console.log("Period Started");
    setTimeout(() => {
      this.emit("ringBell", {
        period: "first",
        text: "Class Ended",
      });
    }, 2000);
  }
}

module.exports = school;
