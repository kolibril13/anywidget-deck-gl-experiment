import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from "@deck.gl/layers";
import "./widget.css";

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

export const render = createRender(() => {
  const [value, setValue] = useModelState("value");
  const layers = [new LineLayer({ id: "line-layer", data })];

  return (
    <div style={{position:"relative", width: "500px", height: "500px" }}>
      <h1>hello</h1>
	  <DeckGL
       initialViewState={INITIAL_VIEW_STATE}
       controller={true}
       layers={layers}
     />
    </div>
  );
});



