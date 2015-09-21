module.exports = PlaylistView = Backbone.View.extend({

	template 	: require('../Templates/PlaylistViewTemplate.nunj'),
	events 		: {
		"click [data-container='playlistItem']" : "onClickItemHandler"
	},
	initialize 	: function(options){
		if(options){ _.extend(this,options); }
		this.render();
	},
	render 		: function(){
		this.$el.html( this.template.render() );
		return this;
	},
	onClickItemHandler: function(evt){
		evt.preventDefault();
		console.log(evt.target);
	}
});