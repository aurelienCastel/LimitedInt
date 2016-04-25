console.log("-----------------------------------------------------------------------------");
console.log("--------------------------------LimitedInt CONSTRUCTORS----------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt();");
var limitedInt = new LimitedInt();
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(null, 'badInput');");
var limitedInt = new LimitedInt(null, 'badInput');
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(1.1, 1.1);");
var limitedInt = new LimitedInt(1.1, 1.1);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(2, 1);");
var limitedInt = new LimitedInt(2, 1);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(1);");
var limitedInt = new LimitedInt(1);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(-1, 1);");
var limitedInt = new LimitedInt(-1, 1);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 1, 5);");
var limitedInt = new LimitedInt(-1, 1, 5);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 1, 'boolean');");
var limitedInt = new LimitedInt(0, 1, "boolean");
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("var limitedIntToCopy = new LimitedInt(-10, -5, 'small negative');\n" +
		    "var limitedInt = new LimitedInt(limitedIntToCopy);");
var limitedIntToCopy = new LimitedInt(-10, -5, "small negative");
var limitedInt = new LimitedInt(limitedIntToCopy);
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("var limitedIntToCopy.limitMax = 10;");
limitedIntToCopy.limitMax = 10;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);

console.log("-----------------------------------------------------------------------------");
console.log("--------------------------LimitedInt .value SETTERS GETTERS------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 100, 'percentage');");
var limitedInt = new LimitedInt(0, 100, "percentage");
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 1;");
limitedInt.value = 1;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 'badInput';");
limitedInt.value = "badInput";
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = null;");
limitedInt.value = null;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 1.1;");
limitedInt.value = 1.1;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = -1;");
limitedInt.value = -1;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 101;");
limitedInt.value = 101;
console.log("limitedInt : value = " + limitedInt.value.toString());

console.log("-----------------------------------------------------------------------------");
console.log("-----------------------LimitedInt .limitMin SETTERS GETTERS------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 100, 'percentage');");
var limitedInt = new LimitedInt(0, 100, "percentage");
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = 'badInput';");
limitedInt.limitMin = 'badInput';
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = null;");
limitedInt.limitMin = null;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = 1.1;");
limitedInt.limitMin = 1.1;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = 101;");
limitedInt.limitMin = 101;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = 100;");
limitedInt.limitMin = 100;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMin = 99;");
limitedInt.limitMin = 99;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 99;");
limitedInt.value = 99;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("limitedInt.limitMin = 100;");
limitedInt.limitMin = 100;
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString());

console.log("-----------------------------------------------------------------------------");
console.log("-----------------------LimitedInt .limitMax SETTERS GETTERS------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 100, 'percentage');");
var limitedInt = new LimitedInt(0, 100, "percentage");
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = 'badInput';");
limitedInt.limitMax = 'badInput';
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = null;");
limitedInt.limitMax = null;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = 1.1;");
limitedInt.limitMax = 1.1;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = -1;");
limitedInt.limitMax = -1;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = 0;");
limitedInt.limitMax = 0;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.limitMax = 1;");
limitedInt.limitMax = 1;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.value = 1;");
limitedInt.value = 1;
console.log("limitedInt : value = " + limitedInt.value.toString());
console.log("limitedInt.limitMax = 0;");
limitedInt.limitMax = 0;
console.log("limitedInt : limitMax = " + limitedInt.limitMax.toString());

console.log("-----------------------------------------------------------------------------");
console.log("-------------------------LimitedInt .name SETTERS GETTERS--------------------");
console.log("-----------------------------------------------------------------------------");

console.log("var limitedInt = new LimitedInt(0, 100, 'percentage');");
var limitedInt = new LimitedInt(0, 100, "percentage");
console.log("limitedInt : limitMin = " + limitedInt.limitMin.toString() + " | limitMax = " +
			limitedInt.limitMax.toString() + " | name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.name = null;");
limitedInt.name = null;
console.log("limitedInt : name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.name = 1;");
limitedInt.name = 1;
console.log("limitedInt : name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");

console.log("limitedInt.name = 'cent';");
limitedInt.name = "cent";
console.log("limitedInt : name = " + limitedInt.name);
console.log("-----------------------------------------------------------------------------");
