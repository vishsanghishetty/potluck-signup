import Button from './Button'
import React from 'react'
import PropTypes from 'prop-types'; 

export default function RSVPForm({ onHandleResponseList}) {

  const [formRSVP, setFormRSVP] = React.useState({
    attending: '',
    quantityFood: '',
    quantityPeople: '',
    foodItems: '',
    firstName: '',
    lastName: ''
  })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formRSVP.attending === '') return;
    if(!formRSVP.quantityFood || !formRSVP.quantityPeople || !formRSVP.foodItems || !formRSVP.firstName || !formRSVP.lastName || !formRSVP.attending === null) {
      alert('Please check and fill all the fields');
      return;
    }

    
    const newResponse = {
      attending: formRSVP.attending,
      quantityFood: formRSVP.quantityFood,
      quantityPeople: formRSVP.quantityPeople,
      items: formRSVP.foodItems,
      firstName: formRSVP.firstName,
      lastName: formRSVP.lastName,
      id: Date.now()
    }
    onHandleResponseList(newResponse);
    setFormRSVP({
      attending: '',
      quantityFood: '',
      quantityPeople: '',
      foodItems: '',
      firstName: '',
      lastName: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = typeof value === 'string' ? value : Number(value);
    setFormRSVP({
      ...formRSVP,
      [name]: newValue
    })
  }

  const handleClick = (e) => {
    const { name } = e.target;
    setFormRSVP({
      ...formRSVP,
      [name]: e.target.value
    })
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className='font-semibold mb-2 tracking-wide'> RSVP FORM </h1>
          <p className='mb-4'>Will you be attending on Sat., 07/08/2023 from 12:00pm - 2:00pm EDT?</p>
          <Button handleClick={handleClick} value="Yes" name="attending">Yes</Button>
          <Button handleClick={handleClick} value="No" name="attending">No</Button>
          <Button handleClick={handleClick} value="MayBe" name="attending">May Be</Button>
         
          <p className='mb-4'>How many will be attending, including yourself?</p>

        <select className='mb-4' name="quantityPeople" onChange={handleChange} value={formRSVP.attending}>
                <option value="">Select People Attending</option>
                <option value="1"> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
        </select>

        <h5 className='font-semibold mb-2 tracking-wide'>Sign me Up for</h5>

        <select className='mr-6' name="foodItems" onChange={handleChange} value={formRSVP.foodItems}>
              <option value="">Select Food</option>
              <option value="table cloth"> Table Cloth </option>
              <option value="cutlery"> Forks, Spoons and Knives </option>
              <option value="cups and water"> Cups and Water </option>
              <option value="main entree"> Main Entree </option>
              <option value="appetizer"> Appetizer </option>
              <option value="dessert"> Dessert </option>
              <option value="drinks"> Drinks 2-Litre Sodas </option>
              <option value="cookies"> Cookies </option>
              <option value="chips and gaucamole"> Chips and Gaucamole </option>
              <option value="napkins"> Napkins </option>              
        </select>

        <select className='mr-6' name="quantityFood" onChange={handleChange} value={formRSVP.quantityFood}>
          <option value="">Select Quantity</option>
                <option value="1" > 1 </option>
                <option value="2"> 2 </option>
          </select>
          <label className='mr-2'>First Name : </label><input className='mr-6' placeholder="enter first name" onChange={handleChange} type="text" name="firstName" value={formRSVP.firstName} placeholder="First Name" />
          <label className='mr-2'>Last Name : </label><input className='mr-2' placeholder="enter last name" onChange={handleChange} type="text" name="lastName" value={formRSVP.lastName} placeholder="Last Name" />
          <Button>Sign Up</Button>
          </div>
        </form>

    </div>
  )
}


RSVPForm.propTypes = {
  onHandleResponseList: PropTypes.func
}
