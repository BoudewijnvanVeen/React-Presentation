
function findSlide(source, find) {
    var slide = {};   
    var recurse = function (o, i) {
        if (o.slides !== undefined) {
            for (var n = 0; n < o.slides.length; n++) {
                if (o.slides[n].title === i.title) {
                    slide = o.slides[n];
                    break;
                }
                recurse(o.slides[n], i);
            };
        }
    }

    recurse(source,find);
    return slide;
}

var makeTree = function (o) {
    if (o.slides !== undefined) {
        for (var n = 0; n < o.slides.length; n++) {
            o.slides[n].parent = o;
            if (o.slides[n - 1] !== undefined)
                o.slides[n].prev = o.slides[n - 1];
            if (o.slides[n + 1] !== undefined)
                o.slides[n].next = o.slides[n + 1];
            if (o.slides[n].slides !== undefined)
                o.slides[n].firstchild = o.slides[n].slides[0];
            makeTree(o.slides[n]);
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