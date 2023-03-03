// provided by pganalyze.com
// a reference pattern for setting up my own dynamic react svg components

export const Chart = ({ data }) => {
    const viewBoxWidth = 800;
    const viewBoxHeight = 400;
    const paddingX = 6;
    const paddingY = 4;
    const bottomAxisHeight = 30;
    const leftAxisWidth = 50;
    const bodyHeight = viewBoxHeight - bottomAxisHeight - 2 * paddingY;
    const bodyWidth = viewBoxWidth - leftAxisWidth - 2 * paddingX;
    const leftAxis = {
      pos: {
        x: paddingX,
        y: paddingY,
      },
      size: {
        width: leftAxisWidth,
        height: bodyHeight,
      },
    };
    const bottomAxis = {
      pos: {
        x: paddingX + leftAxisWidth,
        y: paddingY + bodyHeight,
      },
      size: {
        width: bodyWidth,
        height: bottomAxisHeight,
      },
    };
    const body = {
      pos: {
        x: leftAxis.pos.x + leftAxisWidth,
        y: paddingY,
      },
      size: {
        width: bodyWidth,
        height: bodyHeight,
      },
    };
    // chart logic code omitted
    return (
      <svg width="100%" height="400" viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <Translate {...body.pos}>
          {/* chart body omitted */}
        </Translate>
        <Translate {...leftAxis.pos}>
          <LeftAxis {...leftAxis.size} /* other props omitted */ />
        </Translate>
        <Translate {...bottomAxis.pos}>
          <BottomAxis {...bottomAxis.size} /* other props omitted */ />
        </Translate>
      </svg>
    );
  };