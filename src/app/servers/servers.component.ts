import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: [],
})

export class ServersComponent {
    title = 'server';
    servers: string = 'gulal';

    server(){
        return 'paidup';
    }
}