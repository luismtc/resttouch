export class usrLogin {
    constructor(
        public usuario: string,
        public contrasenia: string
    ) { }
}

export class usrLogInResponse {
    constructor(
        public mensaje: string,
        public token: string
    ) { }    
}

export class Usuario {
    constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public usuario: string,
        public debaja: number
    ) { }
}
