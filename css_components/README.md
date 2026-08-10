# SafeX UI Components

A simple UI component library with buttons, cards, navbar, alerts, and footer.

---

## How to Use

1. Add this to your HTML:
   <link rel="stylesheet" href="safx-components.css" />

2. Use the classes in your HTML.

---

## Components

### Buttons

Classes: .btn-primary, .btn-secondary, .btn-outline, .btn-ghost
Sizes: .btn-sm (small), .btn-lg (large)

Example:
<button class="btn btn-primary">Click Me</button>

---

### Cards

Classes: .card-primary, .card-secondary, .card-accent

Example:

<div class="card card-primary">
  <div class="card-title">Title</div>
  <div class="card-text">Content</div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
  </div>
</div>

---

### Navbar

Class: .navbar

Example:

<nav class="navbar">
  <a href="#" class="navbar-brand">Logo</a>
  <div class="navbar-links">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
</nav>

---

### Alerts

Classes: .alert (info), .alert-success, .alert-warning, .alert-danger

Example:

<div class="alert alert-success">
  <span class="alert-icon">✅</span>
  <span class="alert-message">Success!</span>
  <button class="alert-dismiss">✕</button>
</div>

---

### Footer

Class: .footer

Example:

<footer class="footer">
  <div class="footer-inner">
    <span>© 2026 Your Company</span>
    <div class="footer-links">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  </div>
</footer>

---

## Files

- index.html - Demo page
- safx-components.css - Component styles
- README.md - This file
