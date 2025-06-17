import CategoriesList from "@/components/menu/CategoriesList";
import ProductsList from "@/components/menu/ProductsList";
import Search from "@/components/menu/Search";
import Sort from "@/components/menu/Sort";
import { getFetch } from "@/utils/fetch"
import Link from "next/link";

export default async function MenuPage({ searchParams }) {
    const categories = await getFetch('/categories')
    const params = new URLSearchParams(Object.entries(await searchParams)).toString();

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-12 col-lg-3">
                        <Search />
                        <hr />
                        <CategoriesList categories={categories} />
                        <hr />
                        <Sort />
                    </div>

                    <div className="col-sm-12 col-lg-9">
                        <ProductsList params={params} />
                    </div>
                </div>
            </div>
        </section>
    )
}