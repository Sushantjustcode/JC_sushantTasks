#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get folder name from command line
const backendName = process.argv[2];

if (!backendName) {
    console.log("❌ Please provide a backend folder name.");
    console.log("👉 Example: create-node-day backend");
    process.exit(1);
}

// Create path where backend will be generated
const backendPath = path.join(process.cwd(), backendName);

// Check if folder already exists
if (fs.existsSync(backendPath)) {
    console.log(`❌ Folder "${backendName}" already exists.`);
    process.exit(1);
}

console.log(`\n🚀 Creating backend: ${backendName}\n`);

// =====================================
// FOLDERS
// =====================================

const folders = [
    "src/config",
    "src/controllers",
    "src/middleware",
    "src/models",
    "src/routes",
    "src/services",
    "src/utils",
    "src/validator"
];

folders.forEach((folder) => {
    const folderPath = path.join(backendPath, folder);

    fs.mkdirSync(folderPath, {
        recursive: true
    });

    console.log(`📁 Created ${folder}`);
});

// =====================================
// FILES
// =====================================

const files = {
    "src/app.js": `const express = require("express");

const app = express();

// Middleware
app.use(express.json());

module.exports = app;
`,

    "src/server.js": `const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`,

    ".env": `PORT=5000
`,

    ".gitignore": `node_modules
.env
`,

    "package.json": `{
  "name": "${backendName}",
  "version": "1.0.0",
  "description": "Node.js backend",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
`
};

// Create files
Object.entries(files).forEach(([file, content]) => {
    const filePath = path.join(backendPath, file);

    fs.writeFileSync(filePath, content);

    console.log(`📄 Created ${file}`);
});

// =====================================
// SUCCESS
// =====================================

console.log("\n=================================");
console.log("🎉 Backend created successfully!");
console.log("=================================\n");

console.log("Next steps:");

console.log(`  cd ${backendName}`);
console.log("  npm install express");
console.log("  npm install -D nodemon");
console.log("  npm run dev\n");
