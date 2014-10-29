var Difference = function(old, fresh){
//  this.index = index;
  this.old = old;
  this.fresh = fresh;
}

var Tracker = function(array){
  this.changes = {};
  this.data = array;
  this.count = 0;
}

Tracker.prototype.saveChange = function(array){
  var changes = [];
  var length = Math.max(array.length, this.data.length);
  for(var i = 0, l = length; i < l; i++){
    changes[i] = [];
    var old = this.data[i];
    var fresh = array[i];
    if(fresh !== old){
      changes[i].push(new Difference(old, fresh))
    }
  }
  this.changes[this.count] = changes;
  this.data = array;
  this.count++;
}

Tracker.prototype.viewChange = function(index){
  var result = [];
  var change = this.changes[index];
  var length = change.length;
  for(var i = 0, l = length; i < l; i++){
    if(!change[i][0] && this.data[i] !== undefined){
      result.push(this.data[i]);
    } 
    else if(change[i][0] && change[i][0].old){
      result.push(change[i][0].old);
    }
  }
  return result;
}