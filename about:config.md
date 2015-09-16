# Firefox security and privacy tweaks list in about:config

This is BytesTuner's custom list of “must-have” tweaks in about:config settings required to turn Firefox into a more secure and privacy friendly browser.

Thanks to Niklas Haas for his personal list! :)

First open a new tab in firefox and type “about:config”. Press Enter. Next, click on “I’ll be careful, I promise!” and search the following preferences. Finally, change them to the recommended values:

## Built-in Ads system

Prevent the new built-in ads system to send your browsing information to Mozilla.

```
browser.newtabpage.directory.ping=""
browser.newtabpage.directory.source=""
```

## Closed tab history

Even with Firefox set to not remember history, your closed tabs are stored temporarily at Menu -> History -> Recently Closed Tabs.

```
browser.sessionstore.max_tabs_undo = 0
```

## Cookies

These force FF to only accept cookies from the originating site (block third party cookies) and accept them for the current session only

```
network.cookie.cookieBehavior = 1
network.cookie.lifetimePolicy = 2
```
## Offline cache

Disable offline cache

```
browser.cache.offline.enable = false
```

## WebSockets *

These can be used for nefarious purposes and to bypass access restrictions.

```
network.websocket.enabled=false
```

## JavaScript spy vectors *

These can be used for fingerprinting or data collection about the host system.

```
dom.event.clipboardevents.enabled=false
dom.battery.enabled=false
browser.send_pings=false
webgl.disabled=true
```

## WebRTC *

This is an inter-browser communication standard that is a **very significant** risk to your privacy and can be used to break out of VPN tunnels, proxies and unmask local users.

```
media.peerconnection.enabled=false
```

## Firefox Hello Integration *

Firefox connects to third-party (Telefonica) servers without asking for permission.

```
loop.enabled=false
```

## GeoLocation / Beacon *

These can be used for tracking and fingerprinting services and are harmful to your privacy

```
browser.beacon.enabled=false
geo.enabled=false
geo.wifi.logging.enabled=false
geo.wifi.uri="" (to verified, not included)
```

## Safe browsing *

This requires Firefox to communicate with a third party, Google by default, and also sends them metadata about your downloads.

```
browser.safebrowsing.enabled=false
browser.safebrowsing.downloads.enabled=false
browser.safebrowsing.malware.enabled=false
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
device.sensors.enabled=false
camera.control.face_detection.enabled=false
camera.control.autofocus_moving_callback.enabled=false
```

## Tracking protection

This makes Firefox block known tracking domains by default.

```
privacy.trackingprotection.enabled=true
```


## Stat tracking / telemetry

These are used by Mozilla to spy on you, and are as such a significant risk to privacy.

```
datareporting.healthreport.service.enabled=false
datareporting.healthreport.uploadEnabled=false
toolkit.telemetry.enabled=false
```

## Link pre-fetching

These will make Firefox connect with *arbitrary* links on a page by the simple act of hovering over them, without your explicit permission.

```
network.http.speculative-parallel-limit=0
```

## Cryptography hardening

This disables algorithms that are known to be weak or broken, and prevents most common attack vectors. Be warned that this may break some older websites that are not compatible with modern protocols.

### General settings

```
security.tls.unrestricted_rc4_fallback=false
security.tls.insecure_fallback_hosts.use_static_list=false
security.tls.version.min=1
security.ssl.require_safe_negotiation=true
security.ssl.treat_unsafe_negotiation_as_broken=true
security.ssl3.rsa_seed_sha=true
security.OCSP.enabled=1
security.OCSP.require=true
```

### Disable unnecessary protocols

This disables older protocols that are known to be weak or entirely broken (3DES, RC4 and MD5).

```
security.ssl3.rsa_rc4_128_sha=false
security.ssl3.rsa_rc4_128_md5=false
security.ssl3.rsa_des_ede3_sha=false
security.ssl3.ecdhe_ecdsa_rc4_128_sha=false
security.ssl3.ecdhe_rsa_rc4_128_sha=false
```

### Perfect forward secrecy

If you (additionally) want to force the usage of PFS, the only enabled ciphers should be of the ecdhe/dhe variants. Might break *lots* of stuff.

```
security.ssl3.rsa_aes_256_sha=false
```

### Force TLS 1.2

This disables TLS 1.0 and TLS 1.1 completely, which increases security as these older protocols may be used as attack vectors. (Note that TLS technically contains a mechanism for preventing protocol degradation attacks, but it requires participation from both the client and the server - which is not a guarantee in practice)

```
security.tls.version.min=3
```

# Recommended addons (bonus)

In addition to the above settings, I personally recommend the usage of at least the following addons:

- [HTTPS Everywhere](https://www.eff.org/https-everywhere): Prefer HTTPS over HTTP even for sites that do not force HSTS.
- [μBlock₀](https://github.com/gorhill/uBlock): Block access to all known ads, malware domains, badware, and other malicious scripts and domains.
- [uMatrix](https://github.com/gorhill/uMatrix) or [NoScript](https://noscript.net/)+[RequestPolicy](https://requestpolicycontinued.github.io/): Block scripts, images, CSS, objects and other (possibly external) requests by default, using a whitelist to selectively allow them. This is highly recommended as they all pose significant threats to security and privacy.
