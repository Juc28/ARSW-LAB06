apimock=(function(){

    var mockdata=[];

    mockdata["Mariana"]=	[{author:"Mariana","points":[{"x":150,"y":120},{"x":215,"y":115},{"x":34,"y":98}],"name":"prueba"},
        {author:"Mariana","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"prueba1"}];
    mockdata["Ximena"]=[{author:"Ximena","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"prueba2"},
        {author:"Ximena","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"prueba3"}];
    mockdata["Santiago"]=[{author:"Santiago","points":[{"x":65,"y":45},{"x":89,"y":43}],"name":"prueba4"},
        {author:"Santiago","points":[{"x":76,"y":23},{"x":56,"y":9}],"name":"prueba5"}];

    return {
        getBlueprintsByAuthor: (authname, callback) => {
            callback(mockdata[authname]);
        },

        getBlueprintsByNameAndAuthor: (authname, bpname, callback) => {
            callback(mockdata[authname].find((e) => e.name === bpname));
        },

        updateBlueprint: (list, callback, newPoint, ID) => {
            list[ID].points.push(newPoint);
            callback(list);
        },
    };

})();