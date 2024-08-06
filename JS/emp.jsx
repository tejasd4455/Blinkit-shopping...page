import React from 'react'
function Employee ()
{
    return (
    <div>
        <h1>Employee Form</h1>
        <form>
    <input type='text' placeholder='Enter your name'><br></br></input>
    <input type='email' placeholder='Enter your email'><br></br></input>
    <input type='text' placeholder='Enter your number'><br></br></input>
<textarea rows={5} cols={25} placeholder='Enter your address'></textarea>
   <label>Select State:</label>
   <select>
    <option>Maharastra</option>
    <option>Punjab</option>
    <option>Gujrat</option>
    <option>Kerla</option>

   </select><br></br>
   <label>Gender</label>
   <input type='radio' name="r1"/>Male
   <input type='radio' name="r1"/>Female<br></br>
   <lable>Hobbies:</lable>
<input type='checkbox'/>Reading
<input type='checkbox'/>Playing
<input type='checkbox'/>Dancing
<input type='checkbox'/>Listening Music<br></br>
<input type='submit' value='Submit'/>
<input type='reset' value='Reset'/>
</form>
    </div>
    )
}