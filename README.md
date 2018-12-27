# rc-hoho-checkbox
---

React Checkbox Component (web)


![react](https://img.shields.io/badge/react-%3E%3D_16.0.0-green.svg)
[![node version][node-image]][node-url]
[![npm download][download-img]][download-url]

[npm-url]: http://npmjs.org/package/carousel
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-img]: https://img.shields.io/npm/dm/rc-hoho-checkbox.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-hoho-checkbox

## Screenshots

<img src="https://github.com/hansinhu/rc-hoho-checkbox/blob/master/assets/img/demoimg1.png?raw=true" width="288"/>

## Usage
```
npm install rc-hoho-checkbox
```
```
import Checkbox from 'rc-hoho-checkbox';


constructor (props) {
  super(props)
  this.state = {
    check1: true,
    check2: true,
    check3: false,
    check4: true,
  }
}

handleCheck1 = (e) => {
  this.setState({
    check1: e.target.checked,
  })
}

<Checkbox onChange={this.handleCheck1} disabled={true} checked={check1} />
<Checkbox checked={check2}>hansin</Checkbox>
<Checkbox checked={check3} disabled={true} />
<Checkbox checked={check4} disabled={true} />

```

[see example](https://github.com/hansinhu/rc-hoho-checkbox/blob/master/examples/demo.tsx)


## Development

```
npm i
npm start
```

## Example

http://localhost:8000/examples/

## install

[![npm download][download-img]][download-url]


## API

### checkbox props

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
|checked | default value | boolean |  |
|disabled | disabled | boolean | {} |
|onChange | callback | function |  |
|className | className | String | '' |


## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-hoho-checkbox is released under the MIT license.
