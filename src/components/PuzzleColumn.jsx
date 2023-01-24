import React from "react";

class PuzzleColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex">
        {this.props.value.map((column, index) => (
          <div key={index} className="flex flex-col justify-end w-6">
            {column.map((colInfo, index) => (
              <span
                key={colInfo.count + index.toString()}
                className={colInfo.isDone ? "line-through" : "no-underline"}
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
