({
    clickCreate : function(component, event, helper) {
        var newNamelocal = component.get("v.newName");
        //alert("Hello " + newNamelocal);
        var thenames = component.get("v.names"); //clone of the  collection in view 
        thenames.push(newNamelocal);
        component.set("v.names", thenames);
    }
})
