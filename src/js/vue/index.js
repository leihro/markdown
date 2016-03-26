new Vue({
  el: '#my-editor',
  data: {
    input: '# Just a simple md my-Editor\n\n[cheatsheet](http://md.captainpanda.de/cheatsheet.html) if you needed'
  },
  filters: {
    marked: marked
  }
})