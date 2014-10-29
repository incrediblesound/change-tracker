var Tracker = function(array){
  this.changes = {};
  this.data = array;
  this.count = 0;
}

Tracker.prototype.saveChange = function(input){
  var copy = this.getData();
  var changes = [];
  var length = Math.max(input.length, copy.length);
  for(var i = 0, l = length; i < l; i++){
    var old = copy[i];
    var fresh = input[i];
    if(fresh !== old){
      changes.push({old: old, fresh: fresh, index: i});
    }
  }
  this.changes[this.count] = changes;
  this.count++;
}

Tracker.prototype.viewChange = function(index){
  if(index === 1){
  }
  var result = this.data;
  var diff, change, length;
  for(var k = 0; k <= index; k++){
    change = this.changes[k];
    length = change.length;
    for(var i = 0, l = length; i < l; i++){
      diff = change[i];
      result[diff.index] = diff.fresh;
    }
  }
  for(var i = result.length; i >= 0; i--){
    if(result[i] === undefined){
      result.splice(i, 1);
    }
  }
  return result;
}

Tracker.prototype.getData = function(){
  var data = this.data.slice();
  for(var i = 0, l = this.count; i < l; i++){
    var change = this.changes[i];
    for(var k = 0; k < change.length; k++){
      var diff = change[k];
        data[diff.index] = diff.fresh;
    }
  }
  return data;
}

Tracker.prototype.changeCells = function(){
  var changes = Array.prototype.slice.call(arguments);
  var copy = this.getData(), diff;
  for(var i = 0; i < changes.length; i++){
    diff = changes[i];
    copy[diff.index] = diff.change;
  }
  this.saveChange(copy);
}