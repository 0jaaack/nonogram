import React from "react";

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col justify-end">
        {this.props.value.map((row, index) => (
          <div className="flex justify-end h-6">
            {row.map((rowCount, index) => (
              <div key={rowCount + index.toString()}>
                {rowCount}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleRow;
