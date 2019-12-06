export class usrLogin {
    constructor(
        public usuario: string,
        public contrasenia: string
    ) { }
}

export class usrLogInResponse {
    constructor(
        public mensaje: string,
        public token: string,
        public usrname: string,
        public nombres: string,
        public apellidos: string
    ) { }    
}

export class Usuario {
    constructor(
        public usuario: number,
        public nombres: string,
        public apellidos: string,
        public usrname: string,
        public contrasenia: string,
        public debaja: number
    ) { }
}
