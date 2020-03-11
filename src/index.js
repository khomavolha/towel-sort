
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
if(matrix == undefined || matrix.length == 0){ return []
} else {
  for(let a=0; a<matrix.length; a+2){
    matrix[a] = matrix[a].reverse();
  }
  let con = matrix.concat();
  arr.push(con);
}
return arr;
}
