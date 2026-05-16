import type { IncomingMessage, ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/praseBody";
import { sendResponse } from "../utility/sendResponse";

export const productControler = async (req: IncomingMessage, res: ServerResponse) => {
    // console.log(Request, req);

    const url = req.url
    const method = req.method

    //products // product/1  => ['', 'products', '1]
    // console.log(url);
    const urlParts = url?.split("/");
    // console.log(urlParts);

    const id = urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null
    // console.log("This is the actual id :", id)

    // Get all Products
    if (url === "/products" && method === "GET") {

        try{
            const products = readProduct();

            return sendResponse(res, 200, true, "Products retrived successfully", products);
        } catch(error) {
            return sendResponse(res, 500, false, "Something went wrong", error);
        }
        

        // res.writeHead(200, { "content-type": "application/json" });
        // res.end(JSON.stringify({ message: "Products retrived successfully", data: { products } }))
    } else if (method === "GET" && id !== null) {
        const products = readProduct();
        // console.log(products);
        const product = products.find((p: IProduct) => p.id === id) //Get single product

        if(!product) {
            return sendResponse(res, 404, false, "Products not found!");

            // res.writeHead(404, { "content-type": "application/json" });
            // res.end(JSON.stringify({
            //     message: "Products not found!",
            //     data: product
            // }),
            // );
        }

        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Products retrived successfully", data: product }))
    } else if (method === "POST" && url === "/products") {
        const body = await parseBody(req);
        // console.log("Body", body)
        const products = readProduct();
        const newProduct = {
            id: Date.now(),
            ...body,
        }
        // console.log(newProduct);
        products.push(newProduct); //[{}, {}, {}]
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Products retrived successfully",
            data: newProduct
        }),
        );
    } else if (method === "PUT" && id !== null) {
        const body = await parseBody(req);
        const products = readProduct();

        const index = products.findIndex((p: IProduct) => p.id === id)
        // console.log(index);
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Products not found",
                data: null
            }),
            );
        }

        products[index] = {id: products[index].id, ...body};

        insertProduct(products);

        res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Products updated successfully",
                data: products[index]
            }),
        );
        
    } else if(method === "DELETE" && id !== null) {
        const products = readProduct();
        const index = products.findIndex((p: IProduct) => p.id === id);
        
        if (index < 0) {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Products not found",
                data: null
            }),
            );
        }

        // const arr = ['1', '2', '4', '5'];

        // arr.splice(2, 1);
        // console.log(arr)
        products.splice(index, 1)
        // console.log(products);
        insertProduct(products);
        res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({
                message: "Products deleted successfully",
                data: null
            }),
        );
        
    }
}