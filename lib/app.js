/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {
	notificationClient: new NotificationClient({
		senderId: 501117838872,
		gcmAuthorization: "AIzaSyAE67TTPGdd2AGcG_L-yHiUmHg9JEU6qgw"
	})
};

Notifications = new Mongo.Collection('notifications');