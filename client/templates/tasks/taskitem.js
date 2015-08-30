if (Meteor.isClient) {
  // Session.setDefault("searchvalue","");
   Template.myModal.created=function(){
      Session.set("show-my-modal",false);
  };
  
  Template.myModal.helpers({
      showModal:function(){
          return Session.get("show-my-modal");
      }
  });
  
  Template.myModal.events({
      "click .close, click .cancel":function(){
          Session.set("show-my-modal",false);
      },
      "submit form":function(event){
          event.preventDefault();
          //
          Session.set("show-my-modal",false);
      }
  });
  
  Template.parent.events({
      "click .show-my-modal-button":function(){
          Session.set("show-my-modal",true);
      }
  });
  
  Template.taskitem.events({
    "click .toggle-checked": function (event, template) {
      // Set the checked property to the opposite of its current value
      // alert(this.checked);
      Meteor.call("setChecked", this._id, ! this.checked);
    },
    "click .toggle-chklt": function () {
      // Set the checked property to the opposite of its current value
      Meteor.call("setChklt", this._id, ! this.chklt);
    },
    "click .toggle-chkfail": function () {
      // Set the checked property to the opposite of its current value
      Meteor.call("setChkfail", this._id, ! this.chkfail);
    },
    "click .delete": function () {
      //Meteor.call("deleteTask", this._id);
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
  Template.taskitem.onRendered(function () {
    // Use the Packery jQuery plugin


  });
  Template.taskitem.helpers({
    // tasks: function () {
    //   if (Session.get("hideCompleted")) {
    //     // If hide completed is checked, filter tasks
    //     return Tasks.find({verno:Session.get("vern"),checked: {$ne: true}});
    //   } else {
    //     // Otherwise, return all of the tasks
    //     return Tasks.find({verno:Session.get("vern")});
    //   }
    // }
  })
}