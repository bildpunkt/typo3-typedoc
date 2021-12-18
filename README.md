# TYPO3 TypeScript Documentation (unofficial)

TYPO3 has a lot of backend JavaScript code in modules that can be utilized in development for extensions, but the documentation on docs.typo3.org is really sparse. Now, that could be easily fixed (and I should tend to that sometime) but thankfully, at least some of the more commonly used modules are documented in the code.

Using [TypeDoc](https://typedoc.org/) we can point that on the source files and generate some fancy looking documentation, this is what this project/repository is for, entirely unofficially!

## Usage

#### Pull the TYPO3 repository as a submodule
```shell
$ git submodule init
```

#### Install Node dependencies
```shell
$ npm install
```

#### Build the documentation
```shell
$ npm start
```

This does the following:
* Resets the repository to a clean state
* Installs the Node dependencies for the TYPO3 TypeScript
* Replaces `Module:` comments with `@module` (`scripts/replaceModuleComment.js`)
* Adds a `@summary` section to files with a description after `@module` sections (`scripts/addSummarySection.js`)

## License

This code is licensed under GPLv2