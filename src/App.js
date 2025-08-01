import { useState } from "react";
import "./styles.css";

export default function App() {
  const data = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  const [boxData, setBoxData] = useState({});

  const handleColorChange = (index1, index2) => {
    const id = `${index1}-${index2}`;
    setBoxData((prev) => ({
      ...prev,
      [id]: true,
    }));
    // return
    //   backgroundColor:"#333333";
    // ;
  };

  return (
    <div className="App">
      <div className="box-grid">
        {data.map((b, index1) => (
          <div className="box " key={index1}>
            {b.map(
              (sub, index2) =>
                sub == 1 && (
                  <div
                    className="subbox "
                    key={index2}
                    onClick={() => handleColorChange(index1, index2)}
                    style={{
                      backgroundColor: boxData[`${index1}-${index2}`]
                        ? "green"
                        : "#000000",
                    }}
                  >
                    {sub}
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
