loopback = require("loopback");

module.exports = function(SurveyData) {
  function gennum() {
    var text = "";
    var text = "";
    var possible = "ACDFGHJKLMNOPQRSTW";
    text += possible.charAt(Math.floor(Math.random() * 18));
    text += possible.charAt(Math.floor(Math.random() * 18));
    text += "-";
    text += String.fromCharCode(48 + Math.floor(Math.random() * 10));
    text += String.fromCharCode(48 + Math.floor(Math.random() * 10));
    text += String.fromCharCode(48 + Math.floor(Math.random() * 10));
    text += String.fromCharCode(48 + Math.floor(Math.random() * 10));

    return text;
  }

  SurveyData.observe("before save", function locBeforeSaveFn(ctx, next) {
    if (ctx.isNewInstance) {
      ctx.instance.surveyNumber = gennum();
    } else {
        // delete surveyNumber in case of update
    }
    next();
  });
};
