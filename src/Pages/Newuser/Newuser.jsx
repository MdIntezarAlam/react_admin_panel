import '../../styles/newuser.css'

const Newuser = () => {
  return (
    <div className='newuser'>
      <h1 className='newuser_title'>New User</h1>
      <form className='newuser_form'>
        <div className="newuser_form_item">
          <label >User Name:</label>
          <input type="text" placeholder='intezar' />
        </div>
        <div className="newuser_form_item">
          <label >Full Name:</label>
          <input type="text" placeholder='intezar Alam' />
        </div>
        <div className="newuser_form_item">
          <label >Email:</label>
          <input type="email" placeholder='inte77@gmail.com' required />
        </div>
        <div className="newuser_form_item">
          <label >Password:</label>
          <input type="password" placeholder='password' required />
        </div>
        <div className="newuser_form_item">
          <label >Phone:</label>
          <input type="number" placeholder='+912344124341' />
        </div>
        <div className="newuser_form_item">
          <label >Address:</label>
          <input type="address" placeholder='Bihar India' />
        </div>
        <div className="newuser_form_item">
          <label >Gender</label>
          <div className="newuser_gender">
            <input type="radio" name="gender" id='male' value="male" />
            <label for="Male">Male</label>
            <input type="radio" name="gender" id='female' value="female" />
            <label for="Female">Female</label>
            <input type="radio" name="gender" id='other' value="other" />
            <label for="Other">Other</label>
          </div>
        </div>
        <div className="newuser_form_item">
          <label >Active</label>
          <select name='active' id='active' className='newuser_select'>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newuser_btn">Create</button>
      </form>
    </div>
  )
}
export default Newuser;
