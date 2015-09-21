module.exports = ActionView = Backbone.View.extend({

	template 	: require('../Templates/ActionViewTemplate.nunj'),
	
	initialize 	: function(options){
		if(options){ _.extend(this,options); }
		this.render();
	},
	render 		: function(){
		this.$el.html( this.template.render() );
		//this.postRender();
		return this;
	}
});