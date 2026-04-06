# Page Structure

VaultEscape complies with the structural guidelines of FORTIFIED v2 to ensure consistency, SEO strength, and performance. 

## Included Pages

1. **`index.html`** - Core Home Page 1
2. **`home2.html`** - Alternative Home Page 2
3. **`about.html`** - Detailed about section for your company
4. **`services.html`** - Overview of all your escape rooms/experiences
5. **`service-details.html`** - Deep dive into a specific room
6. **`blogs.html`** - Articles list / news
7. **`blog-details.html`** - Individual news article reading page
8. **`contact.html`** - Contact form and map integration
9. **`user-dashboard.html`** - User account management interface
10. **`admin-dashboard.html`** - Backend layout for administrators
11. **`login.html` & `register.html`** - Standard authentication views
12. **`404.html`** - Missing route
13. **`coming-soon.html`** - Holding page for unreleased locations or experiences

## Code Hierarchy
Every generated layout uses the following structural rule:
```html
<!-- SECTION: [NAME] -->
<section class="section section-[name]">
  <div class="container">
     <!-- Content -->
  </div>
</section>
```
To create a new page, duplicate an existing one to ensure Navbar, Footer, and base scripts are properly maintained.
