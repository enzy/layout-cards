:diamonds: layout-cards
============

Simple and efficient vertical cards layout in [Vanilla JavaScript](http://vanilla-js.com)

# Usage

```html
<div class="container">
  <div class="card">...</div>
  <div class="card">...</div>
  ...
</div>

<style>
  .container { position: relative; }
  .card { position: relative; float: left; width: 200px; margin: 10px; }
</style>

<script src="index.js"></script>
<script>
  // Invite some friends to a party
  var container = document.querySelector('.container');
  var cards = parent.querySelectorAll('.card');
  var margin = 10;
  
  // Let's rock!
  layoutCards(container, cards, margin);
  
  // and roll
  window.onload = window.onresize(function(){
    layoutCards(container, cards, margin);
  });
</script>
```

Source: [index.js](index.js)
