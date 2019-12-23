---
name: Readme
route: /readme
---

import demo from "./notification_demo.gif"

# cb-react-notifications

> A React Component used to render notifications with default styles and also allows to customize entire notification component
> by providing necessary props and styles.

[![NPM](https://img.shields.io/npm/v/cb-react-notifications.svg)](https://www.npmjs.com/package/cb-react-notifications) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<center><img src={demo} height="320px"/></center>

## Getting Started

### Install

Install using npm or yarn

```bash
npm install --save cb-react-notifications
```

or

```bash
yarn add --save cb-react-notifications
```

### Adding to project

Just import the default Notifications component from the package and use the component in project.

```jsx
import Notifications from "cb-react-notifications";
```

## Usage

This Component can be used in three ways :

- Default

```jsx
<Notifications />
```

- Custom Component

```jsx
<Notifications renderItem={CustomComponent} />
```

- Fully Customizable

```jsx
<Notifications classNamePrefix="okrjoy" />
```

To know more, visit [cb-react-notifications](/) docs

## License

MIT © [NaveenrajV](https://github.com/NaveenrajV)