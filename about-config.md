# Firefox security and privacy tweaks list in about:config
_filediff for personal-privacy-security-firefox-user.js_

This is BytesTuner's custom list of “must-have” tweaks in about:config settings required to turn Firefox into a more secure and privacy friendly browser.

Thanks to Niklas Haas for his personal list! :)

Open a new tab in firefox and type “about:config”. Press Enter. Next, click on “I’ll be careful, I promise!” and search the following preferences. Finally, change them to the recommended values:

___
...
___

## Closed tab history

Even with Firefox set to not remember history, your closed tabs are stored temporarily at Menu -> History -> Recently Closed Tabs.

```
browser.sessionstore.max_tabs_undo = 0
```

___
...
___

# All the following settings can be easily disabled with a one additional add-on

The new [Privacy Settings](https://addons.mozilla.org/en-GB/firefox/addon/privacy-settings/) by Jeremy Schomery can save you a lot of time. 

Once you have installed it, open the addon preferences by clicking on the shield icon and simply click on the "Privacy (Compatible)" button to enable the recommended settings. This will bring you a maximum privacy configuration but will not force settings that might break some secure sites. You can even hovered your mouse on each settings to get better explanations.

Here is the full list of all the settings that this add-on will change automatically for you:

___
...
___

## Encryption

```
<!--...-->
security.tls.insecure_fallback_hosts.use_static_list=false
```

 
