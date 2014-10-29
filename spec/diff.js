/* global diff, describe, it, expect, should */

describe('diff()', function () {
  'use strict';
  var list;

  beforeEach(function () {
    list = new Tracker([1,2,3,4])
  });

  it('exists', function () {
    expect(Tracker).to.be.a('function');

  });

  it('is a constructor', function () {
    expect(list).to.be.a('object');
  });

  it('constructs newest version', function () {
    list.saveChange([1,2,3,5,6])
    expect(list.getData().toString()).to.equal('1,2,3,5,6');
  })

  it('saves addative + subtractive changes', function () {
    list.saveChange([1,2,3,5,6])
    list.saveChange([1,2])
    expect(list.viewChange(0).toString()).to.equal('1,2,3,5,6');
    expect(list.viewChange(1).toString()).to.equal('1,2');
  });

  it('stores changes for individual indices', function () {
    list.changeCells(
      {index: 2, change: 5}, 
      {index: 4, change: 6}
      );
    expect(list.getData().toString()).to.equal('1,2,5,4,6');
  });

  // Add more assertions here
});
