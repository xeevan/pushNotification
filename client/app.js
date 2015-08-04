/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

/*App.helpers = {
	showForm: function() {
		return (Meteor.user() && !Meteor.isCordova);
	}
};*/

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Template.form.events({
	'click [data-action="send-notification"], submit': function (event, template) {
		event.preventDefault();
		var notification = {title:template.$('[data-field="title"]').val(),message:template.$('[data-field="message"]').val()};
		console.log(notification);
		Meteor.call('save-notification',notification,function(err,res){
			if(!err){
					Meteor.call('notify', template.$('[data-field="title"]').val(), template.$('[data-field="message"]').val(), function(err, res) {
					if (err) {
						console.log(err);
					} else {
						if (res.userCount) {
							alert('Notification sent.');
						}
					}
				});
			}
			else{
				alert(err.reason);
			}
		});		
	}
});

Accounts.ui.config({
 	passwordSignupFields: 'USERNAME_ONLY'
 });

Template.login.events({
	'click #loginButton': function(events, template){
		events.preventDefault();
		//alert(1);
		email = template.find('#userEmail').value,
		password = template.find('#userPassword').value;

		Meteor.loginWithPassword(email, password, function(error, result){
			if(!error){
				alert(1);
				Router.go('/');
			}else{
				$('#logError').text(error.reason);
			}
		});
	}
});

Template.signup.events({
	'submit #signupForm' : function(e, template){
		e.preventDefault();
		var user={
			profile:{username: template.find('#userName').value,avatar:null},
			email: template.find('#userEmail').value,
			password: template.find('#userPassword').value
		};

		Accounts.createUser(user, function(error, result){
			if(error){
				$('#signupError').text(error.reason);
			}else{
				Router.go('/');
			}

		});
	}
});

Template.navbar.events({
	'click #logout': function(eve,tem){
		eve.preventDefault();
		Meteor.logout(function(err,res){
			if(!err)
				Router.go('/');
		});
	}
});