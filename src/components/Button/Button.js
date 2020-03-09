import React from 'react';
import PropTypes from 'prop-types';
import cls from '../../utils/ClassNames';

import s from './Button.css';

const existBgs = {
    primary: 'primary',
    blue: 'blue',
    green: 'green',
    gray: 'gray',
    'light-gray': 'light-gray',
    'green-transparent': 'green-transparent',
    transparent: 'transparent',
    'blue-transparent': 'blue-transparent',
    'blue-border-transparent': 'blue-border-transparent',
    'gray-transparent': 'gray-transparent'
};

const existSizes = {
    '': '',
    sm: 'sm',
    'sm-rectangle': 'sm-rectangle',
    xs: 'xs',
    'xs-rectangle': 'xs-rectangle',
    'mobile-default': 'mobile-default'
};

class Button extends React.Component {
    render() {
        const { handleClick, disabled, content, type, styles, bg, size, fullWidth } = this.props;
        const bgClass = `bg-${existBgs[bg] || existBgs.primary}`;
        const styleNames = cls({
            [s.btn]: true,
            [s[size]]: true,
            [s[bgClass]]: true,
            [s.fullWidth]: fullWidth
        });
        return (
            // eslint-disable-next-line react/button-has-type
            <button
                type={type}
                className={styleNames}
                style={styles || {}}
                onClick={handleClick}
                disabled={disabled}
            >
                {content}
            </button>
        );
    }
}

export const propTypes = {
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    content: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    size: PropTypes.oneOf(Object.values(existSizes)),
    type: PropTypes.oneOf(['button', 'submit']),
    bg: PropTypes.oneOf(Object.values(existBgs)),
    styles: PropTypes.object,
    /** Ширина 100% */
    fullWidth: PropTypes.bool
};

Button.propTypes = propTypes;

Button.defaultProps = {
    bg: 'primary',
    size: '',
    fullWidth: false,
    type: 'button'
};

export default Button;
