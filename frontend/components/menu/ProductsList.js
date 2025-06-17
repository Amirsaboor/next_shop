import { getFetch } from "@/utils/fetch"
import Product from "../products/Product";
import Paginate from "./paginate";

export default async function ProductsList({ params }) {
    const data = await getFetch(`/menu?${params}`);
    const products = data.products

    return (
        <>
            <div className="row gx-3">
                {products.map(product => (
                    <div key={product.id} className="col-sm-6 col-lg-4">
                        <Product product={product} />
                    </div>
                ))}

            </div>
            <Paginate links={data.meta.links} />

        </>
    )
}