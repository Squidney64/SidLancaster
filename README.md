# Sid Lancaster - Personal Website

## Project Structure

```
Personal Site/
├── docs/                # GitHub Pages document root
│   ├── index.html       # Home page
│   ├── books.html       # All books page
│   ├── news.html        # News page
│   ├── series.html      # All series page
│   ├── books/           # Individual book pages
│   ├── series/          # Individual series pages
│   ├── src/             # CSS, JavaScript, and data files
│   │   ├── css/
│   │   ├── js/
│   │   └── data/
│   └── assets/          # Images and static assets
│       └── images/
└── README.md
```

## GitHub Pages Setup

This site is published via GitHub Pages from the `/docs` folder.

**GitHub Pages Settings:**
- Source: Deploy from branch `main`
- Folder: `/docs`
- Custom domain: `sidlancaster.com`

## URL Structure

Clean URLs without folder prefixes:
- Home: `sidlancaster.com/`
- Books: `sidlancaster.com/books.html`
- News: `sidlancaster.com/news.html`
- Series: `sidlancaster.com/series.html`
- Individual books: `sidlancaster.com/books/book-name.html`
- Individual series: `sidlancaster.com/series/series-name.html`

## Local Development

To test locally, set your web server's document root to the `docs/` folder.

**Using Python:**
```bash
cd "c:\Users\sidla\Desktop\Personal Site\docs"
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Live Server in VS Code:**
- Right-click on `docs/index.html` and select "Open with Live Server"
