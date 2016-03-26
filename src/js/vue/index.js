new Vue({
  el: '#my-editor',
  data: {
    input: '# Just a simple md editor\n\n[cheatsheet](http://md.captainpanda.de/cheatsheet.html) if you needed'
  },
  filters: {
    marked: marked
  }
})