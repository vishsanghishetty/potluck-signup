import { useState } from 'react'
import Button from './Button'
import RSVPResponses from './RSVPResponses'
import RSVPForm from './RSVPForm'
import potluck from '../assets/potluck.png'

export default function HomePage() {
  const [showRSVPForm, setShowRSVPForm] = useState(false)
  const [responseList, setResponseList] = useState([])
  const btnText = showRSVPForm ? 'Close RSVP Form' : 'RSVP Now'
  function handleClick() {
    setShowRSVPForm(!showRSVPForm)
  }

  function handleResponseList(response) { 
    setResponseList([...responseList, response])
  }

  function handleDeleteSignUps(id) {
    setResponseList((responseList) => responseList.filter(response => {
      console.log(response);
      return response.id !== id
    }))
  }

  return (
    <div>
      <h1 className='text-center text-4xl mb-8 font-bold'>Office Potluck</h1>
      <div className='flex  justify-center items-center space-x-10'>
        <div className='h-80'>
        <img className="object-contain w-full h-full rounded-xl" src={potluck} alt="Potluck" />
       </div>   
      
        <div>
          <p className='mb-4'>Please join us for the next office potluck.</p>
          <p className='mb-4'> Everyone is welcome to join, and the more helpers we have, the better!</p>
          <div className='mb-4'>
            <strong>Date: </strong><p> 07/08/2023 (Sat.)</p>
          </div>
          <div className='mb-4'>
            <strong>Time: </strong><p> 12:00pm - 2:00pm EDT</p>
          </div>
          <div className='mb-4'>
            <strong>Location: </strong><p> Team Lounge</p>
          </div>
          <div className='mb-4'>
            <strong>Created by: </strong><p> Vishali Kamenani</p>
            </div>
        </div>
       </div> 
        <br></br>
        
        <div>
      <h3 className='mb-2'>Will you be attending the event?</h3>
      <Button handleClick={handleClick}>{btnText}</Button>
      <p className='mb-6'>Did you already RSVP? You can <em><a>Edit your RSVP</a></em></p>

        </div>
      
      <div>
        {showRSVPForm && <RSVPForm onHandleResponseList={handleResponseList} />}
      </div>
      <div>
        {responseList.length > 0 && <RSVPResponses responseList={responseList} onDeleteSignUp={handleDeleteSignUps} />}
      </div>
    </div>
  )
}
