# Sid Lancaster - Personal Website

## Project Structure

```
Personal Site/
├── public/              # Document root - set this as your web server root
│   ├── index.html       # Home page
│   ├── books.html       # All books page
│   ├── news.html        # News page
│   ├── series.html      # All series page
│   ├── books/           # Individual book pages
│   └── series/          # Individual series pages
├── src/
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   └── data/            # Data files
└── assets/              # Images and static assets
```

## URL Structure

With `public/` set as the document root, your URLs will be clean:
- Home: `yoursite.com/`
- Books: `yoursite.com/books.html`
- News: `yoursite.com/news.html`
- Series: `yoursite.com/series.html`
- Individual books: `yoursite.com/books/book-name.html`
- Individual series: `yoursite.com/series/series-name.html`

## Local Development

To test locally, set your web server's document root to the `public/` folder.

**Using Python:**
```bash
cd "c:\Users\sidla\Desktop\Personal Site\public"
python -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Live Server in VS Code:**
- Right-click on `public/index.html` and select "Open with Live Server"
