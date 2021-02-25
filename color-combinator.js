/******************
 * YOUR CODE HERE *
 ******************/

function colorCombinator(col1, col2){
 if((col1 === 'red' || col2 === 'red') && (col1 === 'yellow' || col2 === 'yellow')){
   return 'orange';
 } else if((col1 === 'red' || col2 === 'red') && (col1 === 'blue' || col2 === 'blue')){
  return 'purple';
} else if((col1 === 'blue' || col2 === 'blue') && (col1 === 'yellow' || col2 === 'yellow')){
  return 'green';
}
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
