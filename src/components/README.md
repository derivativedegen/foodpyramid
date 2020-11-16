# react-countdown-timer

## Lightweight, yet simple countdown timer built for React

### Requirements

- React (^16.4.2)

### Getting Started
_______

#### Copy repo to destination folder
```sh
git clone https://github.com/luismiddleton/react-countdown-timer.git
```

#### Import component
```js
\\ ES6
import Countdown from './path/to/component';
```
#### Initialize component

##### as a new instance of Date()
```js
<Countdown target={new Date('01-01-2050')} />
```

##### or Date('01-01-2050') parsed in milliseconds since January 1, 1970, 00:00:00 UTC
```js
<Countdown target={2524568400000} />
```

### Props
________

| Prop | propType |
| ------------- |:-------------:|
| target | `number` or `instanceOf(Date)` |




