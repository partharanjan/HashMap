HashMap
=======

Easy Key-Value pair in javascript (HashMap)

How To Use
==========
```
	var hMap=new HashMap();
	hMap.add("name","Partha Ranjan");
	hMap.add("address","Mumbai");
	hMap.add("email","partharanjan.nayak@gmail.com");
	hMap.add("mob","+919619343354");
	hMap.add("dob","25-01-1990");
	hMap.add("skill",".Net,PHP,Android,javascript,JQuery,BS");
	//show the data in string
	var key_value_to_string=hMap.join(';');
	console.log(key_value_to_string);
	//find value from  key
	var data=hMap.findKey('email');
	if(data!=null)
	{
		console.log(data.value);
	}
	//find key from value (array of key value pair)
	var data=hMap.findValue('partharanjan.nayak@gmail.com');
	if(data!=null)
	{
		console.log(data[0].key);
	}
	//remove key
	var remove=hMap.remove("email");
	var key_value_to_string=hMap.join(';');
	console.log(key_value_to_string);
```
