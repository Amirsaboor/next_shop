import AboutUs from "@/components/About";
import Contact from "@/components/Contact/Contact";
import Features from "@/components/features";
import ProductsTab from "@/components/products/ProductsTab";
import { getFetch } from "@/utils/fetch";

export default async function Home() {
  const productsTabs = await getFetch('/products/products-tabs')
  return (
    <div >
      <Features />
      <ProductsTab tabList={productsTabs.tabList} tabPanel={productsTabs.tabPanel} />
      <AboutUs />
      <Contact />
    </div>
  );
}
