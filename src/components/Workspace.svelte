<script>
export let templateString

let index = 0

$: line = ~~(index / 80)
$: column = (index % 80)
$: selectedChars = templateString[index]

const handleKeypress = (event) => {
  console.log(event)
  switch (event.key) {
    case 'h': {
      if (index === 0) return
      index -= 1
      break
    }
    case 'l': {
      if (index>=templateString.length-1) return
      index+=1;
      break;
    }
    case 'j': {
      if (index>=templateString.length-1) return
      index = Math.min(index+80, templateString.length-1)
      break
    }
    case 'k': {
      if (index === 0) return
      index = Math.max(index-80, 0)
      break
    }
  }
}
</script>

<svelte:window on:keypress={handleKeypress}></svelte:window>

<div class="workspace">
  <pre class="template-string">{templateString}</pre>
  <code class="cursor" style="top: {line}em; left: {column}ch;">{selectedChars}</code>
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
    background-color: var(--background-color);
    color: var(--text-color);

  .cursor
    width: 1ch;
    height: 1em;
    position: absolute
    filter invert(1)

</style>
