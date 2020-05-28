import React from 'react';

const MenuItem = ({ text, clickFn, className, children }) => {
  const [ textWidth, setTextWidth ] = React.useState( 0 );
  const [ isOver, setIsOver ] = React.useState( false );
  const em = 20;

  React.useEffect(() => {
    let canvas = document.createElement( "canvas" );
    let canvasText = canvas.getContext( "2d" );
    canvasText.font = "20px Serif";
    let canvasTextWidth = canvasText.measureText( text ).width;
    canvasTextWidth = Math.ceil( canvasTextWidth ) + 1.5 * em;
    setTextWidth( canvasTextWidth );

  }, [ textWidth, text ]);

  let styleDiv = {
    [ className[ 0 ]]: `-${ isOver ? textWidth + 1.5 * em : 0 }px`
  };

  let styleP = {
    width: `${ isOver ? textWidth : 0 }px`
  };

  return (
    <div
      className={ `menu-item box ${ className.join( " " )}` }
      onClick={ clickFn }
      onMouseEnter={() => setIsOver( true )}
      onMouseLeave={() => setIsOver( false )}
      style={ styleDiv }
    >
      <p className="text" style={ styleP }>{ text }</p>
      { children }
    </div>
  );
};

export default MenuItem;
