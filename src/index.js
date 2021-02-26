
exports.min = function min(arr){
  let e;
  if(typeof(arr)==='object'){ e=Math.min(...arr)}
  return isFinite(e)? e: 0;
}

exports.max = function max(arr){
  let e;
  if(typeof(arr)==='object'){ e=Math.max(...arr)}
  return isFinite(e)? e: 0;
}

exports.avg = function avg(arr){
  let e;
  if(typeof(arr)==='object'){ e=Math.max(...arr)}
  return isFinite(e)? arr.reduce((first,item)=>first+item,0)/arr.length: 0;
}
