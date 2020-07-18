import React, { useEffect } from "react";

export function styledAgain(component) {
  return function ttlInterpolator(strings, ...funs) {
    return props => (
      <PlaceholderComponent
        component={component}
        interpolate={interpolationFunction(strings, funs)}
        {...props}
      />
    );
  };
}

function interpolationFunction(strings, funs) {
  return props => {
    let stylesAcc = "";
    strings.forEach((str, i) => {
      stylesAcc += str + (funs[i] ? funs[i](props) : "");
    });
    return stylesAcc;
  };
}

function PlaceholderComponent({ component, interpolate, ...restProps }) {
  useEffect(() => {
    const className = "componentStyles"; //sha of content of the styles can be useful
    document.getElementsByTagName("style")[0].innerHTML += `
    .${className} {
      ${interpolate(restProps)}
    };
    `;
  }, []);

  return component({ className: "componentStyles", ...restProps });
}
