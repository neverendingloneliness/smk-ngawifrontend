import React from 'react'

interface NavbarProps {
    navlist : Array<{key:string; label:string}>,
    currentSection : string
    onNavClick : (sectionKey: string) => void
}

const Navbar : React.FC<NavbarProps> = ({navlist, currentSection, onNavClick }) => {
  return (
    <nav>
        <ul>
            {navlist.map((index) => (
                <li key={index.key}>
                    <button onClick={() => onNavClick(index.key)} className={`duration-300 ${currentSection === index.key ? 'text-white' : 'hover:text-gray-800'}`}>
                        {index.label}
                    </button>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar