import ProductsforSale from "../src/ProductsforSale"
import ProductsBottom from "../src/ProductsBottom"
import MenubarTop from "../src/MenuBarTop"
import Footer from "../src/Footer"
export default function Home() {
  return (
    <div>
      <div className="head">
        <MenubarTop />
        <div className="containerhead">
          <div className="containerheadtext">
            <div className="headtext">
              <h1>A CONSOLE FOR EVERY WORKFLOW</h1>
              <p>Discover the perfect console for yours.</p>
            </div>
          </div>
        </div>
      </div>
      <ProductsforSale />
      <div className='shopbanner'>
        <div className='containerbanner'>
          <div className='containerbannertext'>
            <h1>CREATE YOUR OWN CONSOLE</h1>
            <p>Add-on to make it perfect.</p>
          </div>
        </div>
      </div>
      <ProductsBottom />
      <Footer />
    </div>
  )
}
