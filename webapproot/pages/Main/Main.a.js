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

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
logoutVariable1: ["wm.LogoutVariable", {"inFlightBehavior":"executeLast"}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
svcRoles: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"getUserRoles","service":"securityService","startUpdate":true}, {"onSuccess":"svcRolesSuccess"}, {
input: ["wm.ServiceInput", {"type":"getUserRolesInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"[Application Name]","height":"35px","padding":"4","width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"border":"1","fullStructure":[
{"label":"Help"},
{"label":"About"},
{"label":"Logout","onClick":"varTemplateLogout"}
],"height":"32px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 1","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"localizationStructure":{},"minDesktopHeight":60,"singleClickEdit":true,"styles":{}}, {}],
button2: ["wm.Button", {"border":"1","caption":"Admin Btn","height":"30px","width":"99px"}, {"onclick":"button2Click"}],
button1: ["wm.Button", {"border":"1","caption":"Logout","height":"30px","width":"101px"}, {"onclick":"logoutVariable1"}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 2","horizontalAlign":"left","verticalAlign":"top"}, {}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 3","horizontalAlign":"left","verticalAlign":"top"}, {}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';