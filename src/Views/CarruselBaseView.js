var nunjucks = require( 'nunjucks' );
nunjucks.env = new nunjucks.Environment();
nunjucks.env.addFilter( 'test', function( test ) {
    return test+' (Nunjucks Test Filter)';
});

var ActionView = require('./ActionView');
var PlaylistView = require('./PlaylistView');

module.exports = CarruselBaseView = Backbone.View.extend({

	template 	: require('../Templates/CarruselViewTemplate.nunj'),
	
	initialize 	: function(options){
		if( options ){ _.extend( this, options ); }
		if( this.hasContainers() ){
			this.renderCarrusel();
		}
		this.render();
		
	},
	getContainers: function(){
		this.$ActionContainer = $('[data-mod-container="action"]', this.$el);
		this.$PlaylistContainer = $('[data-mod-container="playlist"]', this.$el);
	},
	hasContainers: function(){
		this.getContainers();
		return this.$ActionContainer.length && this.$PlaylistContainer.length;
	},
	renderCarrusel: function(){
		this.$el.html( this.template.render() );
		this.getContainers();
	},
	render 		: function(){
		this.ActionContainer = new ActionView({el:this.$ActionContainer});
		this.PlaylistContainer = new PlaylistView({el:this.$PlaylistContainer});
		this.onRenderComplete()
		return this;
	},
	onRenderComplete: function(){
		
	},
});