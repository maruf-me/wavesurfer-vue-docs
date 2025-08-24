import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PACKAGE_REPO = 'git@github.com:meer-sagor/wavesurfer-vue.git';
const PACKAGE_REPO_URL = 'https://github.com/meer-sagor/wavesurfer-vue';
const TEMP_DIR = 'temp-package-repo';

async function syncDocs() {
  console.log('🚀 Syncing package repository content...');
  
  try {
    // Clean up any existing temp directory
    if (fs.existsSync(TEMP_DIR)) {
      execSync(`rm -rf ${TEMP_DIR}`);
    }
    
    // Clone package repo
    console.log('📥 Cloning package repository...');
    execSync(`git clone ${PACKAGE_REPO} ${TEMP_DIR}`);
    
    // Create data directory if it doesn't exist
    const dataDir = 'data';
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Copy files from package repo to docs data
    const filesToCopy = [
      { src: 'README.md', dest: 'data/package-readme.md' },
      { src: 'examples', dest: 'data/examples' },
      { src: 'package.json', dest: 'data/package.json' }
    ];
    
    console.log('📋 Copying files...');
    filesToCopy.forEach(({ src, dest }) => {
      const srcPath = path.join(TEMP_DIR, src);
      const destPath = dest;
      
      if (fs.existsSync(srcPath)) {
        if (fs.statSync(srcPath).isDirectory()) {
          // Copy directory
          if (fs.existsSync(destPath)) {
            execSync(`rm -rf ${destPath}`);
          }
          execSync(`cp -r ${srcPath} ${destPath}`);
          console.log(`✅ Copied directory: ${src} -> ${dest}`);
        } else {
          // Copy file
          execSync(`cp ${srcPath} ${destPath}`);
          console.log(`✅ Copied file: ${src} -> ${dest}`);
        }
      } else {
        console.log(`⚠️  File not found: ${srcPath}`);
      }
    });
    
    // Create package info file with metadata
    const packageJsonPath = path.join(TEMP_DIR, 'package.json');
    let packageInfo = {
      repoUrl: PACKAGE_REPO_URL,
      lastSynced: new Date().toISOString(),
      version: 'unknown',
      description: '',
      keywords: []
    };
    
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      packageInfo = {
        ...packageInfo,
        version: packageJson.version || 'unknown',
        description: packageJson.description || '',
        keywords: packageJson.keywords || []
      };
    }
    
    fs.writeFileSync(
      'data/package-info.json',
      JSON.stringify(packageInfo, null, 2)
    );
    
    // Update main README.md with link to package repo
    const mainReadmeContent = `# WaveSurfer Vue Documentation

This is the documentation site for [WaveSurfer Vue](${PACKAGE_REPO_URL}) - a Vue.js wrapper for WaveSurfer.js.

## Package Repository

📦 **Package**: [WaveSurfer Vue](${PACKAGE_REPO_URL})  
📋 **Version**: ${packageInfo.version}  
📝 **Description**: ${packageInfo.description}  
🔄 **Last Synced**: ${new Date(packageInfo.lastSynced).toLocaleString()}

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 📖 **Interactive Documentation**: Browse the package README with syntax highlighting
- 🎯 **Live Examples**: View and interact with package examples
- 🔗 **Direct Links**: Quick access to the package repository
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Learn More

To learn more about the WaveSurfer Vue package, visit the [package repository](${PACKAGE_REPO_URL}).

This documentation site is built with [Next.js](https://nextjs.org).
`;

    fs.writeFileSync('README.md', mainReadmeContent);
    
    console.log('✅ Documentation synced successfully!');
    console.log(`📦 Package version: ${packageInfo.version}`);
    console.log(`🔗 Package repo: ${PACKAGE_REPO_URL}`);
    
  } catch (error) {
    console.error('❌ Error syncing docs:', error instanceof Error ? error.message : String(error));
  } finally {
    // Cleanup
    if (fs.existsSync(TEMP_DIR)) {
      execSync(`rm -rf ${TEMP_DIR}`);
    }
  }
}

syncDocs();