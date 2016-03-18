/******************************************************************************
 * Firefox security and privacy tweaks list in about:config                   *
 * https://gist.github.com/haasn/69e19fc2fe0e25f3cff5                         *
 * Retrieved 7 December 2015                                                  *
 ******************************************************************************/
//PERSONAL// Commented out to enable referring to history
//user_pref("browser.sessionstore.max_tabs_undo",		0)

/*** Encryption ***/
user_pref(security.tls.insecure_fallback_hosts.use_static_list,		false)

