# personal-privacy-security-firefox-user.js
_Brought to GitHub in hopes of tracking source changes easier._

Personal: Might contain personal edits for my own convenience at the expense of...  
Privacy/Security: With no real intention of "blending in".  
Firefox user.js: This is a user preferences file!

## How to Use

1. Go to page "about:support"
2. Under "Application Basics", click the "Show Folder" button next to "Profile Folder".
3. Copy/Move this user.js file to the resulting directory.
4. Restart Firefox.
5. Return to page "about:support"
6. Confirm the file has been installed correctly by examining the following sections:
  1. Important Modified Preferences: There should be a lot of new entries that correspond to lines from this file.
  2. user.js Preferences: This section might not have existed before, but now does.

## Reminder: Merging from Further Upstream

Use the respective *-port/filter branch to only capture differences from the pyllyukko base template.  
Then merge into the *-port branch by "translating" the filediff into a user.js file that can be copied straight into trunk master.

## Edit History

### 18 Mar 2016

* Synched with https://gist.github.com/2cfe333d19adbf03ef7b.git (BytesTuner's gist)
* Synched with https://gist.github.com/69e19fc2fe0e25f3cff5.git (haasn's gist)
* Added note that `dom.event.clipboardevents.enabled ; false` will break Google Docs copy/paste functionality.  
  _(Can temporarily re-enabled through about:config)_
* Modify: `browser.safebrowsing.*.enabled ; false`  
  It is advised to use a hosts file instead of depending on Google.  
  Even if it appears that you are comparing the current site's hash against a pre-downloaded blacklist, Google can possibly censor sites as "malicious" \[citation needed: what do they base these blacklists off of?\]. Also, this might possibly reduce exposure to Google.

### 7 Mar 2016

* New section: Personal additions
  * `+ browser.link.open_newwindow.restriction ; 0`  
    Loads pop-ups as a normal tab (no UI minimisation/restriction)

### 6 Mar 2016

* Synched with https://github.com/pyllyukko/user.js.git

### 8 Jan 2016

* Commented out privacy.sanitize.sanitizeOnShutdown and related entries  
  (I'm a half-arse pleb that likes being able to restore previous sessions.)
