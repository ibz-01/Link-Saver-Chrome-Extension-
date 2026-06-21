# Link Saver Chrome Extension

A simple Chrome extension that lets you save, manage, and quickly access your favorite links or the current browser tab. All links are stored locally using `localStorage`, so your data persists even after closing the browser.

---

Features

* Save any URL manually
* Save the current active tab with one click
* Automatically adds `https://` if missing
* Delete individual saved links
* Clear all saved links at once
* Persistent storage using `localStorage`
* Simple and clean UI

---

How It Works

1. Enter a link (e.g. `instagram.com`) and click **Save Link**
2. Or click **Save Tab** to store the current page
3. Click any saved link to open it in a new tab
4. Remove links using the **X** button
5. Use **Delete All** to clear everything

---

Tech Stack

* HTML
* CSS
* JavaScript
* Chrome Extensions API (Manifest V3)
* localStorage

---

Project Structure

```
link-saver/
│── index.html
│── index.js
│── index.css
│── manifest.json
│── icon.png
```

---

Installation (Development Mode)

1. Clone or download this repository
2. Open Chrome and go to:

   ```
   chrome://extensions/
   ```
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the project folder

---

Permissions

This extension uses:

* `tabs` → to access the current active tab URL
* `activeTab` → to safely read tab data when needed

---


## 📌 Notes

* Links are stored locally in the browser (`localStorage`)
* Data will persist unless manually cleared
* Works only in Chrome (Manifest V3)

---

## 🧑‍💻 Author

Built as a learning project for mastering Chrome extensions and JavaScript fundamentals.
