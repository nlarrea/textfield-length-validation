# Text field length validation

> This should be used in the following manner:

Install with the command:

```bash
npm install --save textfield-length-validation
```

<br>

Then, in your code:

```js
import { lengthValidation } from 'textfield-length-validation';

let isValid = lengthValidation(input, counter, maxCharacters);
```

<br>

Where:

- `input` is the input field
- `counter` could be a `<span>` tag to show the character countdown
- `maxCharacters` is the maximum number of characters allowed