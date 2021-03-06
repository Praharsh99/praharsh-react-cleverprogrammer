# @praharsh/react-cleverprogrammer

> Use the cool clever programmer UI components in your react project

[![NPM](https://img.shields.io/npm/v/@praharsh/react-cleverprogrammer.svg)](https://www.npmjs.com/package/@praharsh/react-cleverprogrammer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @praharsh/react-cleverprogrammer
```

```yarn
yarn add @praharsh/react-cleverprogrammer
```

## Simple Example

Here is a quick example to get you started, **it's all you need**
:

```jsx
import React from 'react'

import { Button } from '@praharsh/react-cleverprogrammer'
import '@praharsh/react-cleverprogrammer/dist/index.css'

const CleverProgrammerComponent {
 return (
   <Button>
    React is 🔥
   </Button>
 )
}
```

## Demo

A quick demo can be found here [demo 🔥](https://praharsh99.github.io/praharsh-react-cleverprogrammer/)

## Components

This package has a few components, other will be added in the future 🤩

- Navbar
- Avatar
- Button
- Input
- Modal
- Card
- Loader
- Alert

### USAGE

#### `<Navbar>`

This will create a navigation bar with a **brand/logo** section and a **links** section

##### Props

###### `imgSrc`

If you want a custom image logo you can pass the link(which points to a image). If the link doesn't point an image then the default **Brand** text will appear

```jsx
<Navbar imgSrc='<LINK_TO_LOGO>' />
```

###### `component`

If you want only text or any other custom component to appear instead of the image you should pass a valid react component to this prop

```jsx
<Navbar component={<h1>My Brand Name</h1>} />
or
<Navbar component={<MyLogoComponent />} />
```

###### `sticky`

The navigation bar can be sticky if you pass the **sticky** prop

```jsx
<Navbar sticky />
```

###### `children`

To have some links in the navigation bar you should pass those elements as children, i.e., wrap them inside **Navbar** component

```jsx
<Navbar component={<h1>My Brand Name</h1>}>
  <li>About</li>
  <li>Careers</li>
  <li>Contact</li>
  <a>Sign in</a>
</Navbar>
```

#### `<Button>`

The example for how to use this component is shown under `SIMPLE EXAMPLE` above ☝🏼

##### Props

###### `children`

The content that is passed between the button tags are children. By default the content inside the button would be `Clever Programmer`, to change this you need to pass something like

```jsx
<Button>Hello Guys!!</Button>
```

###### `type`

By, default the type for the button is `button`. You can change this by passing the type attribute

```jsx
<Button type='submit'>Login</Button>
```

> You can even pass the event listeners to the button component. For example:

```jsx
<Button onClick={doSomething...}>{counter}</Button>
```

#### `<Avatar />`

##### Props

###### `src`

This is the only this component needs, which will be an image link. If this is not passed then the default profile picture will be the clever programmer's logo 😋

```jsx
<Avatar src='<LINK_TO_IMAGE>' />
```

#### `<Input />`

##### Props

###### `type`

This component only works for input types like `text, email, and password`. By default the type is `text`

```jsx
<Input type='text/email/password' />
```

###### `variant`

This will determine how the input bar is styled

**default**

By default the variant is **default**

```jsx
<Input variant='default' />
```

**rounded**

This will give you a rounded input bar

```jsx
<Input variant='rounded' />
```

**bordered**

A input bar with a bottom border is rendered

```jsx
<Input variant='bordered' />
```

###### `label`

If you want to have some text inside the input before user types (like placeholder!) you can pass it in the **label**

```jsx
<Input label='Username' />
<Input label='Email' />
```

> You can also pass the `value` `onChange` `required` props if needed

#### `<Modal>`

##### Props

###### `isOpen`

This is a required prop, which controls the modal state
if **isOpen -> `true (or) any other truthy value` **, the modal appears on the screen
if **isOpen -> `false (or) any other falsy value (like NaN, '', undefined, null)` **, the modal will not render

```jsx
<Modal isOpen={true / false} />
```

###### `children`

The content that should be displayed in the modal

```jsx
<Modal>
  <LoginCardComponent />
  <Button type='submit'>Submit</Button>
  ....
</Modal>
```

###### `invert`

By default the background color of the modal is transparent black if you need a white transparent background pas this prop

```jsx
<Modal invert>...children</Modal>
```

#### `<Card>`

##### Props

###### `children`

The contents that need to be displayed inside the card

```jsx
<Card>
  <Input type='text' label='Username' />
  <Input type='password' label='Password' />
  <br />

  <Button type='submit'>Login</Button>
</Card>
```

###### `invert`

Good for dark themes! use this prop to change the background color to dark color

```jsx
<Card invert>contents inside...</Card>
```

#### `<Loader />`

##### Props

> All these props are optional

- `height` -> The height and width of the complete loader (default `85px`)
- `loaderColor` -> The loader color (default #fd9d00)
- `loaderBackgroundColor` -> The loader background color (default #000)

```jsx
<Loader height='100px' loaderColor='#fff' loaderBackgroundColor='#000' />
```

#### `<Alert>`

##### Props

###### `children`

Again! This will determine the content which should be displayed inside the alert

```jsx
<Alert>
  An alert message for you 🚀
</Alert>

or

<Alert>
  <h1>You can pass components too</h1>
  <Button>Click Me!</Button>
</Alert>
```

###### `type`

The **type** prop determines what type of alert you want to pop. Each type has its own color theme
Avaliable types are:

- Primary (default)
- Success
- Error
- Warning
- Secondary

## License

MIT © [Praharsh99](https://github.com/Praharsh99)
