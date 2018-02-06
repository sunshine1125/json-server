var vm = new Vue({
    el:"#app",
    data: {
        lists : [],
        message: 111,
        name: "夏总"
    },
    mounted: function(){
        this.$http.get("http://localhost:3000/friends").then(function (res) {
            this.lists = res.body;
        console.log(res);
        })
    }
})