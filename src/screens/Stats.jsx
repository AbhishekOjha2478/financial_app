import React from "react";
import Graph from "../components/Graph";
import { Element } from 'react-scroll';

export default function Stats() {
  return (
    <>
      <Element id="section2" name="section2" className="section">
      <div><Graph></Graph></div>
    </Element>
    </>
  );
}
