export function fromNow (time) {
	
  const between = Date.now() / 1000 - (new Date(time).getTime()) / 1000
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else if (between < 86400 * 30) {
      return pluralize(~~(between / 86400), ' day')
    } else if (between < 86400 * 30 * 12) {
      return pluralize(~~(between / (86400 * 30)), ' month')
    } else {
      return pluralize(~~(between / (86400 * 30 * 12)), ' year')
    }
}

function pluralize(time, label) {
    if (time === 1) {
        return time + label
    }

    return time + label + 's';
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