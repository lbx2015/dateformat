// time  1593790157203  TO>>>  刚刚 || 3分钟前 || 1小时前 || 1天前 || 1周前 || 2月前 || 2019年11月11日

const formatDate = (timer) => {
	var arrTimestamp = (timer*1000 + '').split('');
	for (var start = 0; start < 13; start++) {
		if (!arrTimestamp[start]) {
			arrTimestamp[start] = '0';
		}
	}
	timer = arrTimestamp.join('') * 1;

	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - timer;

	// 如果本地时间反而小于变量时间
	if (diffValue < 0) {
		return '刚刚';
	}

	// 计算差异时间的量级
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;

	// 数值补0方法
	var zero = function(value) {
		if (value < 10) {
			return '0' + value;
		}
		return value;
	};

var date = new Date(timer);
const monthAndDate =  zero(date.getMonth() + 1) + '-' + zero(date.getDate()) + ' ';
	// 使用
	if (monthC > 12) {
		// 超过1年，直接显示年月日
		return (function() {
			var date = new Date(timer);
			return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
		})();
	} else if (monthC >= 1) {
		return monthAndDate+ parseInt(monthC) + "月前";
	} else if (weekC >= 1) {
		return monthAndDate+ parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		return monthAndDate+ parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		return monthAndDate + parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		return monthAndDate +  parseInt(minC) + "分钟前";
	}
	return '刚刚';
}

module.exports = {
	formatDate
}
