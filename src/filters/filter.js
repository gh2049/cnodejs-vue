export function fromNow (time) {
	
  const between = Date.now() / 1000 - (new Date(time).getTime()) / 1000
    if (between < 3600) {
      return pluralize(~~(between / 60), ' 分钟')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' 小时')
    } else if (between < 86400 * 30) {
      return pluralize(~~(between / 86400), ' 天')
    } else if (between < 86400 * 30 * 12) {
      return pluralize(~~(between / (86400 * 30)), ' 月')
    } else {
      return pluralize(~~(between / (86400 * 30 * 12)), ' 年')
    }
}

function pluralize(time, label) {
    return time + label ;
}

export function getTab (tab) {
    switch (tab) {
        case 'share':
          return '分享'
        case 'good':
          return '精华'
        case 'job' :
          return '招聘'
        case 'ask' :
          return '问答'
        default : 
          return ''
    }
}