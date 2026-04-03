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
let count = 0;

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Desktop Nav
    const desktopSearch = '<li class="nav-item">\n          <span class="nav-link" tabindex="0" aria-haspopup="true">Dashboard <span class="chevron"';
    if (content.includes(desktopSearch) && !content.includes('Pages <span class="chevron"')) {
        content = content.replace(
            desktopSearch,
            '<li class="nav-item">\n          <span class="nav-link" tabindex="0" aria-haspopup="true">Pages <span class="chevron"\n              aria-hidden="true">▾</span></span>\n          <div class="nav-dropdown" role="menu">\n            <a href="404.html" role="menuitem"><span class="dd-icon">⚠️</span> 404 Error</a>\n            <a href="coming-soon.html" role="menuitem"><span class="dd-icon">⏳</span> Coming Soon</a>\n          </div>\n        </li>\n        ' + desktopSearch
        );
        changed = true;
    }

    // Mobile Drawer
    const mobileSearch = '<div class="mobile-nav-link" data-mobile-toggle="mob-dash-sub">';
    if (content.includes(mobileSearch) && !content.includes('mob-pages-sub')) {
        content = content.replace(
            mobileSearch,
            '<div class="mobile-nav-link" data-mobile-toggle="mob-pages-sub">\n        Pages <span>▾</span>\n      </div>\n      <div id="mob-pages-sub" class="mobile-sub" style="display:none">\n        <a href="404.html" class="mobile-sub-item">⚠️ 404 Error</a>\n        <a href="coming-soon.html" class="mobile-sub-item">⏳ Coming Soon</a>\n      </div>\n      ' + mobileSearch
        );
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        count++;
    }
}
console.log('Updated ' + count + ' files.');
