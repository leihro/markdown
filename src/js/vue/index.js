new Vue({
	el: '#my-editor',
	data: {
		input: '# Just a simple md editor\n\ncheatsheet below if you need it',
		cheatsheet: {
			'header': '# this is a header',
			'list': '- this is a list'
		}
	},
	filters: {
		marked: marked
	},
	methods: {
		addCheatSheet: function () {
  			var key,
  				cheatSheet = '';
	  		for(key in this.cheatsheet) {
	  			if(this.cheatsheet.hasOwnProperty(key)) {
	  				cheatSheet += '\n' + this.cheatsheet[key];
	  			}
	  		}

	  		return cheatSheet;
	  	}
  	},
  	created () {
  		this.input += this.addCheatSheet();
  	}
})