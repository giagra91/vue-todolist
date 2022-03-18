let app = new Vue(
    {
        el: `#app`,
        data: {
            todoListItems : [
                {
                    text : `Fare la spesa`,
                    done : true,
                },
                {
                    text : `Passare in lavanderia`,
                    done : false,
                },
                {
                    text : `Lavare la macchina`,
                    done : true,
                },
                {
                    text : `Portare a spasso il gatto`,
                    done : false,
                },
                {
                    text : `Preparare il pranzo`,
                    done : false,
                },
            ],
            newText : "",
            newDone : false,
        },
        methods : {
            addItem(){
                if(this.newDone == 1){
                    this.newDone = true;
                } else {
                    this.newDone = false;
                }
                console.log(this.newDone)
                if(this.newText !== ""){
                    this.todoListItems.push(
                        {
                            text : this.newText,
                            done : this.newDone,
                        },
                    )
                } else {
                    console.warn(`Devi aggiungere un elemento alla to do list! Non fare il furbo con me!`)
                }
                this.newDone = "",
                this.newText = ""
            },
            removeItem(index, array){
                console.log(index);
                array.splice(index, 1)
            },
            invertDone(index){
                this.todoListItems[index].done = !this.todoListItems[index].done;
            }
        }
    }
)