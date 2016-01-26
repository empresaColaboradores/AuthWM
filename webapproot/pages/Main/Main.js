dojo.declare("Main", wm.Page, {
	start: function() {
	
	},
	"preferredDevice": "desktop",

    svcRolesSuccess: function(inSender, inDeprecated) {
         app.varRoles.setValue("dataValue", inSender.getData());
      },
  
	button2Click: function(inSender) {
		if(app.hasRole("admin")){
            console.log("You're not an admin");
            app.toastError("You're not an admin", 1000);}
	},
	_end: 0
});