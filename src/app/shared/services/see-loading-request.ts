import { Injectable } from '@angular/core';

@Injectable()
export class SeeLoadingRequestService {

    private statusLoadingSeach: boolean = false;
    private statusLoadingRegister: boolean = false;

    getStatusLoadingSeach() {
        return this.statusLoadingSeach;
    }

    setStatusLoadingSeach(status: boolean) {
        this.statusLoadingSeach = status;
    }

    getStatusLoadingRegister() {
        return this.statusLoadingRegister;
    }

    setStatusLoadingRegister(status: boolean) {
        this.statusLoadingRegister = status;
    }
}