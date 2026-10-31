# JT Muse '26

This is the repo of the website for the fourth edition of LGS JT Muse, LGS Johar Town's arts olympiad, which was held on 9–11 October 2026. The main purpose of the website was to help delegates explore the categories, find the study guides, register for the event, and get in touch with the Arts Council.

![JT Muse homepage](screenshots/home.png)

## Visit the website

Check out the website: [https://jtmuse.com](https://jtmuse.com/) 

```bash
https://jtmuse.com
```

Alt Link: [https://jtmuse26.vercel.app/](https://jtmuse26.vercel.app/)
```bash
https://jtmuse26.vercel.app/
```

## Structure & Layout:

### The homepage

The comic-style school illustration gives the site its character. The Muse logo sits in the middle, with the countdown and main navigation underneath. Gold text and dark, translucent panels carry the same look through the rest of the site.

The navigation stays within the hero when you first arrive, then moves to the top as you scroll past it. That keeps the opening screen focused on the artwork while still making the other pages easy to reach.

The 2026 event has passed, so the countdown now shows zero.

### Categories & Study Guides:

There are six main categories: Arts, Media, Literature, Music, Drama, and Miscellaneous. Each has its own illustrated card, when clicked respective category's page is opened and name of the categories are displayed. Opening a category will open the PDF study guide.

![The six JT Muse category cards](screenshots/categories.png)
![Music competitions and their study guide links](screenshots/study-guides.png)

### Registration:

The registration page embeds a Fillout form directly into the site. Delegates can reach it from the main navigation, and the form itself is managed through Fillout.

### Contact and location

The contact page showcases 10 Arts Council members along side 2 Registration Team Members. 6 Boxes represent 6 different roles and have 12 contacts. The school location is also added to help users navigate their way to the destination.

![JT Muse contact page with Arts Council contacts](screenshots/contact.png)

## Running locally

You'll need to install Node.js and npm. From the `jtmuse26` folder, run:

```bash
npm ci
npm run dev
```

Open the local host link displayed in the terminal, usually: [localhost:5173](http://localhost:5173/).

## Search and sharing

I also added page descriptions, social sharing metadata, a favicon, and a sitemap. The website is also connected to Google Search Console to monitor its performance in Google Search and help it display when someone uses Google to search for the website.

**Made by [Ahmad Hassan](https://github.com/ahmad-56), presented by the LGS JT IT Society.**
