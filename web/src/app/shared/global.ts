import { HttpHeaders } from '@angular/common/http';

export const GLOBAL = {
    //url: `${window.location.hostname}/resttouch/index.php`,
    url: `http://localhost/resttouch/index.php`,
    httpOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    },
    usrTokenVar: 'rttoken'
}