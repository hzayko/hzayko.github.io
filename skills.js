document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const progress = bar.querySelector('.skill-progress');
    const percent = bar.getAttribute('data-percent');
    progress.style.width = percent;
  });
});