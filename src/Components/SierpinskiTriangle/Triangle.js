import React from 'react';
import './Triangle.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const initialPoints = [
  { posY: 0, posX: 500 },
  { posY: 1000, posX: 0 },
  { posY: 1000, posX: 1000 },
];

function Triangle() {
  const [startingPoints, setStartingPoints] = React.useState([
    ...initialPoints,
  ]);
  const [dotAmount, setDotAmount] = React.useState(1000);
  const [dotSize, setDotSize] = React.useState(5);

  function start() {
    if (dotSize > 64) {
      setDotSize(64);
    }
    if (dotAmount > 50000) {
      setDotAmount(50000);
    }
    const end = [];
    if (startingPoints.length > 3) {
      setStartingPoints(initialPoints);
      return;
    }
    for (let i = 0; i < dotAmount; i++) {
      if (i === 0) {
        const fake = [
          { posY: 0, posX: 500 },
          { posY: 1000, posX: 0 },
          { posY: 1000, posX: 1000 },
        ];
        let startPoint = fake[0];
        let secondPoint = fake[1];
        let newPosY = (secondPoint.posY + startPoint.posY) / 2;
        let newPosX = (secondPoint.posX + startPoint.posX) / 2;
        const newPoint = {
          posY: newPosY,
          posX: newPosX,
        };

        end.push(newPoint);
      } else {
        let startPoint =
          initialPoints[Math.floor(Math.random() * initialPoints.length)];
        const last = end[end.length - 1];
        let newPosY1 = (startPoint.posY + last.posY) / 2;
        let newPosX1 = (startPoint.posX + last.posX) / 2;
        const newPoint1 = {
          posY: newPosY1,
          posX: newPosX1,
        };
        end.push(newPoint1);
      }
    }
    setStartingPoints([...startingPoints, ...end]);
  }
  return (
    <section>
      <div>
        <BurgerMenu />
      </div>
      <div className="triangle">
        <div className="box">
          {startingPoints.map((p, index) => {
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: `${p.posY}px`,
                  left: `${p.posX}px`,
                  backgroundColor: 'white',
                  width: `${dotSize}px`,
                  height: `${dotSize}px`,
                  borderRadius: '50%',
                  zIndex: '400',
                }}
              ></div>
            );
          })}
        </div>
        {/* {addedPoints.map((p) => {
          return (
            <div
              key={p.posY + p.posX}
              style={{
                position: 'absolute',
                top: `${p.posY}px`,
                left: `${p.posX}px`,
                backgroundColor: 'white',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                zIndex: '400',
              }}
            ></div>
          );
        })} */}

        {/* <div className="p1"></div>
        <div className="p2"></div>
        <div className="p3"></div> */}
        {/* <div className="p4"></div> */}
        <div className="explanation">
          <h1>The Sierpinski Triangle</h1>
          <p>
            The Sierpinski Triangle is started with three points in the shape of
            a triangle. You then add one more point in the center of two of
            existing dots, and take the following steps as many times as you'd
            like. <br />
            #1: Select one of the three starting points at random. <br /> #2:
            Add another dot in the center of the one you selected and the last
            one you added. <br /> At first, it looks like a jumbled mess but
            with enough dots, turns into a very cool shape. Read more about it{' '}
            <a
              target="blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle"
            >
              here
            </a>
          </p>
        </div>
        <div className="inputs">
          <button
            onClick={() => {
              start();
            }}
          >
            Start/Clear
          </button>
          <div>
            <h1>Amount of Dots</h1>
            <p>More dots means more time to complete.</p>
            <p>Maximum of 50,000</p>
            <input
              value={dotAmount}
              onChange={(e) => {
                setDotAmount(e.target.value);
              }}
              type="number"
            ></input>
          </div>
          <div>
            <h1>Size of Dots</h1>
            <p>Size of the dots in pixels</p>
            <p>Maximum of 64</p>

            <input
              value={dotSize}
              onChange={(e) => {
                setDotSize(e.target.value);
              }}
              type="number"
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Triangle;
