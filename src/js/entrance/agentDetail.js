/**
 * 需求主题
 * author  作者
 */
require([
	'../modules/util',
	'../libs/AceTemplate'/*,
	'../mock-data/agentDetail'*/
	], function (util) {

	//接口地址
	var formDetail = location.origin + '/agent/orderDetailQuery';

	var formId = util.getNameInStr(location.href, 'formId');

	function ajax(url, data, callback) {
		$.ajax({
			type: 'get',
			url: url,
			data: data,
			success: callback,
			error: function () {

			}
		});
	}

	/**
	 * Template Dom 生成函数
	 * @param {[type]} id        [template id]
	 * @param {[type]} className [加入的DOM class]
	 */
	function setTemplateDom(id, className) {
		return function(data) {
			data = JSON.parse(data);
			$('.' + className).append(AceTemplate.format(id, data));
		}
	}


	//我的订单逻辑	
	//订单DOM生成
	ajax(formDetail, {formId: formId}, setTemplateDom('formTemplate', 'form-detail'));
});