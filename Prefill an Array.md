function prefill(n, v) {
  if (typeof n === 'boolean' || ~~ n != n || +n < 0) throw new TypeError(n + ' is invalid')
  return Array.apply(null, Array(+n)).map(function (d,i) { return v })
}