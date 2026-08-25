<div class="container-centered">
<h1>How this website resolves typography</h1>
<h6>
Short intruduction to typography
</h6>
<hr/>
<h4>
Rule of thumb: it looks good
</h4>
<p>
Counterintuitevely, this is not what you would thought in this kind of situaltion
</p>
<div class="cards">
<div class="blockcard">
<h4>
Fonts:
</h4>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <hr/>
<p>
  how to choose fonts, which suits each other:
</p>
  <h1 style="font-family: Inter; font-size:2em+1vw">Inter</h1>
  <h1 style="font-family: C059; font-size:4em+4vw">C059</h1>
  <h5 style="font-family: Ubuntu Mono; font-size:4em+4vw">Ubuntu Mono</h5>
</div>

<div class="blockcard">
<h4>
Sidenote:
</h4>
<p>
Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words are the truncation of dolorem ipsum. Lorem ipsum's purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting
</p>
</div>
</div>

<section>
<br/>
<p class="cardcode ">
<code style="white-space: pre">
$sans: "Bricolage Grotesque";
$sans: "Golos Text";
$monospace: "Share Tech";
$serif: "C059";
$header: $sans;
$basefont: $serif;

$factor: 0.85;
$height: 1.5;
$fontsizeh1: calc(42px * $factor + 1.0vw);
$fontsizeh2: calc(35px * $factor + 0.8vw);
$fontsizeh3: calc(28px * $factor + 0.6vw);
$fontsizeh4: calc(24px * $factor + 0.4vw);
$fontsizeh5: calc(22px * $factor + 0.2vw);
$fontsizeh6: calc(19px * $factor + 0.1vw);
$fontsize: calc(18px * $factor + 0.1vw);
</code>
</p>
<br/>
</section>

</div>
