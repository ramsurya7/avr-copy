/**
 * AVR Web Consulting - Theme Interactions
 * Handles mobile drawer, smooth navigation, table scroll indicators, accordion toggling, and AJAX form submissions.
 */
document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Menu Drawer
  var trigger = document.getElementById("mobile-menu-trigger");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.getElementById("mobile-drawer-backdrop");
  var closeBtn = document.getElementById("mobile-menu-close");

  function openMenu() {
    if (!drawer || !backdrop) return;
    drawer.classList.remove("translate-x-full");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!drawer || !backdrop) return;
    drawer.classList.add("translate-x-full");
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (trigger) {
    trigger.addEventListener("click", function () {
      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && trigger && trigger.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });

  // 2. Table Scroll Cue Detection
  var tableWrappers = document.querySelectorAll(".table-responsive-wrapper");
  tableWrappers.forEach(function (wrapper) {
    var container = wrapper.querySelector(".table-scroll-container");
    var hint = wrapper.querySelector(".table-scroll-hint");
    if (container && hint) {
      function checkOverflow() {
        if (container.scrollWidth > container.clientWidth + 5) {
          hint.style.display = "flex";
        } else {
          hint.style.display = "none";
        }
      }
      checkOverflow();
      window.addEventListener("resize", checkOverflow);

      container.addEventListener(
        "scroll",
        function () {
          if (container.scrollLeft > 15) {
            hint.style.opacity = "0.3";
          } else {
            hint.style.opacity = "1";
          }
        },
        { passive: true },
      );
    }
  });

  // 3. Accordion Toggling for FAQs
  var accordionTriggers = document.querySelectorAll(".avr-accordion-trigger");
  accordionTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var isExpanded = this.getAttribute("aria-expanded") === "true";

      var parent = this.closest(".avr-accordion");
      if (parent) {
        var allButtons = parent.querySelectorAll(".avr-accordion-trigger");
        allButtons.forEach(function (otherBtn) {
          if (otherBtn !== btn) {
            otherBtn.setAttribute("aria-expanded", "false");
            var icon = otherBtn.querySelector("svg");
            if (icon) icon.style.transform = "rotate(0deg)";
            if (otherBtn.nextElementSibling) {
              otherBtn.nextElementSibling.classList.add("hidden");
            }
          }
        });
      }

      var currentIcon = this.querySelector("svg");

      if (isExpanded) {
        this.setAttribute("aria-expanded", "false");
        if (currentIcon) currentIcon.style.transform = "rotate(0deg)";
        if (content) content.classList.add("hidden");
      } else {
        this.setAttribute("aria-expanded", "true");
        if (currentIcon) currentIcon.style.transform = "rotate(180deg)";
        if (content) content.classList.remove("hidden");
      }
    });
  });

  // 4. AJAX Contact Form Submission
  var contactForm = document.getElementById("avr-contact-form");
  if (contactForm && typeof avr_ajax_obj !== "undefined") {
    contactForm.addEventListener("submit", function (e) {
      var submitBtn = document.getElementById("avr-submit-btn");
      var statusBox = document.getElementById("avr-form-status");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";
      }

      var formData = new FormData(contactForm);
      formData.append("action", "avr_submit_inquiry");

      fetch(avr_ajax_obj.ajax_url, {
        method: "POST",
        body: formData,
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (statusBox) {
            statusBox.classList.remove("hidden");
            if (data.success) {
              statusBox.className =
                "rounded-xl border border-emerald-500/30 bg-emerald-50 p-4 text-emerald-800 text-sm";
              statusBox.textContent =
                data.data.message || "Thank you! Your inquiry was sent successfully.";
              contactForm.reset();
            } else {
              statusBox.className =
                "rounded-xl border border-rose-500/30 bg-rose-50 p-4 text-rose-800 text-sm";
              statusBox.textContent =
                data.data.message || "An error occurred. Please call or WhatsApp us.";
            }
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Request";
          }
        })
        .catch(function () {
          // If AJAX fails, allow normal form submission fallback
          contactForm.submit();
        });

      e.preventDefault();
    });
  }
});
