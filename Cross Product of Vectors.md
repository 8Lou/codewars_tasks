<!-- 1 -->
function crossProduct(v1, v2) {
  if (!v1 && !v2 || v1.length !== 3 || v2.length !== 3 || ![...v1, ...v2].every(v => typeof v === 'number')) throw 'Arguments are not 3D vectors!';
  const [ a1, a2, a3 ] = v1;
  const [ b1, b2, b3 ] = v2;
  return [ 
    a2 * b3 - a3 * b2, 
    a3 * b1 - a1 * b3, 
    a1 * b2 - a2 * b1
  ];
}

<!-- 2 -->
function crossProduct (v1, v2) {
  if (!v1 || !v2 || v1.length != 3 || v2.length != 3) throw "Arguments are not 3D vectors!";
  let [x1, y1, z1] = v1, [x2, y2, z2] = v2;
  return [y1*z2 - z1*y2, z1*x2 - x1*z2, x1*y2 - y1*x2];
}