# LimitedInt.js

A library to help you represent integers limited by a min and a max value.

---

	var dayOfWeek = new LimitedInt(1, 7, "day of the week");
Will create a new object that can only contain a possible value to represent a day of the week.

 - dayOfWeek.value : undefined
 - dayOfWeek.limitMin : 1
 - dayOfWeek.limitMax : 7
 - dayOfWeek.name : "day of the week"

---
    var limitedInt = new LimitedInt(limitMin, limitMax, name);
The classic constructor will set:

 - .value to undefined
 - .limitMin to the lowest value .value can be (must be an integer)
 - .limitMax to the highest value .value can be (must be an integer)
 - .name to name (must be a string)

---
    var limitedInt = new LimitedInt();
The default constructor will set:

 - .value to undefined
 - .limitMin to the lowest value that can be represented by an integer in Javascript
 - .limitMax to the highest value that can be represented by an integer in Javascript
 - .name to "integer"

---
    var limitedInt = new LimitedInt(limitedIntInstance);
The copy constructor will set:

 - .value to undefined
 - .limitMin to limitedIntInstance.limitMin
 - .limitMax to limitedIntInstance.limitMax
 - .name to to limitedIntInstance.name

---
	var switch = new LimitedInt(-1, 1, "three state switch");
	switch.value = 0; // Works fine.
	switch.value = -2; // Set to -1 instead, write a warning in the console.
	switch.value = 2; // Set to 1 instead, write a warning in the console.
If you try to set the .value of a LimitedInt to something lower than its .limitMin, .value will be set to .limitMin instead. <br>
If you try to set the .value of a LimitedInt to something higher than its .limitMax, .value will be set to .limitMax instead. <br>

---
	var switch = new LimitedInt(-1, 1, "three state switch");
	switch.value = 0; // Works fine.
	switch.limitMin = 2; // This assignment is ignored, write a warning in the console.
	switch.limitMin = 1; // This assignment is ignored, write a warning in the console.
If you try to set the .limitMin of a LimitedInt to something higher than its .limitMax, .limitMin will not be set. <br>
If you try to set the .limitMin of a LimitedInt to something higher than its .value, .limitMin will not be set. <br>
If you try to set the .limitMax of a LimitedInt to something lower than its .limitMin, .limitMax will not be set. <br>
If you try to set the .limitMax of a LimitedInt to something lower than its .value, .limitMax will not be set. <br>

---
	var switch = new LimitedInt(-1, 1, "three state switch");
	switch.value = 0; // Works fine.
	switch.limitMin = 2; // This assignment is ignored, write a warning in the console.
	switch.limitMin = 1; // This assignment is ignored, write a warning in the console.
If you try to set the .limitMin of a LimitedInt to something higher than its .limitMax, .limitMin will not be set. <br>
If you try to set the .limitMin of a LimitedInt to something higher than its .value, .limitMin will not be set. <br>
If you try to set the .limitMax of a LimitedInt to something lower than its .limitMin, .limitMax will not be set. <br>
If you try to set the .limitMax of a LimitedInt to something lower than its .value, .limitMax will not be set. <br>
