<script>
export let templateString

let line = 0
let column = 0
$: templateArray = templateString.split('\n')
$: currentLine = templateArray[line]
$: selectedChars = templateArray[line][column]
$: cursorStyle = `top: ${line + ~~(column / 80)}em; left: ${column % 80}ch;`

const handleKeypress = (event) => {
  switch (event.key) {
    case 'h': {
      column = Math.max(0, column - 1)
      break
    }
    case 'l': {
      column = Math.min(column + 1, currentLine.length - 1)
      break
    }
    case 'j': {
      line = Math.min(line + 1, templateArray.length - 1)
      break
    }
    case 'k': {
      line = Math.max(0, line - 1)
      break
    }
    case 'w': {
      let cur = templateArray[line]
    }
  }
}
</script>

<svelte:window on:keypress={handleKeypress}></svelte:window>

<div class="workspace">
  <pre class="template-string">{templateString}</pre>
  <code class="cursor" data-testid="cursor" style={cursorStyle}>{selectedChars}</code>
</div>

<style lang="stylus">
.workspace
  position: relative;

  .template-string
  .cursor
    width: 80ch;
    height: 10em;
    line-height: 1;
    white-space: pre-line;
    word-break break-all
    background-color: var(--background-color);
    color: var(--text-color);

  .cursor
    width: 1ch;
    height: 1em;
    position: absolute
    filter invert(1)

</style>
