function LoadSection(url,section,after){
  $(section).load(url + ' ' + section,after)
  history.pushState('',{},url)
}
