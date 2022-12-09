import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  readonly API_URL:string= 'http://api.escuelajs.co/api/v1/products';
  constructor(private httpClient: HttpClient) { }

    getProducts() {
      this.httpClient.get(this.API_URL).subscribe(
      response => {
        console.log(response);    }
    ); }
  
    getProduct() {
      this.httpClient.get(this.API_URL + '/9')
     }
  
  
    createProduct() {
      const data=  {
        title:"Actividad 4",
        price:20,
        description:"actividad hecha por Maria Jose Ortega",
        images:[],
        categoryId: 1,
      }
      const url = ${this.API_URL}/${id}
      this.httpClient.post(url, data)
     }
    updateProduct(id:number) {
      const data=  {
        title:"animales de casa",
        price:45,
        description:"Animales Domesticos por Maria Jose Ortega ",
      }
      const url = ${this.API_URL}/${id}
      this.httpClient.put(url, data)
     }
  
  
    destroy(id:number) {
      const url = ${this.API_URL}/${id}
      this.httpClient.get(this.API_URL)
};
}
  
  
}
