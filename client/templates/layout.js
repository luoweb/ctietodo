  Template.layout.helpers({
    //  tasks: function () {
    //   if (Session.get("hideCompleted")) {
    //     // If hide completed is checked, filter tasks
    //     return Tasks.find({verno:Session.get("vern"),checked: {$ne: true}});
    //   } else {
    //     // Otherwise, return all of the tasks
    //     return Tasks.find({verno:Session.get("vern")});
    //   }
    // },
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
    incompleteCount: function () {
      return Tasks.find({verno:Session.get("vern"),checked: {$ne: true}}).count();
    },
    ltincompleteCount: function () {
      return Tasks.find({verno:Session.get("vern"),chklt: {$ne: true}}).count();
    },    
    totalCount: function () {
      return Tasks.find({verno:Session.get("vern")}).count();
    },
    failCount: function () {
      return Tasks.find({verno:Session.get("vern")}).count() - Tasks.find({verno:Session.get("vern"),chkfail:{$ne:true}}).count();
    },
    vermn:function(){
      return Ctievers.findOne({name:Session.get("verm")}).verno.substr(0,13);
    }
  });
  
  Template.layout.events({
    "change .hide-completed input": function (event) {
      // console.log(event.target.checked);
      Session.set("hideCompleted", event.target.checked);
    }
  })
  Template.select.events({
	     'change .vermon':function(){
         Session.set("verm",document.SelectVersion.vermon.value);
         console.log(Ctievers.findOne({name:Session.get("verm")}).verno.substr(0,13));
         Session.set("vermn",Ctievers.findOne({name:Session.get("verm")}).verno.substr(0,13));
       },
        'change .verno':function(){
	     Session.set("vern",document.SelectVersion.verno.value);
       Session.set("searchvalue", "");
       },
      "click .searchbtn": function (event) {
        // console.log(document.getElementsByClassName("searchtext").value);
        console.log($(".searchtext").val().length);
        // console.log();
        Session.set("searchvalue", $(".searchtext").val());
      }
  });

  Template.select.helpers({
      vermons:function(){
            return _.uniq(Ctievers.find({},{sort:{name:1},fields:{name:true}}).map(function(x){return x.name;}),true);
    	},
    	//vermons:Ctievers.find(),
    	vernos: function(){
                var vermon = Session.get("verm");
                return Ctievers.find({name:vermon});
      }
  });
