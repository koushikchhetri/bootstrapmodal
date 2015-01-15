# bootstrapmodal

By default Boostrap Traditional modal does not support dynamicity as well as it does not support iframe integration in it. We know if we want to incorporate a boostrap modal in our page, then we have to put hidden html started with like 
```
<div id="modal" class="modal fade"><div class="modal-dialog">
```and a trigger button like 
```
<a href="#modal" role="button" class="btn btn-primary" data-toggle="modal">Show Me</a>
```.It's very annoying to us since we stucked sometimes with it.

We would be glad, if it might possible to create bootstrap modal on the fly which will call our pages as like as fancybox, ligtbox do. But you guys do not bother, I've done this for me and you as well.

If you embed jquery.custombootstrapmodal.js in your web page then problem will be solved.
This plugin creates a boostrap modal on the fly where you can see your web page which is provided by you.

Code Structure:
==============
add the following line after bootstrap.min.js in your "script" tag
<script src="jquery.custombootstrapmodal.js"></script>

Now,
Say, you want to show the modal after clicking a button like '<button class="signup">Signup</button>' where a "signup.php" page will be displayed which you will provide. Then your code will be look like as follows


  #1
  $(document).on('click',"button.signup",function(){
  		$.bootstrapmodal('[YOUR PAGE URL]',{//[YOUR PAGE URL] may be http://koushikchhetri.com/signup.php
  			height: '540',//[Optional] Height of modal, it automatically adjusts to 505px, if comment height attribute
  			//width: '540',//[Optional] Width of  modal, by default width of [YOUR PAGE URL] otherwise provided width
  			title: '[TTILE OF THE MODAL]',//[TITLE OF THE MODAL] may be "Registation Panel"
  			afterClose:function(){
  			//If you want to do some work after close the modal then, here you can code.
  			//Otherwise do not override this method.
  			}
  		});
  	});
	
	
	#2
	Now you want close the modal automatically after registration done with ajax, then you have to call a method named 
	"$.closebootstrapmodal();" from anywhere of you page or parent page.
