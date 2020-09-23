import React from 'react'

import { Avatar, Button, Input, Navbar } from '@praharsh/react-cleverprogrammer'
import '@praharsh/react-cleverprogrammer/dist/index.css'

const App = () => {
  return (
    <>
      <Navbar component={<h1>Clever Programmer</h1>}>
        <l1>About</l1>
        <l1>Resources</l1>
        <l1>Careers</l1>
        <l1>Signout</l1>
        <a href='https://github.com/'>Hello</a>
      </Navbar>
      <br />
      <br />
      <Avatar />
      <br />
      <br />
      <Button />
      <br />
      <br />
      <br />
      <Input />
      <br />
      <br />
    </>
  )
}

export default App
