import React from "react";

class PuzzleColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex">
        {this.props.value.map((column, index) => (
          <div className="flex flex-col justify-end w-6">
            {column.map((colCount, index) => (
              <div key={colCount + index.toString()}>
                {colCount}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleColumn;
