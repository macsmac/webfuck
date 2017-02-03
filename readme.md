WebFuck - Writing JavaScript with BrainFuck
===========================================

If you want to write JavaScript code with BrainFuck this interpreter will help you

Introduction
------------

Basicly, WebFuck just executes the BrainFuck code and output of this evals as a JavaScript code. The code on WebFuck will look like this: 

	/
		Example program, alerts "hey!"
	/

	>++++++++++
	[
		>+++++++++   
		>++++++++++   
		>++++         
		>++++++++++++ 
		<<<<-
	]
	>+++++++.
	>++++++++.
	-------.
	+++++++++++++.
	++.
	>.
	-.
	<------------.
	---.
	>>+.
	<------.
	++++++.
	++.
	
And yes, WebFuck supports comments.

Operators
---------

WebFuck has almost all (Except ',', because it will be useless). You can see the list below.

|Operator|Description|
|--------|-----------|
|+|Increment the value at data pointer|
|-|Decrement the value at data pointer|
|>|Increment the data pointer|
|<|Decrement the data pointer|
|.|Add data to output|
|[|If the value at the data pointer is zero, jump to ]|
|]|If the value at the data pointer is nonzero, jump to [|
|**/**|**Ignores all symbols up to the next /. If no / was found, just to end of the code**|

Execution
------------

WebFuck executes all brainfuck code and output of it evals as a JavaScript code. Put the value to the output with operator '.'.