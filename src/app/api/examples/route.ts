import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const examplesDir = path.join(process.cwd(), 'data', 'examples');
    
    if (!fs.existsSync(examplesDir)) {
      return NextResponse.json({ examples: [] });
    }

    const examples: Array<{
      name: string;
      description: string;
      files: Array<{
        name: string;
        content: string;
        type: string;
      }>;
    }> = [];
    const exampleDirs = fs.readdirSync(examplesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const exampleDir of exampleDirs) {
      const examplePath = path.join(examplesDir, exampleDir);
      const files = fs.readdirSync(examplePath, { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);

      const exampleFiles: Array<{
        name: string;
        content: string;
        type: string;
      }> = [];
      
      for (const file of files) {
        const filePath = path.join(examplePath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        const ext = path.extname(file).toLowerCase();
        
        let type: string;
        switch (ext) {
          case '.html':
            type = 'html';
            break;
          case '.js':
            type = 'js';
            break;
          case '.vue':
            type = 'vue';
            break;
          case '.css':
            type = 'css';
            break;
          case '.json':
            type = 'json';
            break;
          case '.md':
            type = 'md';
            break;
          default:
            type = 'txt';
        }

        exampleFiles.push({
          name: file,
          content,
          type
        });
      }

      // Try to read README or description file
      let description = '';
      const readmePath = path.join(examplePath, 'README.md');
      if (fs.existsSync(readmePath)) {
        description = fs.readFileSync(readmePath, 'utf8');
      }

      examples.push({
        name: exampleDir,
        description: description || `${exampleDir} example`,
        files: exampleFiles
      });
    }

    return NextResponse.json({ examples });
  } catch (error) {
    console.error('Error loading examples:', error);
    return NextResponse.json({ examples: [] });
  }
}
