import React from 'react';

import Button from '../../../../../components/Button';
import styles from './exampleStyle.css';

const example1 = `
class Wrapper extends React.Component {
  render() {
  const bg = [
        'primary',
        'blue',
        'green',
        'gray',
        'green-transparent',
        'transparent',
        'blue-transparent',
        'gray-transparent'
    ];
    return (
      <div className="${styles.list}">
        {bg.map(function(btn) {
          return (
            <div className="${styles.item}" key={btn}>
              <span>{btn}</span>
              <Button 
                content="Text"
                bg={btn}
                handleClick={() => console.log('click')} 
              />
            </div>
          )
        })}
      </div>
    )
  }
}
`.trim();

const example2 = `
class Wrapper extends React.Component {
  render() {
  const sizes = ['', 'sm', 'sm-rectangle', 'xs', 'xs-rectangle'];
    return (
      <div className="${styles.list}">
        {sizes.map(function(size) {
          return (
            <div className="${styles.item}" key={size}>
              <span>{size}</span>
              <Button 
                content="Text"
                bg="blue"
                size={size}
                handleClick={() => console.log('click')} 
              />
            </div>
          )
        })}
      </div>
    )
  }
}
`.trim();

const mainExample = () => <Button content="Button" bg="blue" />;

export { example1, example2, mainExample };
