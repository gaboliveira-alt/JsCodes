const userExample = {
    name: "Murilo",
    email: "Murilo@email.com",
    message: function() {
        console.log(`Olá meu nome é ${this.name}`)
    }
}

userExample.messageUser()