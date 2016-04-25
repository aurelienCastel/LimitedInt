function LimitedInt(limitMin , limitMax, name) // or () or (LimitedInt model to copy)
{
	this.value;
	this.limitMin = Number.MIN_SAFE_INTEGER;
	this.limitMax = Number.MAX_SAFE_INTEGER;
	this.name = "integer";

	if(arguments.length > 0)
	{
		if(arguments[0] instanceof LimitedInt)
		{
			this.limitMin = arguments[0].limitMin;
			this.limitMax = arguments[0].limitMax;
			this.name = arguments[0].name;
		}
		else
		{
			this.limitMin = limitMin;
			this.limitMax = limitMax;
			this.name = name;
		}
	}
}
Object.defineProperty(LimitedInt.prototype, "value",
{
	get: function()
	{
		return this._value;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
			console.warn("LimitedInt .value can only be set to integers, it will not be set."); 
		else if(value < this.limitMin) 
		{
			this._value = this.limitMin;
			console.warn("LimitedInt .value cannot goes under .limitMin, it will be set to : " +
						 this.limitMin.toString());
		}
		else if(value > this.limitMax)
		{
			this._value = this.limitMax;
			console.warn("LimitedInt .value cannot goes beyond .limitMax, it will be set to: " +
						 this.limitMax.toString());
		}
		else
			this._value = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "limitMin",
{
	get: function()
	{
		return this._limitMin;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
			console.warn("LimitedInt .limitMin can only be set to integers, it will not be set."); 
		else if(value > this.limitMax) 
			console.warn("LimitedInt .limitMin cannot be higher than .limitMax : " +
						 this.limitMax.toString() + ", it will not be set.");
		else if(this.value != null && value > this.value)
			console.warn("LimitedInt .limitMin cannot be higher than .value : " +
						 this.value.toString() + ", it will not be set.");
		else
			this._limitMin = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "limitMax",
{
	get: function()
	{
		return this._limitMax;
	},
	set : function(value)
	{
		if(value == null || value % 1 != 0)
			console.warn("LimitedInt .limitMax can only be set to integers, it will not be set."); 
		else if(value < this.limitMin) 
			console.warn("LimitedInt .limitMax cannot be lower than .limitMin : " +
						 this.limitMin.toString() + ", it will not be set.");
		else if(this.value != null && value < this.value)
			console.warn("LimitedInt .limitMax cannot be lower than .value : " +
						 this.value.toString() + ", it will not be set.");
		else
			this._limitMax = value;
	}
});
Object.defineProperty(LimitedInt.prototype, "name",
{
	get: function()
	{
		return this._name;
	},
	set : function(value)
	{
		if(typeof value !== "string")
			console.warn("LimitedInt .name can only be set to strings, it will not be set."); 
		else
			this._name = value;
	}
});
