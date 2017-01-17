/**
 * Created by korman on 23.11.16.
 */

define(['marionette', 'controller/IssueController'], function(Marionette, IssueController){

    var IssueRouter = Marionette.AppRouter.extend({
        controller: IssueController,
        appRoutes: {
            'issue/scan':'scan',
            'issue/send/:id': 'send'
        }
    });

    return new IssueRouter();
});