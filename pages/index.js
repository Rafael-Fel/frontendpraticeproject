import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <div className="head">
        <div className="menu-position-fixed">
          <nav className="menu">
            <a href="">MONOGRAM</a>
            <div className="navbar">
              <ul>
                <a href=""><li>HOW IT WORKS</li></a>
                <a href=""><li>WORKFLOWS</li></a>
                <a href=""><li>DOWNLOAD</li></a>
                <a href=""><li>BLOG</li></a>
                <a href=""><li>SUPPORT</li></a>
                <a href=""><li>SHOP</li></a>
              </ul>
            </div>
          </nav>
        </div>
        <div className="containerhead">
          <div className="containerheadtext">
            <div className="headtext">
              <h1>A CONSOLE FOR EVERY WORKFLOW</h1>
              <p>Discover the perfect console for yours.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="containerbody">
        <div className="Product-Top-1">
          <div className="Product-mosaic product1-img">
            <div>
              <h3>MINI CONSOLE</h3>
              <p>Ideal for everyday shortcuts. Adaptable to any workflow.</p>
            </div>
            <div className='Product-Price'>
              <p className='discount'>US$ 149</p>
              <p className='regular-price'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic product2-img">
            <div>
              <h3>TRAVELER CONSOLE</h3>
              <p>Ideal for music and audio. Adaptable to any workflow..</p>
            </div>
            <div className='Product-Price'>
              <p className='discount'>US$ 399</p>
              <p className='regular-price'>US$ 499</p>
            </div>
          </div>
          <div className="Product-mosaic product3-img">
            <div>
              <h3>STUDIO CONSOLE</h3>
              <p>Ideal for photo and video. Adaptable to any workflow.</p>
            </div>
            <div className='Product-Price'>
              <p className='discount'>US$ 499</p>
              <p className='regular-price'>US$ 599</p>
            </div>

          </div>
          <div className="Product-mosaic product4-img">
            <div>
              <h3>MASTER CONSOLE</h3>
              <p>Ideal for Virtual Production and Film. Adaptable to any workflow.</p>
            </div>
            <div className='Product-Price'>
              <p className='discount'>US$ 799</p>
              <p className='regular-price'>US$ 1.099</p>
            </div>

          </div>
        </div>

      </section>
      <div className='shopbanner'>
        <div className='containerbanner'>
          <div className='containerbannertext'>
            <h1>CREATE YOUR OWN CONSOLE</h1>
            <p>Add-on to make it perfect.</p>
          </div>
        </div>
      </div>
      <section className="containerbody">
        <div className="Product-Bottom">
        <div className="Product-mosaic-bottom bottom-product1-img">
            <div>
              <h3>ORBITER MODULE</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product2-img">
            <div>
              <h3>DIAL MODULE</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product3-img">
            <div>
              <h3>SLIDER MODULE</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product4-img">
            <div>
              <h3>ESSENTIAL KEYS MODULE</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product5-img">
            <div>
              <h3>MINI CONSOLE UPGRADE: MIDI</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product6-img">
            <div>
              <h3>MINI CONSOLE UPGRADE: PHOTO</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product7-img">
            <div>
              <h3>MINI CONSOLE UPGRADE: VIDEO</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
          <div className="Product-mosaic-bottom bottom-product8-img">
            <div>
              <h3>MONOGRAM CARE</h3>
            </div>
            <div className='Product-Price-bottom'>
              <p className='regular-price-bottom'>US$ 249</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
