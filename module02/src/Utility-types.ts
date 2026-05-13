// Utility types

type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

// type Product = {
//     id: number;
//     name: string;
//     price: string;
// }

type ProductSummary = Pick<Product, "id" | "name" | "price">


type ProductWithOutStock = Omit<Product, "stock" | "stock">;

type ProductWithColor = Required<Product>

const product: ProductWithColor = {
    id: 222,
    name: 'Mouse',
    price: '20',
    stock: 100,
    color: 'Red'
}


type OptionalProduct = Partial<Product>
type ProductReadOnly = Readonly<Product>

const emptyObj: Record<string, unknown>= {}

const product1 = {
    id: 222,
    name: "Mouse",
    price: "20",
}