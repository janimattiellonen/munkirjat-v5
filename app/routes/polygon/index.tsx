import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 200px;
  width: 1000px;
  height: 1000px;
  border: solid red;
`;

const PolygonWrapper = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
  background: white;
`;

const Polygon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Circle = styled(Polygon)`
  position: absolute;
  background: var(--color);
  clip-path: circle(var(--size) at var(--percentage));
`;

const Box = styled.div`
  margin: 0 auto;
  margin-top: 64px;
  margin-bottom: 164px;
  width: 100px;
  height: 100px;
  border: solid 2px black;
  border-radius: 5px;
  background: deeppink;
  transition: transform 1s;

  &:hover {
    cursor: pointer;
    width: 200px;
    height: 200px;
    /* animation: rotation 2s ease-in infinite, scaler 4s ease-in infinite;*/

    transition: transform 1s ease-in-out, width 0.5s ease-in-out,
      height 1s ease-in-out;
    transform: rotate(145deg);
  }

  @keyframes example {
    from {
      background-color: red;
    }
    10% {
      background-color: blue;
    }

    20% {
      background-color: green;
    }

    30% {
      background-color: pink;
    }

    40% {
      background-color: black;
    }

    to {
      background-color: yellow;
    }
  }

  @keyframes scaler {
    0% {
      transform: scale(2, 2);
    }

    50% {
      transform: scale(1, 1);
    }

    100% {
      transform: scale(2, 2);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotation2 {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(359deg);
    }
  }
`;

const Foppa = styled.div({
  width: "100px",
  height: "100px",
  background: "red",
  "&:hover": {
    cursor: "pointer",
  },
});

const Feppa = styled.div`
  width: 100px;
  height: 100px;
  background: yellow;
  &:hover {
    cursor: pointer;
  }
`;

const ColourChanger = styled.div`
  width: 200px;
  height: 200px;

  animation: example 5s ease-in infinite, scaler 4s ease-in infinite;
`;

const ColourChangerWrapper = styled.div`
  width: 200px;
  height: 200px;
  animation: rotation2 60s linear infinite;
`;

const AutoBox = styled(Box)`
  animation: rotation 2s ease-in infinite, scaler 4s ease-in infinite;
`;

const renderCircles = (color: string) => {
  const circles = [];

  const getSize = (index: number): string => {
    if (index === 1 || index === 9) {
      return "1%";
    }

    if (index === 2 || index === 8) {
      return "1.25%";
    }

    if (index === 3 || index === 7) {
      return "1.5%";
    }

    if (index === 4 || index === 6) {
      return "1.75%";
    }

    return "2%";
  };

  // vertical
  for (let i = 1; i < 10; i++) {
    circles.push(
      <Circle
        style={{
          ["--size" as any]: getSize(i),
          ["--color" as any]: color,
          ["--percentage" as any]: `center ${i}0%`,
        }}
      />
    );
  }

  // horizontal
  // clip-path: circle(2% at top 50% left 10%);

  for (let i = 1; i < 10; i++) {
    circles.push(
      <Circle
        style={{
          ["--size" as any]: getSize(i),
          ["--color" as any]: color,
          ["--percentage" as any]: `top 50% left ${i}0%`,
        }}
      />
    );
  }

  return circles;
};

export default function PolygonPage() {
  return (
    <>
      <Main className="ml-4 mt-4">
        <PolygonWrapper>
          <Polygon style={{ transform: "rotate(90deg)" }}>
            {renderCircles("deeppink").map((circle) => {
              return circle;
            })}
          </Polygon>

          <Polygon style={{ transform: "rotate(135deg)" }}>
            {renderCircles("green").map((circle) => {
              return circle;
            })}
          </Polygon>
        </PolygonWrapper>
      </Main>{" "}
      <div style={{ margin: "200px" }}>
        <ColourChangerWrapper>
          <ColourChanger>ColourChanger</ColourChanger>
        </ColourChangerWrapper>
      </div>
      <AutoBox>AutoBox</AutoBox>
      <Foppa>Foppa</Foppa>
      <Feppa>Feppa</Feppa>
      <Box>Box</Box>
    </>
  );
}
