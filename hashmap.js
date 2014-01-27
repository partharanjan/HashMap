/*
HashMap
Author: Partha Ranjan
http://www.partha.pw
*/
function HashMap()
{
	this.dataSets=new Array();
	this.error=null;
}
//add key value in sets
HashMap.prototype.add=function(key,value,check_duplicate)
{
	try
	{
		var check_contains=true;
		if(typeof check_duplicate!='undefined')
		{
			check_contains=check_duplicate;
		}
		//check that the user need to validate the key
		if(check_contains)
		{
			if(this.contains(key))
			{
				return false;
			}
		}
		var pair=
		{
			key:key,
			value:value
		}
		this.dataSets.push(pair);
		return true;
	}
	catch(e)
	{
		this.error=e;
	}
	return false;
}
//add the array of items in pair
HashMap.prototype.addAll=function(key_array,value_array)
{
	try
	{
		var total=key_array.length;
		if(total>0)
		{
			for (var i = 0; i <total; i++) 
			{
				//check that the key is present or not
				if(!this.contains(key_array[i]))
				{
					this.add(key_array[i],value_array[i],false);
				}
				else
				{
					//if present simply ignore
				}
			};
		}
	}
	catch(e)
	{
		this.error=e;
	}
}
//check that key is present or not
HashMap.prototype.contains=function(key)
{
	try
	{
		var total=this.dataSets.length;
		if(total>0)
		{
			for(var i=0;i<total;i++)
			{
				if(this.dataSets[i].key==key)
				{
					return true;
				}
			}
		}
	}
	catch(e)
	{
		this.error=e;
	}
	return false;
}
//remove from the sets
HashMap.prototype.remove=function(key)
{
	try
	{
		var total=this.dataSets.length;
		if(total>0)
		{
			for(var i=0;i<total;i++)
			{
				if(this.dataSets[i].key==key)
				{
					this.dataSets.splice(i,1);
					return true;
				}
			}
		}
	}
	catch(e)
	{
		this.error=e;
	}
	return false;
}
//remove all the items
HashMap.prototype.removeAll=function()
{
	this.dataSets=new Array();
}
//find the pair from the key
HashMap.prototype.findKey=function(key)
{
	try
	{
		var total=this.dataSets.length;
		if(total>0)
		{
			for(var i=0;i<total;i++)
			{
				if(this.dataSets[i].key==key)
				{
					return this.dataSets[i];
				}
			}
		}
	}
	catch(e)
	{
		this.error=e;
	}
	return null;
}
//find the pair from the value
HashMap.prototype.findValue=function(value)
{
	try
	{
		
		var total=this.dataSets.length;
		if(total>0)
		{
			var data=new Array();
			for(var i=0;i<total;i++)
			{
				if(this.dataSets[i].value==value)
				{
					data.push(this.dataSets[i]);
				}
			}
			if(data.length>0)
			{
				return data;
			}
			
		}
	}
	catch(e)
	{
		this.error=e;
	}
	return null;
}
//join the key value
HashMap.prototype.join=function(separator)
{
	var data=new Array();
	try
	{
		var total=this.dataSets.length;
		if(total>0)
		{
			var str="";
			for(var i=0;i<total;i++)
			{
				str=this.dataSets[i].key+'='+this.dataSets[i].value;
				data.push(str);
			}
		}
	}
	catch(e)
	{
		this.error=e;
	}
	return data.join(separator);
}
