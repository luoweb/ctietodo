if (Meteor.isClient) {
  // Session.setDefault("searchvalue","");

   
  Template.jobitem.events({
    "click .toggle-checked": function (event, template) {
      // Set the checked property to the opposite of its current value
      // alert(this.checked);
      Meteor.call("setTodo", this._id, ! this.todo);
    },
    "click .toggle-chklt": function () {
      // Set the checked property to the opposite of its current value
      Meteor.call("setDoing", this._id, ! this.doing);
    },
    "click .toggle-chkfail": function () {
      // Set the checked property to the opposite of its current value
      Meteor.call("setDone", this._id, ! this.done);
    },
    "click .delete": function () {
      //Meteor.call("deletejob", this._id);
	// alert("haha");
    },
    "click .toggle-private": function () {
      Meteor.call("setPrivate", this._id, ! this.private);
    },
    "click .codebtn":function(){
      // alert("hello");
      console.log($(this));
      $(this).parent().next().next().slideToggle("slow",function(){ });
      // Meteor.call("getCodedetail",this._id);
      $(this).click(function(){
        console.log($(this).index());
      });
      $("input .codebtn").each(function(i){
      // $(this).click(function(){
      //   console.log($(this).index());
      // });
      console.log($(this).index());
    });
    }
  });
  Template.jobitem.onRendered(function () {
    // Use the Packery jQuery plugin


  });
  Template.jobitem.helpers({
    // jobs: function () {
    //   if (Session.get("hideCompleted")) {
    //     // If hide completed is checked, filter jobs
    //     return jobs.find({verno:Session.get("vern"),checked: {$ne: true}});
    //   } else {
    //     // Otherwise, return all of the jobs
    //     return jobs.find({verno:Session.get("vern")});
    //   }
    // }
  })
}