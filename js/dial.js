var links = dialLinks || {
    root: {
        name: "Root",
        links: [],
        parent: null
    }
};

var App = {};

App.breadcrumbs = new Vue({
    el: "#bread",
    data: {
        bread: []
    },
    methods: {
        goTo: function(dir) {
            App.dial.goTo(dir);
        }
    }
});

App.dial = new Vue({
	el: "#dial",
	data: {
        current: links.root
	},
	methods: {
        goTo: function(dir) {
            var current = links[dir] || links.root,
                crumbs = [
                    {
                        name: current.name,
                        ref: dir,
                        active: false
                    }
                ];

            this.current = current;
            while (current && current.parent) {
                var ref = current.parent;
                current = links[ref];
                if (current) {
                    crumbs.unshift({
                       name: current.name,
                       ref: ref,
                       active: true
                    });
                }
            }
            App.breadcrumbs.bread = crumbs;
        }
    }
});


App.navbar = new Vue({
	el: "#navbar",
	data: {},
	methods: {
        goRoot: function() {
            App.dial.goTo('root');
        }
	}
});

App.dial.goTo('root');