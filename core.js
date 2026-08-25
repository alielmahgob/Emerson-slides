/* =============================================================================
 * core.js — shared reveal.js init + slide-entrance animation engine.
 *
 * Load this LAST, after dist/reveal.js and the plugin scripts. It:
 *   1. initializes reveal with the template's standard config (1120x620,
 *      margin 0 so exported PDF pages match the slide exactly).
 *   2. runs the entrance-animation engine: any element with the class
 *      "animate-on-slide" fades/slides in, staggered, each time its slide
 *      becomes active.
 *
 * ---- Animation convention -------------------------------------------------
 * Preferred: add the classes directly in your markup, e.g.
 *     <h1 class="animate-on-slide fade-in">Title</h1>
 *     <div class="card animate-on-slide fade-in-left"> ... </div>
 *
 * Optional shortcut: put data-animate on a container and every direct child
 * is auto-tagged with "animate-on-slide fade-in":
 *     <div class="content" data-animate> <p>...</p> <p>...</p> </div>
 *
 * Direction classes: fade-in (default) | fade-in-left | fade-in-right | scale-in
 * ========================================================================== */

Reveal.initialize({
	hash: true,
	width: 1120,
	height: 620,
	/* 0 = exported PDF pages match slide size (no white band around each slide) */
	margin: 0,
	center: true,
	progress: false,
	controls: false,
	plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
});

/* Auto-tag direct children of any [data-animate] container. */
function initSlideAnimations() {
	document.querySelectorAll('[data-animate]').forEach(function (container) {
		Array.prototype.forEach.call(container.children, function (el) {
			if (!el.classList.contains('animate-on-slide')) {
				el.classList.add('animate-on-slide', 'fade-in');
			}
		});
	});
}

/* Reset all animations, then stagger-play the ones on the active slide. */
function animateSlideElements(slide) {
	document.querySelectorAll('.animate-on-slide').forEach(function (el) {
		el.classList.remove('animated');
		el.style.removeProperty('animation-delay');
	});
	if (!slide) return;
	var els = slide.querySelectorAll('.animate-on-slide');
	requestAnimationFrame(function () {
		requestAnimationFrame(function () {
			els.forEach(function (el, index) {
				el.style.animationDelay = index * 0.1 + 's';
				el.classList.add('animated');
			});
		});
	});
}

Reveal.on('ready', function (event) {
	initSlideAnimations();
	setTimeout(function () {
		var s = event && event.currentSlide ? event.currentSlide : Reveal.getCurrentSlide();
		animateSlideElements(s);
	}, 100);
});

Reveal.on('slidechanged', function (event) {
	setTimeout(function () {
		animateSlideElements(event.currentSlide);
	}, 100);
});
