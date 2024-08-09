import Button from "./Button"
import LeftArrow from '../assets/images/left-arrow.svg'
import RightArrow from '../assets/images/right-arrow.svg'
import AppleBasket from "./AppleBasket"
import './AppleCounter.css'
import { useState } from "react"

// let RightAppleCount = 0;
// let LeftAppleCount = totalAppleCount - RightAppleCount;
const AppleCounter = () => {
  const totalAppleCount = 10;
  const [RightAppleCount,setRightAppleCount] = useState(0);
  const [LeftAppleCount,setLeftAppleCount] = useState(totalAppleCount - RightAppleCount);

  const leftClickHandelar = () =>{
    if(RightAppleCount > 0){
      setRightAppleCount(RightAppleCount-1);
      setLeftAppleCount(LeftAppleCount+1);
    }
  }

  const rightClickHandelar = () =>{
    if(LeftAppleCount > 0){
      setRightAppleCount(RightAppleCount+1);
      setLeftAppleCount(LeftAppleCount-1);
    }
  }
  return (
    <section>
        <AppleBasket appleCount={LeftAppleCount} basketName="Basket 1" />
        <Button clickHandelar={leftClickHandelar} imageUrl={LeftArrow}/>

        <Button clickHandelar={rightClickHandelar} imageUrl={RightArrow}/>
        <AppleBasket appleCount={RightAppleCount} basketName="Basket 2" />
    </section>
  )
}

export default AppleCounter