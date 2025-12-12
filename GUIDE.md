# How to Edit Your Website (For Non-Developers)

Since your website is hosted on GitHub, you can make simple text and image updates directly in your browser without needing to install any code tools!

## How to Change Text

Most of the text on your website is located in two places:
1.  **`src/constants.ts`**: Navigation menus, service lists, and stats.
2.  **`src/pages/*.tsx`**: The actual page content (paragraphs, headings).

### Steps to Edit:
1.  Go to your repository on GitHub: [Simtope-Website-Redesign](https://github.com/shockandco-dev/Simtope-Website-Redesign)
2.  Navigate to the file you want to change (e.g., `src/pages/Home.tsx`).
3.  Click the **Pencil Icon** ✏️ in the top right of the file view to "Edit in place".
4.  Find the text you want to change and type your new text.
    *   *Tip:* Be careful not to delete any surrounding code like `<p>`, `</div>`, or `{ ... }`.
5.  Scroll to the bottom to the "Commit changes" box.
6.  Write a short message (e.g., "Update hero headline").
7.  Click **Commit changes**.

**That's it!** In about 2-3 minutes, your site will automatically rebuild and update with your new text.

## How to Change Images

Images are often referenced by URL (like Unsplash links) or stored in the `src/assets` folder.

### Changing an External Image (URL)
1.  Find the file (e.g., `src/pages/Satellite.tsx`).
2.  Look for the `src="..."` part of an `<img>` tag.
3.  Replace the URL with your new image link.

### Uploading a New Image
1.  Go to the `src/assets` folder on GitHub.
2.  Click **Add file** -> **Upload files**.
3.  Drag and drop your image.
4.  Commit the change.
5.  Now, in your code, you will need to update the import references. *This is slightly more advanced, so stick to external URLs if you can!*

## Where is my content?

| Section | File Path |
|box|box|
| **Navigation Menu** | `src/constants.ts` |
| **Home Page** | `src/pages/Home.tsx` |
| **Satellite Page** | `src/pages/Satellite.tsx` |
| **IoT SIM Page** | `src/pages/IoTAndESim.tsx` |
| **Footer Links** | `src/constants.ts` |
| **Contact Email** | `src/components/Contact.tsx` |
