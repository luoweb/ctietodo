  Meteor.subscribe("tasks"); 
  Meteor.subscribe("ctievers");
  
  Template.tasklist.events({
  //   "click .toggle-checked": function () {
  //     // Set the checked property to the opposite of its current value
  //     Meteor.call("setChecked", this._id, ! this.checked);
  //   },
  //   "click .toggle-chklt": function () {
  //     // Set the checked property to the opposite of its current value
  //     Meteor.call("setChklt", this._id, ! this.chklt);
  //   },
  //    "click .toggle-chkfail": function () {
  //     // Set the checked property to the opposite of its current value
  //     Meteor.call("setChkfail", this._id, ! this.chkfail);
  //   },   
  //   "click .delete": function () {
  //     //Meteor.call("deleteTask", this._id);
	// // alert("haha");
  //   },
  //   "click .toggle-private": function () {
  //     Meteor.call("setPrivate", this._id, ! this.private);
  //   }
  });

  Template.tasklist.helpers({
    tasks: function () {
      // Session.set("searchvalue","");
      var searchword=Session.get("searchvalue");
      console.log(searchword);
      var searchver=Session.get("vermn");
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({verno:Session.get("vern"),checked: {$ne: true}});
      } else if  (searchword==null || searchword.length == 0) {
        // Otherwise, return all of the tasks
        return Tasks.find({verno:Session.get("vern")});
      }
      else {
          console.log(searchword +"_" + searchver +"_" + Session.get("verm"));
          // console.log(Tasks.find({verno:{$regex:searchver},title:{$regex:searchword}}).count());
          return Tasks.find({verno:{$regex:searchver},$or:[{title:{$regex:searchword}},{detail:{$regex:searchword}}]});
      }
      
    }
  });
  
