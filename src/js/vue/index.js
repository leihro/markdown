new Vue({
	el: '#my-editor',
	data: {
		input: '# Just a simple md editor\n\ncheatsheet below if you need it',
		cheatsheet: {
			'header': '## Header',
			'p': '"#" is header, "##", "###" or something like "----", "====="',
			'list': '- list _item 1_\n- list __item 2__\n* list ___item 3___\n* list ~~item 4~~',
			'blockquote': '>in Blockquote you can write Block information, usually used in Email for example',
			'code': '```javascript\nvar str = "write some javascript in markdown";\nconsole.log(str);\n```',
			'inline-code': 'Inline `code` has one `back-ticks`.',
			'number-list': '1. numeric list *item 1*\n2. numeric list **item 2**\n3. numeric list ***item 3***',
			'link': 'here is **another** [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) here, you can find more useful info about md, like table.'
		}
	},
	filters: {
		marked: marked
	},
	methods: {
		addCheatSheet: function () {
  			var key,
  				cheatSheet = '';
	  		for (key in this.cheatsheet) {
	  			if (this.cheatsheet.hasOwnProperty(key)) {
	  				cheatSheet += '\n\n' + this.cheatsheet[key];
	  			}
	  		}

	  		return cheatSheet;
	  	}
  	},
  	created: function () {
  		this.input += this.addCheatSheet();
  	}
})