$(".collapsible")
  .each(function() {
    $(this)
      .find(".open")
      .wrapInner(`<button aria-expanded="false" type="button">`);
    $(this)
      .find(".collapsible-content")
      .wrapAll('<div class="collapsible-content-wrapper" aria-hidden="true">');
  })
  .on("click", "[aria-expanded]", function(e) {
    const $el = $(this);
    const $content = $(e.delegateTarget).find(".collapsible-content-wrapper");

    if (!$content) {
      return;
    }

    const isHidden = $content.attr("aria-hidden") === "true";

    $el.attr("aria-expanded", isHidden ? "true" : "false");
    $content.attr("aria-hidden", isHidden ? "false" : "true");
  });
