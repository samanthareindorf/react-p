/*import lreact or rafce*/  
import React from 'react';

/*import linkedin icon and use on line 16*/    
import{BsLinkedin} from 'react-icons/bs'

/*import github icon and use on line 17*/ 
import {FaGithub} from 'react-icons/fa'

/*import github icon and use on line 18*/ 
import {GrInstagram} from 'react-icons/gr'

const Socials = () => {
    return (
        <div className='socials'>
            <a href="https://www.linkedin.com/in/samanthareindorf/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/samreindorf" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/ghristianity/" target="_blank"><GrInstagram/></a>

        </div>
    )

}

export default Socials