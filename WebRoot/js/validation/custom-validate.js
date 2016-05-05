(function($) {
	$.validator.setDefaults({
		onkeyup:false,
        errorPlacement: function(error, element) {
        	if(error.text()!=""){
        		error.appendTo(element.parent());
        	}
        },
        highlight: function(label) {
        	var el = $(label).closest('.control-group');
        	el.removeClass('success')
            el.addClass('error');
        },
        success: function(label) {
        	$(label).closest('.control-group').addClass('success');
        	$(label).remove();
        }
	});
	$.validator.addMethod("chinese", function(value, element) {
		return this.optional(element) || (/^[\u4E00-\u9FFF]+$/.test(value));
	}, "请输入中文字");
	
	$.validator.addMethod("username", function(value, element) {
		return this.optional(element) || (/^[a-zA-Z0-9_]{3,16}$/.test(value));
	}, "请输入英文字符、数字或下划线组成的3至16位字符串");
	
	$.validator.addMethod("password", function(value, element) {
		return this.optional(element) || (/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(value));
	}, "请输入字母、数字或特殊字符.~!@#$%^&*组成的6至22位字符串");
}(jQuery));