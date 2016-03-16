# Firefox bullshit removal
_filediff for personal-privacy-security-firefox-user.js_

Due to the incessant swarm of complete and utter nonsense that has been forcing its way into Firefox over time, I've decided to start collecting my personal list of “must-have” about:config tweaks required to turn Firefox into a functional brower.

## WebSockets

These can be used for nefarious purposes and to bypass access restrictions.

```
network.websocket.enabled=false
```

___
...
___

## DRM

This is a significant breach of your personal freedom and security.

```
media.eme.enabled=false
media.gmp-eme-adobe.enabled=false
```

## GeoLocation / Beacon

These can be used for tracking and fingerprinting services and are harmful to your privacy

```
<!-- ... -->
geo.wifi.logging.enabled=false
geo.wifi.uri=""
```

## Safe browsing

This requires Firefox to communicate with a third party, Google by default, and also sends them metadata about your downloads.

```
<!-- ... -->
browser.safebrowsing.downloads.enabled=false
<!-- ... -->
```

## Social media integration

This anti-feature lets social media platforms integrate directly into your browser

```
social.directories=""
social.whitelist=""
social.manifest.facebook=""
social.remote-install.enabled=false
social.toast-notifications.enabled=false
```

## Device tracking/statistics

These can be used to fingerprint your system and track you.

```
<!-- ... -->
camera.control.autofocus_moving_callback.enabled=false
```

___
...
___

# Recommended addons (bonus)

In addition to the above settings, I personally recommend the usage of at least the following addons:

- [HTTPS Everywhere](https://www.eff.org/https-everywhere): Prefer HTTPS over HTTP even for sites that do not force HSTS.
- [μBlock₀](https://github.com/gorhill/uBlock): Block access to all known ads, malware domains, badware, and other malicious scripts and domains.
- [uMatrix](https://github.com/gorhill/uMatrix) or [NoScript](https://noscript.net/)+[RequestPolicy](https://requestpolicycontinued.github.io/): Block scripts, images, CSS, objects and other (possibly external) requests by default, using a whitelist to selectively allow them. This is highly recommended as they all pose significant threats to security and privacy.
