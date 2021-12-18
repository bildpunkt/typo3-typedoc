const replaceInFiles = require('replace-in-files');

/**
 * A lot of TypeScript files utilize a "Module: " comment, which
 * is a cool prospect in general, but there is a "@module" keyword
 * 
 * This script just goes through all files and replaces the comments
 * which then can be utilized by TypeDoc
 */

replaceInFiles({
  files: 'typo3/Build/Sources/TypeScript/**/*.ts',
  from: /\* Module: /g,
  to: '* @module '
})
  .catch(error => {
    console.error('Error occurred:', error);
  });
