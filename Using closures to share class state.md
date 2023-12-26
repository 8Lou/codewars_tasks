<!-- 1 -->
var Cat = (function () { 
  var cats = { count: 0, totalWeight: 0, avgWeight: 0 }
function Cat (name, weight) { 
  if (!name || !weight) { 
    throw new Error('Name and weight should be provided!'); } 
  cats.count++; this.name = name;

<!-- 2 -->
Object.defineProperty(this, 'weight', {
  get: function () {
    return this._weight || 0;
  },
  set: function (val) {
    cats.totalWeight = cats.totalWeight - this.weight + val;
    cats.avgWeight =  cats.totalWeight / cats.count;
    return this._weight = val;
  }
});

<!-- 3 -->
this.weight = weight;
}
Cat.averageWeight = function () { return cats.avgWeight; }
return Cat;
}());