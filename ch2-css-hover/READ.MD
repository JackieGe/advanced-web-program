在Mouse hover时，如果快速点击鼠标，可能会丢失mouse hover的效果。这在windows上的浏览器经常出现，造成'闪烁'。虽然在macbook上出现的时候很少。

解决方案：点击鼠标时，添加isActive 样式，强制显示'hover'里的样式。等mouse out时，去掉isActive class。