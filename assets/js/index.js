new Vue({
    el: "#app",
    mounted() {
        if (localStorage.getItem("tasks")) {
            this.listTasks = JSON.parse(localStorage.getItem("tasks"));
        }
    },
    data: {
        listTasks: [{ title: "Example", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum quos eos earum voluptates necessitatibus cum quis ex sequi dolores hic magnam, unde inventore nostrum officia nobis, beatae repellat atque!", image: "./assets/img/example.jpg" }, { title: "Example", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum quos eos earum voluptates necessitatibus cum quis ex sequi dolores hic magnam, unde inventore nostrum officia nobis, beatae repellat atque!", image: "./assets/img/example2.jpg" }],
        newTask: {},
        find: "",
    },
    methods: {
        addTasks() {
            if (this.newTask.title !== undefined) {
                this.listTasks.push(this.newTask);
                this.newTask = {};
                localStorage.setItem("tasks", JSON.stringify(this.listTasks));
            }
        },
        deleteTask(e) {
            const title = e.target.parentElement.children[0].textContent;
            this.listTasks.splice(this.listTasks.findIndex(task => task.title == title), 1);
            localStorage.setItem("tasks", JSON.stringify(this.listTasks));
            console.log(this.listTasks);
        }
    },

    computed: {
        findTask() {
            if (this.find != "") {
                return this.listTasks.filter(task => task.title.toLowerCase().includes(this.find.toLowerCase()));
            }
            return this.listTasks
        }
    }

})
