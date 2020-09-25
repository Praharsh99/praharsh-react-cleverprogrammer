import React, { useState } from 'react'

import {
  Avatar,
  Button,
  Input,
  Navbar,
  Card,
  Loader,
  Modal,
  Alert
} from '@praharsh/react-cleverprogrammer'
import '@praharsh/react-cleverprogrammer/dist/index.css'

const alertTypes = ['primary', 'success', 'error', 'warning', 'secondary', null]

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(5)

  const handleAlert = () => {
    setCount(count <= 4 ? count + 1 : 0)
  }

  return (
    <>
      {alertTypes[count] && (
        <Alert
          type={alertTypes[count]}
        >{`This is a ${alertTypes[count]} type alert`}</Alert>
      )}
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
          <Input
            label='Variant - rounded input & type - password'
            variant='rounded'
            type='password'
          />
          <br />
          <br />
          <Input label='Variant - bordered' variant='bordered' />
          <br />
          <br />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button>This is a button</Button>
            <Button
              style={{ zIndex: '99999999' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              Toggle Modal
            </Button>
          </div>
        </Card>
      </div>

      <Button className='alert--btn' onClick={handleAlert}>
        Click to view Alerts {'❗'}
      </Button>

      <Modal isOpen={isOpen}>
        <div className='loader-container'>
          <Loader loaderColor='#fff' loaderBackgroundColor='#000' />
        </div>
      </Modal>
    </>
  )
}

export default App
