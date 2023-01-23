import React from "react";

class PuzzleBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cellSizeStyle = `w-${this.props.cellSize} h-${this.props.cellSize}`;

    return (
      <div className="flex">
        {Array.from(Array(this.props.row), () => (
          <div className={`flex flex-col`}>
            {Array.from(Array(this.props.column), () => (
              <div className={"bg-white " + cellSizeStyle}></div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default PuzzleBoard;
