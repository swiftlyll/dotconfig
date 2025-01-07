/*****
 * 
 * Name: Kennet Morales
 * Date: 27 October 2023
 * Source: https://github.com/arkenfox/user.js
 * Licence: https://github.com/arkenfox/user.js/blob/master/LICENSE.txt
 * 
 *****/  


/***Preferences ***/
/* Enables browsing from the URL bar.***/
user_pref("keyword.enabled", true);
/* 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
 * [NOTE] If "history" is true, downloads will also be cleared
 * [NOTE] "sessions": Active Logins: refers to HTTP Basic Authentication [1], not logins via cookies
 * [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
    //user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
    //user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
    //user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT: true]
    //user_pref("privacy.clearOnShutdown.history", true);   // [DEFAULT: true]
    //user_pref("privacy.clearOnShutdown.sessions", true);  // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
/* 4504: enable RFP letterboxing [FF67+] 
 * Removes RFP margin but keeps everything else.***/
user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]

/*** Hardening ***/
/* 5003: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites ***/
user_pref("signon.rememberSignons", false);
/* 5004: disable permissions manager from writing to disk [FF41+] [RESTART]
 * [NOTE] This means any permission changes are session only
 * [1] https://bugzilla.mozilla.org/967812 
 * [NOTE] This conflicts with site exceptions, only use if you don't want or plan on using saved logins. ***/
    // user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 5008: disable resuming session from crash
 * [TEST] about:crashparent ***/
user_pref("browser.sessionstore.resume_from_crash", false);
/* 5009: disable "open with" in download dialog [FF50+]
 * Application data isolation [1]
 * [1] https://bugzilla.mozilla.org/1281959 ***/
user_pref("browser.download.forbid_open_with", true);
/* 5010: disable location bar suggestion types
 * [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5016: discourage downloading to desktop
 * 0=desktop, 1=downloads (default), 2=custom
 * [SETTING] To set your custom default "downloads": General>Downloads>Save files to ***/
user_pref("browser.download.folderList", 2);
/* 5017: disable Form Autofill
 * If .supportedCountries includes your region (browser.search.region) and .supported
 * is "detect" (default), then the UI will show. Stored data is not secure, uses JSON
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
/* 7020: disable WebRTC (Web Real-Time Communication) ***/
user_pref("media.peerconnection.enabled", false);
