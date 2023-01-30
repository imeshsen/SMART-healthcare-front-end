import React, { useState } from 'react'
import "./User.css"
export default function User() {
    const [type,setType] = useState("");
    const [name,setName] = useState("");
  return (
    <div className='user'>
        <h3>Welcome User</h3>
        <form>
            <div className='form'> 
        <h3>Select disease type</h3>
        <div className='type'>
        <select value={type}>
                <option value='common diseases'>Common Diseases</option>
                <option value='gastroenterological diseases'>Gastroenterological diseases</option>
                <option value='respiratory diseases'>Respiratory diseases</option>
                <option value='cardiovascular diseases'>Cardiovascular diseases</option>
                <option value='urologic diseases'>Urologic diseases</option>
                <option value='gynecological diseases'>Gynecological diseases</option>
                <option value='andrological diseases'>Andrological diseases</option>
                <option value='anorectal diseases'>Anorectal diseases</option>
                <option value='vascular diseases'>Vascular diseases</option>
            </select>
        </div>
            
            <div className='name'>
            <h3>Or select the disease directly</h3>
            <select value={name}>
                <option value='common diseases'>Common Diseases</option>
                <option value='gastroenterological diseases'>Gastroenterological diseases</option>
                <option value='respiratory diseases'>Respiratory diseases</option>
                <option value='cardiovascular diseases'>Cardiovascular diseases</option>
                <option value='urologic diseases'>Urologic diseases</option>
                <option value='gynecological diseases'>Gynecological diseases</option>
                <option value='andrological diseases'>Andrological diseases</option>
                <option value='anorectal diseases'>Anorectal diseases</option>
                <option value='vascular diseases'>Vascular diseases</option>
            </select>
            </div>
            </div>
        </form>
    </div>
  )
}
