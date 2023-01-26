import React from "react";

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-end">
        {this.props.value.map((row, index) => (
          <div key={index} className="flex items-center justify-end h-10 pr-2 text-xl">
            {row.map((rowInfo, index) => (
              <span
                key={rowInfo.count + index.toString()}
                className={rowInfo.isDone ? "text-gray-600 px-1" : "text-inherit px-1"}
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
