export const  generateGrid = (rows:number,cols:number) => {
    const record: number[][] = [];
    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 2));
      }
      record.push(row);
    }
    return record;
  };

  export const  positions = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];
