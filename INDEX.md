# TYPO3 TypeScript Documentation (unofficial)

This is a rendered documentation of the TypeScript code provided in the TYPO3 core!

The core contains a lot of JavaScript functionality that can be used in custom backend modules and other places, but it is barely documented (on [docs.typo3.org](https://docs.typo3.org)), but it has documentation in the code.

This website is a slightly (automagically) modified version of the code documentation rendered using [TypeDoc](https://typedoc.org/).

_This can be compared to what [api.typo3.org](https://api.typo3.org/), providing a browsable variant of the PHP doc-comments._

----

**Note:** The comments in the code aren't really perfect for automated documentation generation, so the resulting documentation looks really _funky_, to say the least. I tried to circumvent this as much as possible with throwing some plugins into the mix, but it only works so-and-so much.

Examples of broken generation behaviour:
* all the `<internal>` namespaces. These are technically meant to be several different ones, but there aren't supposed to be more than one, so the generation collides and the list shows many, but the page only lists a single containing class.
* the `export=` properties, which contain references to actual classes, because the Core developers decide to not properly do default/named exports and that trips up TypeDoc.

I might write up some plugins myself in the future, but that requires looking into that. So this is the first draft of the generated documentation!

If you know what you are looking for, you can always use the search at the top!

----

## [You probably want to start here](modules.html)