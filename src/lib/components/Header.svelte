<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte'
</script>
<div class="nav">
  <div class="border-part">
    <div class="left-part">
      <a class="item" href='/'>Main</a>
      <a class="item" href='/about'>About</a>
      <a class="item" href='/projects'>Projects</a>
      <a class="item" href='/contacts'>Contacts</a>
      <a class="item" href='/gallery'>Gallery</a>
      <a class="item" href='/blog'>Blog</a>
    </div>
    <div class="center-part">

    </div>
    <div class="right-part">
      v2.0
      <ThemeSwitcher/>
    </div>
  </div>
</div>

  <style>
  .nav{
      width: 100%;
      color: var(--color-text);
      position: fixed;
      top:0px;
      height: 30px;
      background-color: var(--color-bg);
      opacity: 0.91;
      z-index: 4;
      backdrop-filter: blur(5px);
    }
    .border-part {
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      height: 30px;
      font-size: x-small;
      font-weight: 800;
      display: flex;
      border-bottom: 1.375px double black;
      border-bottom: 1.375px double #aaa;
    }
    .left-part{
      flex: 1;
      align-items: center;
      white-space: nowrap;
      display: flex;
      padding: 0px 20px;
      gap: 15px;
    }
    .center-part{
      text-align: center;
      flex: 1;
      display: flex;
      padding: 0px 0px;
      gap: 5px;
      padding-left: auto;
      padding-right: auto;
      align-items: center;
      justify-content: center;
    }
    .right-part{
      display: flex;
      padding: 0px 20px;
      gap: 15px;
      flex: 0;
      align-items: center;
    }
    .item{
      display: inline-flex;
      font-size: small;
    }

    a {
      text-decoration: underline 1.375px dotted;
  color: var(--color-text);
}

  a:hover {
  color: #d22;
      text-decoration: underline 1.375px solid;
}
  a:visited:hover {
  color: #d22;
      text-decoration: underline 1.375px solid;
}

a:visited {
  color: var(--color-text);
}
  </style>
