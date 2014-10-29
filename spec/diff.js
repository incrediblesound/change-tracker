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

  it('saves addative changes', function () {
    list.saveChange([1,2,3,5,6])
    list.saveChange([1,2])
    expect(list.viewChange(1).toString()).to.equal('1,2,3,5,6');
  });


  it('saves subtractive changes', function () {
    list.saveChange([1,2])
    list.saveChange([1,2,7])
    expect(list.viewChange(1).toString()).to.equal('1,2');
  });

  // Add more assertions here
});
