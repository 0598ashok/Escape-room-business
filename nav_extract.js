const fs = require('fs');
const content = fs.readFileSync('template/index.html', 'utf8');

const navStart = content.indexOf('<!-- Navbar -->');
const heroStart = content.indexOf('<!-- ======================== HERO ======================== -->');
const navContent = content.substring(navStart, heroStart);

const footerStart = content.indexOf('<!-- ======================== FOOTER ======================== -->');
const endHtml = content.indexOf('<script src="assets/js/main.js"></script>');
const footerContent = content.substring(footerStart, endHtml);

fs.writeFileSync('nav.txt', navContent);
fs.writeFileSync('footer.txt', footerContent);
