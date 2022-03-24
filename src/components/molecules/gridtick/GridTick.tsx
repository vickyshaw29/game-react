import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import styles from './styles';
import { CustomButton } from '../../atoms';
import { generateGrid, positions } from '../../../utils/common';

const cols: number = 5;
const rows: number = 5;

// white  for dead cells
// gray for living cells

const GridTick = () => {
  const classes = styles();
  const [grids, setGrids] = useState<number[][]>([]);
  const [simulationFlag, setSimulationFlag] = useState<boolean>(false);
  const startRef = useRef(simulationFlag);
  startRef.current = simulationFlag;

  const start = () => {
    if (simulationFlag === false) {
      return;
    } else {
      setGrids((g) => {
        const next = g?.map((r, i) => {
          return r?.map((c, j) => {
            let sum = 0;
            positions?.forEach((pos) => {
              const x = i + pos[0];
              const y = j + pos[1];
              if (x >= 0 && x < rows && y >= 0 && y < cols) {
                sum += g[x][y];
              }
            });
            if (sum < 2 || sum > 3) {
              return 0;
            }
            if (sum === 3) {
              return 1;
            }
            return g[i][j];
          });
        });
        return next;
      });
    }
  };

  const stop = () => {};

  useEffect(() => {
    setGrids(generateGrid(rows, cols));
  }, []);

  useEffect(() => {
    let intervalID:any;
    intervalID =window?.setInterval(() => {
      start();
    }, 2000);
    return () => clearInterval(intervalID);
  }, [simulationFlag]);
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <div
          style={{
            display: 'grid',
            gridTemplateRows: `repeat(${rows},1fr)`,
            gridTemplateColumns: `repeat(${cols},1fr)`,
            width: 'max-content',
          }}
        >
          {grids &&
            grids.map((row, i) =>
              row?.map((col, k) => (
                <div
                  key={`${i}-${k}`}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: grids[i][k] ? 'gray' : 'white',
                    border: '1px solid black',
                  }}
                />
              ))
            )}
        </div>
      </Grid>
      <Grid item sx={{ mt: 1 }}>
        <CustomButton
          name={simulationFlag ? 'Stop' : 'Start'}
          variant="contained"
          disabled={false}
          className="btntiny"
          onClick={() => {
            setSimulationFlag(!simulationFlag);
          }}
        />
      </Grid>
      <Grid item sx={{ mt: 1 }}>
        <CustomButton
          name="Reset"
          variant="contained"
          disabled={false}
          className="btntiny"
          style={{ backgroundColor: 'gray' }}
          onClick={() => {
            setGrids(generateGrid(rows,cols));
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GridTick;
