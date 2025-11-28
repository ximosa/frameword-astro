import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, 'src', 'content', 'blog');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.mdx'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Simple regex based replacement to avoid heavy parsing dependencies if possible
    // But frontmatter parsing is tricky with regex.
    // Let's assume standard --- fence.

    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = content.match(frontmatterRegex);

    if (match) {
        let frontmatter = match[1];
        let body = content.replace(frontmatterRegex, '');

        // Parse frontmatter lines
        const lines = frontmatter.split('\n');
        const newLines = [];
        const data = {};

        lines.forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join(':').trim();
                data[key] = value;
            }
        });

        // Map fields
        const newData = {};
        newData.title = data.title || data.Title || '"Sin Título"';
        newData.excerpt = data.excerpt || data.description || data.Description || '"Descripción pendiente"';
        newData.date = data.date || data.pubDate || '"2025-01-01"';
        newData.author = data.author || '"Joaquín"';
        newData.image = data.image || data.heroImage || '"/blog-placeholder-default.jpg"';
        newData.category = data.category || '"Tecnología"';

        // Reconstruct frontmatter
        let newFrontmatter = '---\n';
        newFrontmatter += `title: ${newData.title}\n`;
        newFrontmatter += `excerpt: ${newData.excerpt}\n`;
        newFrontmatter += `date: ${newData.date}\n`;
        newFrontmatter += `author: ${newData.author}\n`;
        newFrontmatter += `image: ${newData.image}\n`;
        newFrontmatter += `category: ${newData.category}\n`;
        newFrontmatter += '---';

        const newContent = newFrontmatter + body;
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`Skipping ${file} (no frontmatter found)`);
    }
});
