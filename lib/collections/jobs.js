Jobs = new Mongo.Collection("jobs");
Apps = new Mongo.Collection('apps');

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("jobs");
  Meteor.subscribe("apps");

  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;

      Meteor.call("addTask", text);

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });

  // Template.task.helpers({
  //   isOwner: function () {
  //     return this.owner === Meteor.userId();
  //   }
  // });

  // Accounts.ui.config({
  //   passwordSignupFields: "USERNAME_ONLY"
  // });
}

if (Meteor.isServer) {
  // Only publish Jobs that are public or belong to the current user
  Meteor.publish("jobs", function () {
    return Jobs.find();
  });
  Meteor.publish("apps", function () {
    return Apps.find();
  });
}


// db.apps.insert({appname:"F-CTIE",jobname:"版本安装",fintime:"20150314"})
// db.apps.insert({appname:"F-CTIE",jobname:"技术验证",fintime:"20150314"})
// db.apps.insert({appname:"F-CTIE",jobname:"业务验证",fintime:"20150314"})
// db.apps.insert({appname:"F-GTCG",jobname:"版本安装",fintime:"20150314"})
// db.apps.insert({appname:"F-GTCG",jobname:"技术验证",fintime:"20150314"})
// db.apps.insert({appname:"F-GTCG",jobname:"业务验证",fintime:"20150314"})

// db.jobs.insert({todo:"",doing:"",done:"",appname:"F-CTIE",jobname:"版本安装",jobdetail:"版本安装",plantime:"20150314"})
// db.jobs.insert({todo:"",doing:"",done:"",appname:"F-CTIE",jobname:"技术验证",jobdetail:"技术验证",plantime:"20150314"})
// db.jobs.insert({todo:"",doing:"",done:"",appname:"F-CTIE",jobname:"业务验证",jobdetail:"业务验证",plantime:"20150314"})
