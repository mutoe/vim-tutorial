<script>
import Workspace from './components/Workspace.svelte'
export let templateString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada laoreet magna, ac posuere nibh accumsan a. Proin libero mauris, malesuada vel interdum eu, sollicitudin eu tortor. Vestibulum quis turpis egestas, sollicitudin dui at, dignissim lorem.

Fusce eros enim, volutpat ac accumsan quis, faucibus id enim. Maecenas egestas tristique elit nec gravida. Aliquam non quam felis. Nulla quam orci, feugiat ut ante nec, finibus suscipit arcu. Quisque fringilla ipsum ac ante sollicitudin semper. Sed sit amet eleifend lorem. Pellentesque vulputate mauris nec justo auctor lacinia. Phasellus non libero id sem vestibulum porttitor sed id dolor.

Fusce eros enim, volutpat ac accumsan quis, faucibus id enim. Maecenas egestas tristique elit nec gravida. Aliquam non quam felis. Nulla quam orci, feugiat ut ante nec, finibus suscipit arcu. Quisque fringilla ipsum ac ante sollicitudin semper. Sed sit amet eleifend lorem. Pellentesque vulputate mauris nec justo auctor lacinia. Phasellus non libero id sem vestibulum porttitor sed id dolor.

Fusce eros enim, volutpat ac accumsan quis, faucibus id enim. Maecenas egestas tristique elit nec gravida. Aliquam non quam felis. Nulla quam orci, feugiat ut ante nec, finibus suscipit arcu. Quisque fringilla ipsum ac ante sollicitudin semper. Sed sit amet eleifend lorem. Pellentesque vulputate mauris nec justo auctor lacinia. Phasellus non libero id sem vestibulum porttitor sed id dolor. `

</script>


<main>
  <h1>Vim Tutorial</h1>
  <Workspace {templateString}></Workspace>
</main>

<style lang="stylus" global>
@media (prefers-color-scheme: light) {
  :root {
    --background-color: #eee;
    --text-color: #555;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #232323;
    --text-color: #eee;
  }
}

</style>
