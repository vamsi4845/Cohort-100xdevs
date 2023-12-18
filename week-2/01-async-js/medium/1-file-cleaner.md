## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs')

function removeExtraSpaces(path){
const content = fs.readFileSync(path,'utf8')
const modified = content.replace(/\s+/g,' ')
fs.writeFileSync(path,modified)
}
removedExtraSpaces('space.txt')
