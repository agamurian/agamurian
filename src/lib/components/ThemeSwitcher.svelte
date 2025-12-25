<script>
  let currentTheme = $state('light'); // Svelte 5 reactive state

  function toggleTheme() {
    // Toggle the theme value
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Apply to the HTML element
    const htmlElement = document.documentElement;

    // Approach 2: Using dataset
    htmlElement.setAttribute('data-theme', currentTheme);

    // Save the preference (see next step)
    localStorage.setItem('theme', currentTheme);
  }
</script>

<button class='switcher' onclick={toggleTheme}>
  {currentTheme === 'light' ? '🌑︎' : '☉'}
</button>

<style>
  .switcher {
    border:none;
    outline: none;
    color: var(--color-text);
    background-color:#0000;
    padding: 2px 5px;
    border-radius: 4px;
  }  
</style>



