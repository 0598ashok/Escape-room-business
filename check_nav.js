const fs = require('fs');

function getFiles(dir, files_) {
    files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (const i in files) {
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            if (name.endsWith('.html')) {
                files_.push(name);
            }
        }
    }
    return files_;
}

const htmlFiles = getFiles('template');
for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('<li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>') && !content.includes('Pages <span class="chevron"')) {
        console.log('Missing Desktop contact match exactly:', file);
    }
    if (!content.includes('<a href="contact.html" class="mobile-nav-link">Contact</a>') && !content.includes('mob-pages-sub')) {
        console.log('Missing Mobile contact match exactly:', file);
    }
}
