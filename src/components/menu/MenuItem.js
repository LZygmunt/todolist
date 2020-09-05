import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import constants from 'utils/constants';

import TooltipWrapper from 'components/tooltip/TooltipWrapper';

const {
  globalIds: { TOOLTIP },
  menu: { quantities: { FONT_SIZE, MAX_TEXT_WIDTH }},
} = constants;

const getElWidth = ( text ) => {
  const canvas = document.createElement( 'canvas' );

  const canvasText = canvas.getContext( '2d' );

  canvasText.font = `${ FONT_SIZE }px Serif`;

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

  const textWidth = getElWidth( text );

  const styleDiv = { [ classes.split( ' ' )[ 0 ] ]: `-${ isOver ? textWidth + 1.5 * FONT_SIZE : 0 }px` };

  const styleP = { width: `${ isOver ? textWidth : 0 }px` };

  return text
    ? (
      <div
        className={ classNames(
          'menu-item', 'box', classes,
        )}
        onClick={ clickFn }
        onMouseEnter={() => setIsOver( true )}
        onMouseLeave={() => setIsOver( false )}
        onKeyPress={() => {}}
        style={ styleDiv }
        data-name={ name }
        role="button"
        tabIndex={ 0 }
      >
        <TooltipWrapper assignTo={ TOOLTIP } tip={ text }>
          <p className="text" style={ styleP }>{ text }</p>
        </TooltipWrapper>
        { children }
      </div>
    )
    : null;
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string.isRequired,
  clickFn: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
};

MenuItem.defaultProps = { text: '' };

export default MenuItem;
