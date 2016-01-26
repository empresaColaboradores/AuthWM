dojo.declare("Auth", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isLoginPageEnabled": true, 
	"isSSLUsed": false, 
	"isSecurityEnabled": true, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "wm.base.widget.themes.Bootstrap", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		varRoles: ["wm.Variable", {"isList":true,"json":"[]","type":"StringData"}, {}]
	},
	_end: 0
});

Auth.extend({
      hasRole: function (role) {
        var userRoles = app.varRoles.getValue("dataValue");
        
        for (var i = 0; i < userRoles.length; i++) {
            if (userRoles[i].dataValue === role)
                return true;            
        }

        return false;
        },
        
	_end: 0
});