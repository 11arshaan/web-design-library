import { useEffect, useRef } from "react";

import * as d3 from "d3";

export default function Tutorial() {
  const domRef = useRef();

  useEffect(() => {
    const w = d3.select(domRef.current);
    const p = w.append("h1").text("Hoo").style("color", "lime");
    console.log(w, p);
    console.log(domRef.current);
  }, []);

  return (
    <div ref={domRef} className="w">
      <h1>Woo</h1>
    </div>
  );
}
