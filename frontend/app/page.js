import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/contact/Contact";
import ProductsTab from "@/components/products/ProductsTab";
import { getFetch } from "@/utils/fetch";

export default async function Home() {
  const productsTab = await getFetch('/products/products-tabs');

  return (
    <>
      <Features />
      <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel} />
      <About />
      <Contact />
    </>
  )
}
