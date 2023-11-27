import React from 'react';
import { MDBFooter,MDBContainer } from 'mdb-react-ui-kit';
const Footer=()=>{
    return(
        <MDBFooter bgColor='dark' className='text-center text-white fixed-bottom'>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Scholar's Git@
        <a className='text-white' href='www.jiit.ac.in'>
          jiit.ac.in
        </a>
      </div>
    </MDBFooter>


    )
}
export default Footer;