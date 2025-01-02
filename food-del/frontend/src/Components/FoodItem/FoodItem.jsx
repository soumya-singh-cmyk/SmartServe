import React, { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
const FoodItem = ({image, name, price, description , id}) => {
    
    const [itemCount, setItemCount] = useState(0);//One state variable is created for each food item.Not a good practice.Instead,create one card item object.
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    return(
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={url+"/images/"+image} alt="" className="food-item-image" />
        {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
