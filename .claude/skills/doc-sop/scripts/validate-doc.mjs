#!/usr/bin/env node
/**
 * Validate Document Script
 * Validates a document against DOCUMENTATION-SOP.md quality checklist
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DocumentValidator {
  /**
   * Validates documentation against quality standards.
   */
  
  constructor(filePath) {
    this.filePath = filePath;
    this.content = null;
    this.errors = [];
    this.warnings = [];
  }
  
  readFile() {
    /** Read the document content. */
    try {
      this.content = fs.readFileSync(this.filePath, 'utf-8');
      return true;
    } catch (error) {
      this.errors.push(`Failed to read file: ${error.message}`);
      return false;
    }
  }
  
  checkFilename() {
    /** Check filename uses kebab-case and .mdx extension. */
    const filename = path.basename(this.filePath);
    
    // Check extension
    if (!filename.endsWith('.mdx')) {
      this.errors.push(`Filename must use .mdx extension (found: ${filename})`);
    }
    
    // Check kebab-case
    const nameWithoutExt = filename.slice(0, -4);
    if (/[A-Z]/.test(nameWithoutExt)) {
      this.errors.push(`Filename must use kebab-case (found uppercase in: ${filename})`);
    }
    
    if (/[_\s]/.test(nameWithoutExt)) {
      this.errors.push(`Filename must use kebab-case (found underscore/space in: ${filename})`);
    }
  }
  
  checkVersionInfo() {
    /** Check for version information. */
    // Check for version number
    if (!/\*\*Version\*\*:\s*v\d+\.\d+/.test(this.content)) {
      this.errors.push('Missing version information (format: **Version**: v1.0)');
    }
    
    // Check for last updated date
    if (!/\*\*Last Updated\*\*:\s*\d{4}-\d{2}-\d{2}/.test(this.content)) {
      this.errors.push('Missing last updated date (format: **Last Updated**: YYYY-MM-DD)');
    }
  }
  
  checkRequiredSections() {
    /** Check for required document sections. */
    const requiredSections = [
      [/## 📚 Concept Introduction/, 'Concept Introduction section'],
      [/## 🎯 Topic/, 'Topic section'],
      [/## 📝 Practical Application/, 'Practical Application section'],
      [/## 🔗 Related Concepts/, 'Related Concepts section'],
      [/## 📚 Learning Checkpoints/, 'Learning Checkpoints section'],
      [/## 🚀 Next Steps/, 'Next Steps section'],
    ];
    
    for (const [pattern, sectionName] of requiredSections) {
      if (!pattern.test(this.content)) {
        this.errors.push(`Missing required section: ${sectionName}`);
      }
    }
  }
  
  checkCodeBlocks() {
    /** Check code blocks for completeness. */
    // Find all code blocks
    const codeBlockRegex = /```(\w*)\n(.*?)```/gs;
    let match;
    
    while ((match = codeBlockRegex.exec(this.content)) !== null) {
      const lang = match[1];
      const code = match[2];
      
      if (['js', 'javascript', 'ts', 'typescript'].includes(lang.toLowerCase())) {
        // Check for imports
        if (!/import\s+/.test(code)) {
          this.errors.push('Code block missing import statements');
        }
        
        // Check for execution statements
        if (!/(Effect\.runSync|Effect\.runPromise|console\.log|return)/.test(code)) {
          this.errors.push('Code block missing execution statements');
        }
        
        // Check for TODO markers
        if (/(TODO|FIXME|XXX|HACK)/i.test(code)) {
          this.errors.push('Code block contains TODO/FIXME markers');
        }
        
        // Check for simplified implementations
        if (/implementation\s+omitted|省略|省略实现/i.test(code)) {
          this.errors.push('Code block contains simplified implementation markers');
        }
      }
    }
  }
  
  checkLearningCheckpoints() {
    /** Check for learning checkpoints. */
    if (!/- \[ \].*Checkpoint/.test(this.content)) {
      this.warnings.push('No learning checkpoints found');
    }
  }
  
  checkRelatedConcepts() {
    /** Check for related concepts. */
    if (!/- \*\*.*\*\*:/.test(this.content)) {
      this.warnings.push('No related concepts found');
    }
  }
  
  validate() {
    /** Run all validation checks. */
    if (!this.readFile()) {
      return false;
    }
    
    this.checkFilename();
    this.checkVersionInfo();
    this.checkRequiredSections();
    this.checkCodeBlocks();
    this.checkLearningCheckpoints();
    this.checkRelatedConcepts();
    
    return true;
  }
  
  report() {
    /** Generate validation report. */
    console.log('\n' + '='.repeat(60));
    console.log('Document Validation Report');
    console.log('='.repeat(60));
    console.log(`File: ${this.filePath}`);
    console.log('\n');
    
    if (this.errors.length > 0) {
      console.log(`❌ ERRORS (${this.errors.length}):`);
      for (const error of this.errors) {
        console.log(`   - ${error}`);
      }
      console.log('');
    }
    
    if (this.warnings.length > 0) {
      console.log(`⚠️  WARNINGS (${this.warnings.length}):`);
      for (const warning of this.warnings) {
        console.log(`   - ${warning}`);
      }
      console.log('');
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ All checks passed!');
    }
    
    console.log('='.repeat(60) + '\n');
    
    return this.errors.length === 0;
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.log('Usage: node validate-doc.mjs <path>');
    console.log('');
    console.log('Arguments:');
    console.log('  path    Path to the document file to validate');
    console.log('');
    console.log('Example:');
    console.log('  node validate-doc.mjs docs/ai/01-llm-fundamentals/01-llm-concepts/01-document.mdx');
    process.exit(1);
  }
  
  const filePath = args[0];
  const validator = new DocumentValidator(filePath);
  
  if (validator.validate()) {
    const success = validator.report();
    process.exit(success ? 0 : 1);
  } else {
    process.exit(1);
  }
}

main();
