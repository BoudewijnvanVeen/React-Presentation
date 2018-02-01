
function findSlide(source, find) {
    var slide = {};   
    var recurse = function (o, i) {
        if (o.children !== undefined) {
            for (var n = 0; n < o.children.length; n++) {
                if (o.children[n].title === i.title) {
                    slide = o.children[n];
                    break;
                }
                recurse(o.children[n], i);
            };
        }
    }

    recurse(source,find);
    return slide;
}

var makeTree = function (o) {
    if (o.children !== undefined) {
        for (var n = 0; n < o.children.length; n++) {
            o.children[n].parent = o;
            if (o.children[n - 1] !== undefined)
                o.children[n].prev = o.children[n - 1];
            if (o.children[n + 1] !== undefined)
                o.children[n].next = o.children[n + 1];
            if (o.children[n].children !== undefined)
                o.children[n].firstchild = o.children[n].children[0];
            makeTree(o.children[n]);
        }
    }
}

module.exports = {

    makeTree: function (data) {
        return makeTree(data);
    },

    findSlide: function (o, id) {
        return findSlide(o, id);
    }
};