import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		this._super(...arguments);
		this.transitionto('org.repo.issues');
	}
});
