import React from 'react'

import {
  Avatar,
  Button,
  Input,
  Navbar,
  Card,
  Loader,
  Modal
} from '@praharsh/react-cleverprogrammer'
import '@praharsh/react-cleverprogrammer/dist/index.css'

const App = () => {
  return (
    <>
      <Navbar invert sticky imgSrc='https://i.ibb.co/RNkb01p/download.jpg'>
        <span>About</span>
        <span>Resources</span>
        <span>Careers</span>
        <a href='https://www.cleverprogrammer.com/'>
          <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
        </a>
      </Navbar>

      <div className='container'>
        <Card invert>
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
        </Card>
      </div>

      <Modal>
        <div className='loader-container'>
          <Loader
            loaderColor='#4949'
            loaderBackgroundColor='#000'
            loaderWidth='5px'
            loaderBackgroundWidth='2px'
          />
        </div>
      </Modal>
    </>
  )
}

export default App
