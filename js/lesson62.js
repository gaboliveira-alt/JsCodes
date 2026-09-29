class User {
    constructor(userName, userEmail) {
        this.userName = userName;
        this.userEmail = userEmail;
    }

    sendEmail() {
        console.log(`Email de ${this.userEmail} foi enviado para ${this.userName}`);
    }
}


const userExample = new User("Gabriel", "g@email.com");
userExample.sendEmail();