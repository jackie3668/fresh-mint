import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import mission1 from '../../Asset/About/healthy.png'
import mission2 from '../../Asset/About/planet-earth.png'
import mission3 from '../../Asset/About/organic.png'
import value1 from '../../Asset/About/pexels-markus-spiske-1268101.jpg'
import value2 from '../../Asset/About/pexels-andrea-piacquadio-3769999.jpg'
import value3 from '../../Asset/About/pexels-akil-mazumder-1072824.jpg'
import value4 from '../../Asset/About/pexels-quang-nguyen-vinh-2131784.jpg'
import value5 from '../../Asset/About/pexels-lukas-928199.jpg'
import value6 from '../../Asset/About/pexels-ella-olsson-1640770 (1).jpg'
import way3 from '../../Asset/About/food-waste.png'
import way2 from '../../Asset/About/containers.png'
import way1 from '../../Asset/About/weekly.png'
import cta from '../../Asset/About/pexels-ella-olsson-1640775.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="banner">
        <div className="hero-content">
          <h1>Make healthy eating accessible and enjoyable</h1>
          <div className="divider">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <h3>Inspired by the need for a healthier, more sustainable way of eating</h3>
        </div>
      </div>

      <div className="mission">
        <div>
          <img src={mission3} alt="" />
          <h2>100% Organic and Accessible</h2>
        </div>
        <div>
          <img src={mission1} alt="" />
          <h2>Nourishing for the Body</h2>
        </div>
        <div>
          <img src={mission2} alt="" />
          <h2>Sustainable for the Planet</h2>
        </div>
      </div>

      <div className="values">
        <div>
          <div><img src={value1} alt="" /></div>
          <div>
            <h2>Health Through Nutrition</h2>
            <p>At Fresh Mint, we believe that the foundation of good health is good nutrition. Our mission is to make healthy eating effortless and enjoyable, by providing meal kits that are not only delicious but also nutritionally balanced and rich in organic ingredients.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div><img src={value2} alt="" /></div>
          <div>
            <h2>Simplicity in Every Meal</h2>
            <p>We understand that life can be busy, but that shouldn't mean compromising on healthy meals. Fresh Mint is committed to simplicity, offering easy-to-prepare, wholesome meal kits that save time without sacrificing quality or taste.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div><img src={value3} alt="" /></div>
          <div>
            <h2>Sustainability at Our Core</h2>
            <p>Sustainability isn't just a buzzword for us; it's a principle we live by. From sourcing ingredients from local, organic farms to using eco-friendly packaging, Fresh Mint is dedicated to reducing environmental impact and promoting sustainable practices in all aspects of our business.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div><img src={value4} alt="" /></div>
          <div>
            <h2>Supporting Local Communities</h2>
            <p>Fresh Mint values the importance of community and strives to support local agriculture. By sourcing ingredients from local farmers, we not only ensure the freshness of our meals but also contribute to the local economy and foster a sense of community support.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div><img src={value5} alt="" /></div>
          <div>
            <h2>Transparency and Trust</h2>
            <p>Trust is paramount at Fresh Mint. We are committed to transparency in every step of our process, from farm to kitchen to your table. We openly share our sourcing practices, ingredient origins, and nutritional information, ensuring our customers can trust in the quality and safety of our meals.</p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div><img src={value6} alt="" /></div>
          <div>
            <h2>Innovation in Cuisine</h2>
            <p>We're not just about salads and smoothies; Fresh Mint is on a mission to innovate within the realm of healthy eating. Our culinary team continuously explores diverse cuisines and unique recipes to create exciting, flavorful meal kits that cater to a variety of tastes and dietary needs.</p>
            <button>Learn More</button>
          </div>
        </div>

      </div>

      <div className="ways">
        <h1>Here's how you can help our planet by cooking, eating, and storing smart</h1>
        <div>
          <div>
            <img src={way1} alt="" />
            <h2>Plan Your Meals</h2>
            <p>Reduce food waste by planning your meals ahead of time. This helps you buy only what you need, minimizing waste and saving money.</p>
          </div>
          <div>
            <img src={way2} alt="" />
            <h2>Use Reusable Containers</h2>
            <p>Ditch single-use plastics for storing and packing food. Invest in reusable containers, beeswax wraps, and cloth bags. This small change can significantly reduce plastic waste.</p>
          </div>
          <div>
            <img src={way3} alt="" />
            <h2>Embrace Leftovers</h2>
            <p>Get creative with leftovers instead of throwing them away. Many leftovers can serve as the base for a new meal, reducing waste and stretching your food and budget further.</p>
          </div>
        </div>
      </div>

      <div className="cta">
          <div>
            <img src={cta} alt="" />
          </div>
          <div className="text">
            <h2>Green Plate, Green Planet: Cook Smart, Live Sustainably</h2>
            <p>Embrace the power of smart cooking and eco-friendly habits with "Green Plate, Green Planet." Every meal you prepare, every scrap you compost, and every reusable container you choose over plastic, brings us one step closer to a healthier Earth. It's time to make sustainable living not just a choice, but a lifestyle. Together, we can transform our daily routines into powerful acts of environmental care.</p>
            <button><span><Link to='/subscribe'>SUBSCRIBE NOW</Link></span></button>
          </div>
        </div>
    </div>
  )
}

export default About