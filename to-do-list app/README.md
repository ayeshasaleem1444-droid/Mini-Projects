# To-Do List

A simple to-do list built with HTML, CSS and JavaScript. Open index.html in a browser — no build step, no server needed.

## Features

- Add a task with the + Add button, or by pressing Enter
- Empty tasks are blocked with an alert
- Click a task or its checkbox to mark it done — done tasks get a line through them
- Delete one task with the x button
- Clear all completed tasks with "Clear completed"
- Filter the list: All / Active / Done
- Counters at the top: Total, Done, Remaining
- Empty state: "No tasks available" when the list is empty

## Saving

Tasks are kept only while the page is open. Refreshing the page clears the list, because script.js stores tasks in a plain array and never saves them to localStorage. Adding localStorage saving is a future improvement, not a current feature.

## How to run

Open to-do-list app/index.html in a browser.