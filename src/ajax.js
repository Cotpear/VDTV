function LoadSection(url,section,after){
  $(section).hide()
  $(section).load(url + ' ' + section,function(data){
    alert(data)
    after(data)
    $(section).show()
  })
  history.pushState('',{},url)
}
