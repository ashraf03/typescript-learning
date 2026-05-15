import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";

export const productControler = (req:IncomingMessage, res: ServerResponse) => {
    const url = req.url
    const method = req.method

    //products // product/1  => ['', 'products', '1]
    console.log(url);
    const urlParts = url?.split("/");
    console.log(urlParts);

    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) :null
    console.log("This is the actual id :", id)

    // Get all Products
    if(url === "/products" && method === "GET") {

        const products = readProduct();

        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify({message: "Products retrived successfully", data: {products}}))
    } else if (method === "GET" && id !== null) {
        const products = readProduct();
        // console.log(products);
        const product = products.find((p: IProduct) => p.id === id) //Get single product

        res.writeHead(200, {"content-type" : "application/json"});
        res.end(JSON.stringify({message: "Products retrived successfully", data: {product}}))
    }
}