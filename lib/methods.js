  Meteor.methods({
  addTask: function (text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteTask: function (taskId) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }

    Tasks.remove(taskId);
  },
  setChecked: function (taskId, setChecked) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { checked: setChecked} });
  },
  setChklt: function (taskId, setChklt) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { chklt: setChklt} });
  },
   setChkfail: function (taskId, setChkfail) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }
    Tasks.update(taskId, { $set: { chkfail: setChkfail} });
  },
  setPrivate: function (taskId, setToPrivate) {
    var task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
  getCodedetail:function (taskId){
    var task = Tasks.findOne(taskId);
    // console.log(taskId);
    // console.log(task);
    // $("ul pre").each(function(i){
    //   console.log($(this).width());
    // });
    $("ul li .codebtn").each(function(i){
      // $(this).click(function(){
      //   console.log($(this).index());
      // });
      console.log($(this).index());
    });
    // $("ul li").click(function(){
    //   // var index = $(this).index()+1;
    //   // alert(index);
    //    $(".codedetail").slideToggle("slow",function(){ });
    //   return false;
    // });
    // $(this).parent().next().next().slideToggle("slow",function(){ });
    // $(".codedetail").slideToggle("slow",function(){ });
    // $(".codedetail").slideToggle("slow",function(){ });
  //   $('li').live('click',function(){  
  //   alert($(this).val()); //弹出点击的li标签的value值  
  // });  
  }
});