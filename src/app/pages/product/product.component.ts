import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient) {
   }

  ngOnInit(): void {
    //this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    this.deleteProduct();
  }
  getProducts() {
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.get(url).subscribe(
    response => {
      console.log(response);    }
  ); }

  getProduct() {
    const url = "http://api.escuelajs.co/api/v1/products/20";
    this.httpClient.get(url).subscribe(
    response => {
      console.log(response);    }
  ); }


  createProduct() {
    const data=  {
      title:"Actividad 4",
      price:20,
      description:"actividad hecha por Maria Jose Ortega",
      images:[],
      categoryId: 1,
    }
    const url = "http://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }
  updateProduct() {
    const data=  {
      title:"animales de casa",
      price:45,
      description:"Animales Domesticos por Maria Jose Ortega ",
    }
    const url = "http://api.escuelajs.co/api/v1/products/230";
    this.httpClient.put(url, data).subscribe(
    response => {
      console.log(response);    }
  ); }


  deleteProduct() {
    this.httpClient.delete("http://api.escuelajs.co/api/v1/products/110").subscribe(
    response => {
      console.log(response);    }
  ); }
  ; }
