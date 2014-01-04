function command(commandtype,params)
{
	this.paramtype=paramtype;
	this.params=params;
}
function variable(name,type,value)
{
	this.name=name;
	this.type=type;
	this.value=value;
}
function aFunction(fname,commands,params)
{
	this.fname=fname;
	this.commands=commands;
	this.params=params;
	this.execute=_execute(paramsvalues,globalvariables);
}