import React from 'react'

const RadioInput = ({id, name, value, checked, onChange, label}) => {
  return (
    <div className="flex items-center py-4">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        
        className={`w-8 h-8 border-2 rounded-full cursor-pointer appearance-none hover:border-none hover:bg-lightpurple transition-all duration-300 ${
          checked ? 'border-[#685AAD] border-8' : 'border-[#685AAD] border-[3px]'
        } focus:outline-none`}
      />
      <label className='text-[#685AAD] text-2xl pl-6' htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default RadioInput