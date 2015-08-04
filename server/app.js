Meteor.methods({
	'notify': function(title, message) {
		return App.notificationClient.sendNotification(this.userId, {
			title: title,
			message: message
		});
	}
});

Meteor.methods({
	'save-notification':function(notification){
		Notifications.insert(notification);
	}
});