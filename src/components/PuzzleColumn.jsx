import React from "react";

class PuzzleColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex">
        {this.props.value.map((column, index) => (
          <div key={index} className="flex flex-col justify-end items-center w-10 text-xl">
            {column.map((colInfo, index) => (
              <span
                key={colInfo.count + index.toString()}
                className={colInfo.isDone ? "text-gray-600" : "text-inherit"}
              >
                {colInfo.count}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleColumn;
