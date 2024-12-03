import React from 'react'
import './Profile.css'
const Profile = (props) => {
  function close() {
    props.myState(false)
  }
  return (
    <>
      <div className={props.myState ?"profile_container" : "profile_container1"}>
<div className='close_btn'onClick={close}>
<button>Close</button>

</div>
        <div className='from'>
            <div className='from_conten'>
                <p>User</p>
                <input type="text" />
                <p>Pass</p>
                <input type="text" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Profile
