# Firefox bullshit removal

Due to the incessant swarm of complete and utter nonsense that has been forcing its way into Firefox over time, I've decided to start collecting my personal list of “must-have” about:config tweaks required to turn Firefox into a functional brower.

## WebSockets

These can be used for nefarious purposes and to bypass access restrictions.

```
network.websocket.enabled=false
```

## JavaScript spy vectors

These can be used for fingerprinting or data collection about the host system.

```
dom.event.clipboardevents.enabled=false
dom.battery.enabled=false
browser.send_pings=false
webgl.disabled=true
```

## Pocket integration

This is a proprietary tie-in service that is a risk to your privacy.

1. Drag the “pocket” icon off your toolbar. This step is important.
2. ```browser.pocket.enabled=false```

## WebRTC

This is an inter-browser communication standard that is a **very significant** risk to your privacy and can be used to break out of VPN tunnels, proxies and unmask local users.

```
media.peerconnection.enabled=false
loop.enabled=false
```

## DRM

This is a significant breach of your personal freedom and security.

```
media.eme.enabled=false
media.gmp-eme-adobe.enabled=false
```

## GeoLocation / Beacon

These can be used for tracking and fingerprinting services and are harmful to your privacy

```
browser.beacen.enabled=false
geo.enabled=false
geo.wifi.logging.enabled=false
geo.wifi.uri=""
```

## Safe browsing

This sends your browsing habits to third party services like Google.

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

This makes Firefox block known tracking domains by default, and send tracking opt-out headers.

```
privacy.trackingprotection.enabled=true
privacy.donottrackheader.enabled=true
```

## Stat tracking / telemtry

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

This disables algorithms that are known to be weak or broken, and prevents most common attack vectors. The settings presented here are somewhat conservative, as to avoid breaking the vast majority of the internet.

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

This disables 128-bit protocols (which may be weaker against potential partial breaks), older protocols (3DES, RC4) and known weak or broken algorithms (MD5).

```
security.ssl3.rsa_rc4_128_sha=false
security.ssl3.rsa_rc4_128_md5=false
security.ssl3.rsa_des_ede3_sha=false
security.ssl3.rsa_aes_128_sha=false
security.ssl3.dhe_rsa_aes_128_sha=false
security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256=false
security.ssl3.ecdhe_ecdsa_aes_128_sha=false
security.ssl3.ecdhe_ecdsa_rc4_128_sha=false
security.ssl3.ecdhe_rsa_aes_128_gcm_sha256=false
security.ssl3.ecdhe_rsa_aes_128=false
security.ssl3.ecdhe_rsa_rc4_128_sha=false
```

### Perfect forward secrecy

If you (additionally) want to force the usage of PFS, the only enabled ciphers should be of the ecdhe/dhe variants.

```
security.ssl3.rsa_aes_256_sha=false
```

### Force TLS 1.2

This disables TLS 1.0 and TLS 1.1 completely, which increases security as these older protocols may be used as attack vectors. Be warned that not this may break some websites.

```
security.tls.version.min=3
```

# Recommended addons (bonus)

In addition to the above settings, I personally recommend the usage of at least the following addons:

- ![HTTPS Everywhere](https://www.eff.org/https-everywhere): Prefer HTTPS over HTTP even for sites that do not force HSTS.
- [uBlock Origin](https://github.com/gorhill/uBlock): Block access to all known ads, malware domains, badware, and other malicious scripts and domains.
- [uMatrix](https://github.com/gorhill/uMatrix) or ![NoScript](https://noscript.net/)+![RequestPolicy](https://requestpolicycontinued.github.io/): Block scripts, images, CSS, objects and other (possibly external) requests by default, using a whitelist to selectively allow them. This is highly recommended as they all pose significant threats to security and privacy.
