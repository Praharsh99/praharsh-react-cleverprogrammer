import React from 'react'

import { Avatar, Button, Input, Navbar } from '@praharsh/react-cleverprogrammer'
import '@praharsh/react-cleverprogrammer/dist/index.css'

const App = () => {
  return (
    <>
      <Navbar imgSrc='https://i.ibb.co/RNkb01p/download.jpg'>
        <l1>About</l1>
        <l1>Resources</l1>
        <l1>Careers</l1>
        <a href='https://www.cleverprogrammer.com/'>
          <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
        </a>
      </Navbar>

      <div className='container'>
        <Input label='This is the default input' />
        <br />
        <br />
        <Input label='Variant - rounded input' variant='rounded' />
        <br />
        <br />
        <Input label='Variant - bordered' variant='bordered' />
        <br />
        <br />
        <Button>This is a button</Button>
      </div>
    </>
  )
}

export default App
