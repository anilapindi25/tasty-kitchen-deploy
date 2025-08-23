import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Courosuel = ()=>{
  const [offers,setOffers] = useState([]);
   const settings = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,            
  autoplaySpeed: 3000,        
  infinite: true,            
  arrows: false    
}


 const jwtToken = Cookies.get('jwt_token')
     const url = "https://apis.ccbp.in/restaurants-list/offers"
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
useEffect(()=>{
  const fetchoffers = async () =>{
    const response = await fetch(url,options)
    const data = await response.json() // when we console it we are getting response as offers object
    console.log(data) 
    if(response.ok === true){
      setOffers(data.offers)
    }
  }
fetchoffers()
},[])
  return(
<div className = "slider-container">
  <Slider {...settings}>
    {offers.map((offer) => (
          <div key={offer.id} className="image">
            <img src={offer.image_url} alt="offer" className="offer-image" />
          </div>
        ))}
  </Slider>
</div>
)
}
export default Courosuel