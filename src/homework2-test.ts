function dist1([x1, y1]: [number, number], [x2, y2]: [number, number]): number {
  type TPoint = [number, number];

  const point1: TPoint = [x1, y1];
  const point2: TPoint = [x2, y2];

  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;
  const calculateDistance: DistanceFunction = ([x1, y1], [x2, y2]) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y1 - y2, 2));

  const result = calculateDistance(point1, point2);
  console.log(`Distance between (${x1}, ${y1}) and (${x2}, ${y2}): ${result}`);
  return result;
}

export { dist1 };

function dist2(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
): number {
  type TPoint = { x: number; y: number };
  type DistanceFunction = (p1: TPoint, p2: TPoint) => number;

  const distance: DistanceFunction = (p1, p2) => {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  const result = distance(p1, p2);
  console.log(
    `Distance between (${p1.x},${p1.y}) and (${p2.x},${p2.y}): ${result}`,
  );
  return result;
}

export { dist2 };
