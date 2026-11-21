# Dynamic Profile Card

A small JavaScript project that turns form entries into profile cards — no page reload, no backend.

## What it does

The page opens with a simple form: **name, profession, bio,** and a **profile pic** (an image URL). When you submit the form, a profile card is created below it showing the photo in a circle, the name, the profession, and the bio.

You can submit the form again and again — each submission adds a new card next to the previous ones, and the form clears itself ready for the next entry.

## How it works

- The form's submit event is intercepted with `preventDefault()`, so the page never reloads
- JavaScript reads the four input values and builds a new card element (`div.card`) from them, setting the fourth value as the image's `src`
- The new card is appended to the container, which lays the cards out in a row using CSS Flexbox with wrapping
- Cards are styled with a beige background, rounded corners, and a circular photo (`border-radius` + `object-fit: cover`)

## Run it

Open `index.html` in a browser. For the photo, paste any image URL into the "profile pic" field.

## Honest limitations

Cards exist only while the page is open — there is no saving (no localStorage), editing, or deleting yet.

## Tech

HTML · CSS (Flexbox) · Vanilla JavaScript (DOM creation and events)
