

var Tracker = function(array){
  this.changes = {};
  this.data = array;
  this.count = 0;
}

Tracker.prototype.saveChange = function(input){
  var changes = [];
  var length = Math.max(input.length, this.data.length);
  for(var i = 0, l = length; i < l; i++){
    var old = this.data[i];
    var fresh = input[i];
    if(fresh !== old){
      changes.push({old: old, index: i});
    }
  }
  this.changes[this.count] = changes;
  this.data = input;
  this.count++;
}

Tracker.prototype.viewChange = function(index, isString){
  debugger;
  var result = this.data;
  var change = this.changes[index];
  var length = change.length;
  var diff;
  for(var i = 0, l = length; i < l; i++){
    diff = change[i];
    result[diff.index] = diff.old;
  }
  return isString ? result.join('') : result;
}