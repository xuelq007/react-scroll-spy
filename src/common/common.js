export default {

    throttle(func, wait, options) {
        let context;
        let args;
        let result;
        let timeout = null;
        // 上次执行时间点
        let previous = 0;
        if (!options) {
            options = {};
        }
        // 延迟执行函数
        let later = function () {
            // 若设定了开始边界不执行选项，上次执行时间始终为0
            previous = options.leading === false ? 0 : +new Date();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        };
        return function (...args) {
            let now = +new Date();
            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
            if (!previous && options.leading === false) {
                previous = now;
            }
            // 延迟执行时间间隔
            let remaining = wait - (now - previous);
            context = this;
            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
            // remaining大于时间窗口wait，表示客户端系统时间被调整过
            if (remaining <= 0 || remaining > wait) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
                if (!timeout) {
                    context = args = null;
                }
                // 如果延迟执行不存在，且没有设定结尾边界不执行选项
            }
            else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

}