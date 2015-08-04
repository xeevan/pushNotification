
Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',function(){
	if(Meteor.userId()){
		this.render('form');
	}
	else{
		this.render('login');
	}
});

Router.route('/signup', function(){
	this.render('signup');
});

Router.route('/login', function(){
	this.render('login');
});