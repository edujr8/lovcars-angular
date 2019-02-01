
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class Constants {

    /* Host para autenticação do login */
    public static get urlHostAuth(): string { return "http://ec2-52-70-48-16.compute-1.amazonaws.com/api/login"; }; 

    /* Host de serviços da API */
    public static get urlHostAPI(): string { return "http://ec2-52-70-48-16.compute-1.amazonaws.com/api/v1"; };

    /* ID do client que esta acessando */
    public static get clientId(): string { return "2"; };

    /* Token para permissão do acesso do client expecifico */
    public static get clientSecret(): string { return "e6TO0ihusj91tZjpoprX2xFyRJb3OvvzdOrM3Co2"; };

    public static get grantType(): string { return "password"; };

    public static get scope(): string { return "*"; };
}

export class OptionsAuth {

    client_id: string;
    client_secret: string;
    grant_type: string;
    scope: string;
    username: string;
    password: string;
}

