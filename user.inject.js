/******************************************************************************
 * Firefox bullshit removal                                                   *
 * https://gist.github.com/haasn/69e19fc2fe0e25f3cff5                         *
 * Retrieved 7 December 2015                                                  *
 ******************************************************************************/
/* Websockets */
user_pref("network.websocket.enabled",		false);

/* DRM */
user_pref("media.eme.enabled",		false);
user_pref("media.gmp-eme-adobe.enabled",		false);

/* GeoLocation / Beacon */
user_pref("geo.wifi.logging.enabled",		false);
user_pref("geo.wifi.uri",		"");

/* Safe browsing */
user_pref("browser.safebrowsing.enabled",		false);
user_pref("browser.safebrowsing.downloads.enabled",		false);
user_pref("browser.safebrowsing.malware.enabled",		false);

/* Social media integration */
user_pref("social.directories",		"");
user_pref("social.whitelist",		"");
user_pref("social.manifest.facebook",		"");
user_pref("social.remote-install.enabled",		false);
user_pref("social.toast-notifications.enabled",		false);

/* Device tracking/statistics */
user_pref("camera.control.autofocus_moving_callback.enabled",		false);

/* Recommended addons (bonus) */
/*
 * - [HTTPS Everywhere](https://www.eff.org/https-everywhere): Prefer HTTPS over HTTP even for sites that do not force HSTS.
 * - [μBlock₀](https://github.com/gorhill/uBlock): Block access to all known ads, malware domains, badware, and other malicious scripts and domains.
 * - [uMatrix](https://github.com/gorhill/uMatrix) or [NoScript](https://noscript.net/)+[RequestPolicy](https://requestpolicycontinued.github.io/): Block scripts, images, CSS, objects and other (possibly external) requests by default, using a whitelist to selectively allow them. This is highly recommended as they all pose significant threats to security and privacy.
 */
 
