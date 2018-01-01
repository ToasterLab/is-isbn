# [is-isbn](https://www.npmjs.com/package/is-isbn)

This npm package validates your 10-digit & 13-digit ISBN codes according to their check digits.

<pre>
    const isIsbn = require('is-isbn')
    
    isIsbn.validate("030788743X") // true
    isIsbn.validate("130788743X") // false
    isIsbn.validate("0060523794") //true
    isIsbn.validate("9780670020553") // true
    isIsbn.validate("9780670020555") // false
    
</pre>

No dependencies.