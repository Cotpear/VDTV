function LoadSection(url,section,after){
  $(section).load(url + ' ' + section,function(data){
    after(data)
  })
  history.pushState('',{},url)
}
