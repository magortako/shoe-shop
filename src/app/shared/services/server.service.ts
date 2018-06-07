// import { Injectable } from '@angular/core';
// //get access to the built in http service which enables to send requests
// import { Http } from '@angular/http';

// @Injectable()
// export class ServerService {
//     constructor ( private http: Http){    }

//     //reach out to the backend
//     storeServers(servers:any[]){
//         //http object
//         return this.http.post('https://e-shop-f49b7.firebaseio.com/test.json', servers);

//     }

// }


// //in the product components inject the product service
// //in the product template add to the submit button a click listener giving the method name onSave
// onSave(){
//     //we get observable so we have to subscribe
//     this.serverService.storeServers(this.servers)
//     .subscribe(
//         (response) => console.log(response),
//         (error) => console.log(error)
//     );
// }