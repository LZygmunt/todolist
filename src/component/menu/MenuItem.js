import React from 'react';
import PropTypes from 'prop-types';

const FONT_SIZE = 20;

const getElWidth = ( text ) => {
  const canvas = document.createElement( 'canvas' );
  const canvasText = canvas.getContext( '2d' );

  canvasText.font = '20px Serif';
  let canvasTextWidth = canvasText.measureText( text ).width;

  canvasTextWidth = Math.ceil( canvasTextWidth ) + 1.5 * FONT_SIZE;

  return canvasTextWidth;
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
    ...classes,
  ].join( ' ' );

  const textWidth = getElWidth( text );

  const styleDiv = { [ classes[ 0 ] ]: `-${ isOver ? textWidth + 1.5 * FONT_SIZE : 0 }px` };

  const styleP = { width: `${ isOver ? textWidth : 0 }px` };

  return (
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
  );
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.arrayOf( PropTypes.string ).isRequired,
  clickFn: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
