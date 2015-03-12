var moveZeros = function (arr) {
  var tmp = [];
  for (var i = 0; i<arr.lengt; i++) {
    if(arr[i]===0) {
    	tmp.push(0);
    }
  }
  arr=arr.filter(function(cur) {
    return (cur!==0);
  });
  return arr.concat(tmp);
}

moveZeros([1,2,0,1,0,1,0,3,0,1])