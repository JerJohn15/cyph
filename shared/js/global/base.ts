/**
 * @file Normalises global namespace across varying runtime environments.
 */


import {IWebSign} from 'typings/iwebsign';


self['IS_WEB']	= typeof self['IS_WEB'] !== 'undefined' ?
	self['IS_WEB'] :
	typeof window === 'object'
;
/** @ignore */
const IS_WEB: boolean	= self['IS_WEB'];

for (const k of ['window', 'document']) {
	if (!(k in self)) {
		self[k]	= self;
	}
}

for (const k of [
	'history',
	'location',
	'navigator',
	'Audio'
]) {
	if (!(k in self)) {
		self[k]	= null;
	}
}


/* Fix non-compliant crypto implementations */

if (
	typeof crypto !== 'undefined' &&
	crypto.getRandomValues &&
	typeof crypto.getRandomValues(new Uint32Array(1)) === 'undefined'
) {
	const getRandomValues	= crypto.getRandomValues;
	crypto.getRandomValues	= array => {
		getRandomValues.call(crypto, array);
		return array;
	};
}


/**
 * @global Cross-browser container of values in self.location.
 */
const locationData: Location	= typeof self['locationData'] !== 'undefined' ?
	self['locationData'] :
	location
;

/**
 * @global Cross-browser container of values in self.navigator.
 */
const navigatorData: Navigator	= typeof self['navigatorData'] !== 'undefined' ?
	self['navigatorData'] :
	navigator
;


 /**
 * @global Event handler for messages to the current thread.
 */
declare let onthreadmessage: (e: MessageEvent) => any;

/**
 * @global String containing compiled contents of fonts.scss
 * (only exists in main thread of production environments).
 */
declare let FontsCSS: string;

/**
 * @global Object containing translations for English phrases
 * (only exists in main thread of production environments).
 */
declare let Translations: {[language: string] : {[text: string] : string}};

/**
 * @global WebSign object (only created in WebSigned environments).
 */
declare let WebSign: IWebSign;


/**
 * @global NTRU library.
 */
const Ntru: any		= self['ntru'];

/**
 * @global Sodium library.
 */
const Sodium: any	= self['sodium'];


export {
	locationData,
	navigatorData,
	onthreadmessage,
	FontsCSS,
	Ntru,
	Sodium,
	Translations,
	WebSign,
	IS_WEB
};

