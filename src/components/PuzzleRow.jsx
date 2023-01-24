import React from "react";

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-end">
        {this.props.value.map((row, index) => (
          <div key={index} className="flex justify-end h-6">
            {row.map((rowInfo, index) => (
              <span
                key={rowInfo.count + index.toString()}
                className={rowInfo.isDone ? "line-through" : "no-underline"}
              >
                {rowInfo.count}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleRow;
