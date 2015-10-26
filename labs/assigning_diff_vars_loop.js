obj = {
  var1: x,
  var2: y
}

obj.var1 > x
obj["var1"] > x

for (i = 0; i < 2; i++) {
  obj["var" + i] = true;
}