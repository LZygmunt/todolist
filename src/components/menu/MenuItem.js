import React from 'react';
import PropTypes from 'prop-types';

const FONT_SIZE = 20;
const MAX_TEXT_WIDTH = 220; // alawys smaller by 30px than the item width

const getElWidth = ( text ) => {
  const canvas = document.createElement( 'canvas' );
  const canvasText = canvas.getContext( '2d' );

  canvasText.font = '20px Serif';
  let canvasTextWidth = canvasText.measureText( text?.toUpperCase()).width;

  canvasTextWidth = Math.ceil( canvasTextWidth );

  return canvasTextWidth > MAX_TEXT_WIDTH ? MAX_TEXT_WIDTH : canvasTextWidth;
};

const MenuItem = ({
  text,
  clickFn,
  classes,
  name,
  children,
}) => {
  const [ isOver, setIsOver ] = React.useState( false );
  const classNames = [
    'menu-item',
    'box',
    classes,
  ].join( ' ' );

  const textWidth = getElWidth( text );

  const styleDiv = { [ classes ]: `-${ isOver ? textWidth + 1.5 * FONT_SIZE : 0 }px` };

  const styleP = { width: `${ isOver ? textWidth : 0 }px` };

  return text
    ? (
      <div
        className={ classNames }
        onClick={ clickFn }
        onMouseEnter={() => setIsOver( true )}
        onMouseLeave={() => setIsOver( false )}
        onKeyPress={() => {}}
        style={ styleDiv }
        data-name={ name }
        role="button"
        tabIndex={ 0 }
      >
        <p className="text" style={ styleP }>{ text }</p>
        { children }
      </div>
    )
    : null;
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.arrayOf( PropTypes.string ).isRequired,
  clickFn: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
};

MenuItem.defaultProps = { text: '' };

export default MenuItem;
