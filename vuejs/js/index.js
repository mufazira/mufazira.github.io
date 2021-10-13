let app1 = new Vue({
    el: "#app1",
    data: {
        message: "Hello Vue!"
    }
})

let app2 = new Vue({
    el:"#app2",
    data: {
        message: "Loaded on" + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!",
    }
})

let app3 = new Vue({
    el: "#app3",
    data: {
        showIt: true //false - it will not apprear the showIt
    },
    methods: {
        toggleMsg: function() {
            if (this.showIt) {
                this.showIt = false
            } else {
                this.showIt = true
            }
        }
    }
})

let app4 = new Vue({
    el: "#app4",
    data: {
        theList: [
            { text: "Learn Html"},
            { text: "Learn CSS"},
            { text: "Learn JavaScript"}
        ]
    }
})

let app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello World"
    }
})