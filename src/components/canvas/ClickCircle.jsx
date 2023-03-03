import React, { useState, useRef, useEffect } from "react";

// 
// 


export default function ClickCircle(props) {
  const { setup, style, id } = props;
  const [mouse, setMouse] = useState({ x: null, y: null });
  const canvasRef = useRef(null)

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 30 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };
  

  const updateMouse = (event) =>{
    setMouse({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    console.log(mouse);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    if (setup.fullscreen) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  


  return (
    <canvas
      onMouseDown={updateMouse}
      ref={canvasRef}
      id={id}
      width={setup.width}
      height={setup.height}
      style={style}
    ></canvas>
  );
}
