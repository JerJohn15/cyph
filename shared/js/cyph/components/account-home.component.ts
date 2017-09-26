import {Component} from '@angular/core';
import {AccountContactsService} from '../services/account-contacts.service';
import {AccountDatabaseService} from '../services/crypto/account-database.service';
import {EnvService} from '../services/env.service';


/**
 * Angular component for account home UI.
 */
@Component({
	selector: 'cyph-account-home',
	styleUrls: ['../../../css/components/account-home.scss'],
	templateUrl: '../../../templates/account-home.html'
})
export class AccountHomeComponent {
	constructor (
		/** @see AccountContactsService */
		public readonly accountContactsService: AccountContactsService,

		/** @see AccountDatabaseService */
		public readonly accountDatabaseService: AccountDatabaseService,

		/** @see EnvService */
		public readonly envService: EnvService
	) {}
}