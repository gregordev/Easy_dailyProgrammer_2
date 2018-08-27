/*
  Name: Spiral Ascension
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/6i60lr/20170619_challenge_320_easy_spiral_ascension/
*/


function printGrid(grid) {
  for (var i = 0; i < grid.length; i++) {
    console.log(grid[i].join(' '));
  }
}


/* 
  Function creates X arrays with X elements, X = size
  So if size = 5, it creates 5 arrays with 5 elements in each array
*/

function create2DGrid(size) {
  let i = size;
  const grid = [];
  while(i--)  grid.push(new Array(size));
  return grid;
}

function createSpiral(n) {
  const spiral = create2DGrid(n);
  let currentNumber = 1;
  let i = 0; // row
  let j = 0; // column
  let di = 0; // direction row
  let dj = 1; // direction column

  while (currentNumber <= n * n) {
    spiral[i][j] = currentNumber++;
    

    if (j + dj === n || i + di === n || j + dj === -1 || spiral[i + di][j + dj]) {
      const tmpDi = di;
      di = dj;
      dj = -tmpDi;
      console.log('zamiana');
    }
    i += di;
    j += dj;
  }
  return spiral;
}
printGrid(createSpiral(3));