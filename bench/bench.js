
var Benchmark = require('benchmark');
var simplify = require('../simplify');

var points = require('../test/fixtures/1k.json');
points.map(p => p.z = p.x);

console.log('Benchmarking simplify on ' + points.length + ' points...');

new Benchmark.Suite()
.add('simplify (HQ)', function() {
    simplify(points, false, 1, true);
})
.add('simplify', function() {
    simplify(points, false, 1, false);
})
.add('simplify 3D (HQ)', function() {
    simplify(points, true, 1, true);
})
.add('simplify 3D', function() {
    simplify(points, true, 1, false);
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.run();
