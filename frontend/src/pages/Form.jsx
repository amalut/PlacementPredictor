import React from 'react'
import './Form.css'
function Form() {
  return (
    <>
        <div className='menu1'>
          <h1 className=" logo mb-10 text-blue-600 text-3xl font-bold font-['Open Sans']">Placement Predictor</h1>
        </div>
        <p className='form-para'>Enter Details</p>
        <div className='div-form'>
          <form>
            <div className="col-container">
            <div className='col1'>
              <label className='form-label'>Name</label>
              <input className='form-input' type="text" placeholder='Enter Name' required/>
              <label className='form-label'>Date of Birth</label>
              <input className='form-input' type="date"/>
              <label className='form-label'>College</label>
              <input className='form-input' type="text"/>
              <label className='form-label'>Year of Pass</label>
              <input className='small-input' type="month"/>
              <div className=''>
                <label className='form-label'>10th Score</label>
                <input className='small-input' type="number"/>
                <label className='form-label'>12th Score</label>
                <input className='small-input' type="number"/>
              </div>
              <label className='form-label'>Number of Backlogs</label>
              <input className='form-input' type="number"/>
              <label className='form-label'>Number of Intership</label>
              <input className='form-input' type="number"/>
            </div>
            <div className='col1'>
              <label className='form-label'>Age</label>
              <input className='small-input' type="number" required/>
              <label className='form-label'>Gender</label>
              <select className='small-input'>
                <option value="male">Male</option>
                <option>Female</option>
                <option>other</option>
              </select>
              <label className='form-label'>Department</label>
              <input className='form-input' type="text"/>
              <label className='form-label'>Current CGPA</label>
              <input className='small-input' type="number"/>
              <label className='form-label'>Linked in URL</label>
              <input className='form-input' type="text"/>
              <label className='form-label'>Number of Intership</label>
              <input type="number"/>
            </div>
            
           </div>
           <button>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Form