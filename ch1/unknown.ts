let val: unknown = 22;
val = "string value";
val = new Array();
// val.push(33);

if (val instanceof Array) {
  val.push(33);
}

console.log(val);
