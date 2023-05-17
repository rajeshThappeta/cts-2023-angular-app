import {Component} from '@angular/core';


@Component({
    selector:'app-products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})

export class ProductsComponent{


    products:ProductType[] = [
                                {
                                id: 100,
                                name: "Watch",
                                image: "https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SY400_.jpg",
                                price: 70000,
                                },
                                {
                                id: 200,
                                name: "Water purifier",
                                image: "https://m.media-amazon.com/images/I/41QOpnWKj-L._AC_SY400_.jpg",
                                price: 45000,
                                },
                                {
                                id: 300,
                                name: "Bags",
                                image: "https://m.media-amazon.com/images/I/91weq3mK2TL._AC_SY400_.jpg",
                                price: 12000,
                                },
                            ];
}



//create Product type
export interface ProductType{
    id:number;
    name:string;
    image:string;
    price:number
}