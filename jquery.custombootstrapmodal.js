(function(){
	$.bootstrapmodal=function(url,options){
		var settings = $.extend({
			prefix:'bootstrapmodal',
			id:'modal',
			padding:'0',
			width:'',
			height: '505',
			title:'No Title Specified'
		}, options);
		var arr_url=url.split('?');
		url=arr_url[0]+'?'+(arr_url.length==1?'isiframe=1':arr_url[1]+'&isiframe=1');
		var widthtxt=settings.width==''?'':'width:'+settings.width+'px;';
		var html='<div class="modal fade" id="'+settings.prefix+settings.id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" style="'+widthtxt+'"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title" id="myModalLabel">'+settings.title+'</h4></div><div class="modal-body" style="padding:'+settings.padding+'px; height:'+settings.height+'px;"><iframe src="'+url+'" frameborder="0" height="100%" width="100%"></iframe></div><div class="modal-footer pad_tp_0"></div></div></div></div>';
		$(html).appendTo('body');
		$('#'+settings.prefix+settings.id).modal({show:true});
		$('#'+settings.prefix+settings.id).on('hidden.bs.modal', function () {
			 $('#'+settings.prefix+settings.id).remove();
			 if(settings.afterClose!=undefined)
			 	settings.afterClose.call();
		});
		//$('#settings.id').find(".close").click(settings.afterClose);
	};
	$.closebootstrapmodal=function(){
		if(parent.top.$('div[id*=bootstrapmodal]').length>0){
			parent.top.$('div[id*=bootstrapmodal]').modal('hide');
		}
	};
})();
