  Meteor.subscribe("jobs"); 
  Meteor.subscribe("apps");
  
  Template.selectapp.events({
	     'change .app':function(){
         Session.set("appn",document.SelectApp.app.value);
         // console.log(Apps.findOne({appname:Session.get("appn")}).job.substr(0,13));
         // Session.set("appnn",Apps.findOne({name:Session.get("appn")}).job.substr(0,13));
       },
        'change .job':function(){
	     Session.set("jobn",document.SelectApp.job.value);
       Session.set("searchvalue", "");
       },
      "click .searchbtn": function (event) {
        // console.log(document.getElementsByClassName("searchtext").value);
        console.log($(".searchtext").val().length);
        // console.log();
        Session.set("searchvalue", $(".searchtext").val());
      }
  });

  Template.applist.helpers({
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
    incompleteCount: function () {
      return Jobs.find({jobname:Session.get("jobn"),checked: {$ne: true}}).count();
    },
    ltincompleteCount: function () {
      return Jobs.find({jobname:Session.get("jobn"),chklt: {$ne: true}}).count();
    },    
    totalCount: function () {
      return Jobs.find({jobname:Session.get("jobn")}).count();
    },
    failCount: function () {
      return Jobs.find({jobname:Session.get("jobn")}).count() - Jobs.find({jobname:Session.get("jobn"),chkfail:{$ne:true}}).count();
    },
    appnn:function(){
      return Apps.findOne({appname:Session.get("appn")}).jobname.substr(0,13);
    }
  });
  
  Template.selectapp.helpers({
    apps:function(){
            return _.uniq(Apps.find({},{sort:{appname:1},fields:{appname:true}}).map(function(x){return x.appname;}),true);
    	},
    jobs: function(){
                var appt = Session.get("appn");
                return Apps.find({appname:appt});
     }
  });


    
  Template.joblist.helpers({
    jobitems: function () {
      // Session.set("searchvalue","");
      var searchword=Session.get("searchvalue");
      console.log(searchword);
      var searchver=Session.get("appn");
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter jobs
        return Jobs.find({jobname:Session.get("jobn"),checked: {$ne: true}});
      } else if  (searchword==null || searchword.length == 0) {
        // Otherwise, return all of the jobs
        return Jobs.find({jobname:Session.get("jobn")});
      }
      else {
          console.log(searchword +"_" + searchver +"_" + Session.get("app"));
          // console.log(jobs.find({jobo:{$regex:searchver},title:{$regex:searchword}}).count());
          return Jobs.find({appame:{$regex:searchver},$or:[{jobame:{$regex:searchword}},{jobdetail:{$regex:searchword}}]});
      }
      
    }
  });