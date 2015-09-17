# Firefox security and privacy tweaks list in about:config

This is BytesTuner's custom list of “must-have” tweaks in about:config settings required to turn Firefox into a more secure and privacy friendly browser.

Thanks to Niklas Haas for his personal list! :)

First open a new tab in firefox and type “about:config”. Press Enter. Next, click on “I’ll be careful, I promise!” and search the following preferences. Finally, change them to the recommended values:

## Built-in Ads system

Prevent the new built-in ads system to send information to Mozilla by removing the values from these preferences.

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

These force FF to only accept cookies from the originating site (block third party cookies) and accept them for the current session only.

```
network.cookie.cookieBehavior = 1
network.cookie.lifetimePolicy = 2
```
## Offline cache

Disable offline cache

```
browser.cache.offline.enable = false
```

## Link pre-fetching

These will make Firefox connect with *arbitrary* links on a page by the simple act of hovering over them, without your explicit permission if not disabled.

```
network.http.speculative-parallel-limit=0
```

## Network

```
network.websocket.enabled=false *
network.dns.disablePrefetch=true *
network.prefetch-next=false *
```

## Browser:

```
dom.event.clipboardevents.enabled=false
dom.battery.enabled=false
browser.safebrowsing.enabled=false
browser.safebrowsing.downloads.enabled=false
browser.safebrowsing.malware.enabled=false
browser.send_pings=false
browser.beacon.enabled=false
```

## Geolocation:

```
geo.enabled=false
geo.wifi.logging.enabled=false
```

## Tracking:

```
privacy.trackingprotection.enabled=true
```

## Stats Collection:

```
datareporting.healthreport.service.enabled=false
datareporting.healthreport.uploadEnabled=false
toolkit.telemetry.enabled=false
```

## Integration:

```
loop.enabled=false
browser.pocket.enabled=false
```

## Media:

```
media.peerconnection.enabled=false
media.eme.enabled=false
media.gmp-eme-adobe.enabled=false
webgl.disabled=true
```

## Device:

```
camera.control.face_detection.enabled=false
camera.control.autofocus_moving_callback.enabled=false
device.sensors.enabled=false
```

## Encryption:

```
security.tls.unrestricted_rc4_fallback=false
security.tls.insecure_fallback_hosts.use_static_list=false
```

 
