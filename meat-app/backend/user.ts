export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {}

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key:string]: User} = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'ju123'),
    "adriano@gmail.com": new User('adriano@gmail.com', 'Adriano', 'belebele'),
    "lucas@gmail.com": new User('lucas@gmail.com', 'Lucas', 'lulu1717'),
}