import React, {useContext} from 'react'
import axios from 'axios'
import { IOffers } from '../helpers/interface'
import { MyContext } from "../helpers/carContext";

const Button = ({offers, id} : {offers: IOffers, id:number}) => {
  const [refresh, setRefresh] = useContext(MyContext);
  const Delete = async (e: any) => {
    e.stopPropagation();
    await axios.delete(`http://localhost:8000/offers/${id}`)
      .then(res => setRefresh(!refresh))
      .catch(err => console.error(err.message))
  }
  const Active = async (e: any) => {
    e.stopPropagation();
    const availability = !offers.availability;
    await axios.patch(`http://localhost:8000/offers/${id}`, {
      availability 
    })
      .then(res => setRefresh(!refresh))
      .catch(err => console.error(err.message))
  }  
  return (
    <div className='buttonGroup'>
      <button data-testid={`buttonActive${id}`} onClick={Active} className={`${offers.availability ? 'activeButton ' : 'deactivateButton'}`}>{`${offers.availability ? 'Active' : 'Not Active'}`}</button>
      <button data-testid={`buttonDelete${id}`} onClick={Delete} className='deleteButton'>Delete</button>
    </div>
  )
}

export default Button