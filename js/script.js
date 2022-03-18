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
            newDone : "",
            // myColor : ""
        },
        methods : {
            addItem(){
                if(this.newDone == 1){
                    this.newDone = true;
                } else {
                    this.newDone = false;
                }

                if(this.newText !== "" && this.newDone || !this.newDone){
                    this.todoListItems.push(
                        {
                            text : this.newText,
                            done : this.newDone,
                        },
                    )
                    this.newDone = "",
                    this.newText = ""
                } else {
                    console.warn(`Devi aggiungere un elemento alla to do list! Non fare il furbo con me!`)
                }
                // console.error(this.myColor)
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