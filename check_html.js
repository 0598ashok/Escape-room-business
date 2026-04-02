const fs = require('fs');
const content = fs.readFileSync('template/admin-dashboard.html', 'utf8');

const stack = [];
const tags = content.match(/<\/?([a-z1-6]+)[^>]*>/gi) || [];

tags.forEach(tag => {
  if (tag.startsWith('<!--')) return; // ignore comments
  const isClosing = tag.startsWith('</');
  const tagName = tag.match(/<\/?([a-z1-6]+)/i)[1].toLowerCase();
  
  const selfClosing = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].includes(tagName);
  if (selfClosing && !isClosing) return;

  if (isClosing) {
    const last = stack.pop();
    if (last !== tagName) {
      console.log(`Mismatch: found </${tagName}> but expected </${last}>`);
    }
  } else {
    stack.push(tagName);
  }
});

if (stack.length > 0) {
  console.log(`Unclosed tags: ${stack.join(', ')}`);
} else {
  console.log('All tags are balanced.');
}
