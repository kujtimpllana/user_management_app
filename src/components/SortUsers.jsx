import React, {useState} from 'react'
import { FaFilter } from "react-icons/fa6";

const SortUsers = ({sortUsersByName, setSortUsersByName}) => {
  return (
    <button onClick={() => setSortUsersByName(!sortUsersByName)} className={` ${sortUsersByName && "text-[var(--light-color)] bg-[var(--dark-color)]"} text-xl font-bold py-[0.4rem] px-[1rem] text-[var(--dark-color)] border-4 border-[var(--dark-color)] rounded-[0.4rem] flex items-center gap-[0.6rem] hover:bg-[var(--dark-color)] hover:text-[var(--light-color)] transition-colors duration-200 ease-in-out`}><FaFilter className="font-bold text-2xl click_cursor"/>Sort A-Z</button>
  )
}

export default SortUsers