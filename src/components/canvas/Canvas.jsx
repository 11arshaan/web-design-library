import React, {useRef} from "react";





export function Canvas2D(props) {
  const { draw, options, style, id } = props;
  const canvasRef = useRef(null);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={options.width}
      height={options.height}
      style={style}
    ></canvas>
  );
}




export function resizeCanvasToDisplaySize(canvas) {
    
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false
}



function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect()
  
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio:ratio=1 } = window
    const context = canvas.getContext('2d')
    canvas.width = width*ratio
    canvas.height = height*ratio
    context.scale(ratio, ratio)
    return true
  }

  return false
}