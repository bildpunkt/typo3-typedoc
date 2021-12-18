const replaceInFiles = require('replace-in-files');

/**
 * Additionally, to content in `replaceModuleComment.js` there
 * are some files which have descriptions after the "Module:"
 * sections.
 * 
 * To circumvent module names carrying over into the descriptions,
 * this script has a hand-collected list of files which fall into above
 * criteria and places a "@summary" afterwards, so that text is properly
 * attributed as such
 * 
 * Also, both replacement actions aren't part of the same script because
 * both calls were...combined somehow and that messed with the replacement
 * logic, so I split those up in two! \o/
 */

replaceInFiles({
  files: [
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/LayoutModule/DragDrop.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/LayoutModule/Paste.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Storage/BrowserSession.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Storage/Client.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Storage/Persistent.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Toolbar/ClearCacheMenu.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Toolbar/SystemInformationMenu.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/AjaxDataHandler.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/ColorPicker.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/ContextHelp.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/ContextMenu.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/CopyToClipboard.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/DateTimePicker.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/DebugConsole.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/DocumentHeader.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/FormEngineReview.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Icons.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/ImageManipulation.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/LiveSearch.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Login.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Modal.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/MultiStepWizard.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/NewMultiplePages.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Notification.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/OnlineMedia.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/PageActions.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Popover.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Severity.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/SiteInlineActions.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/Toolbar.ts',
    'typo3/Build/Sources/TypeScript/backend/Resources/Public/TypeScript/UserPassLogin.ts',
    'typo3/Build/Sources/TypeScript/core/Resources/Public/TypeScript/SecurityUtility.ts'
  ],
  from: /\* @module (.+)/g,
  to: '* @module $1\n* @summary'
})
  .catch(error => {
    console.error('Error occurred:', error);
  });