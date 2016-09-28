window.addEventListener('keydown', function handleKeydown(e) {
    if (e.shiftKey && e.keyCode == 86) {
        e.preventDefault();
        var url = document.getElementById("source_link");
        if (url !== null) {
            url = url.getAttribute("href");
            safari.self.tab.dispatchMessage("open-feedbin-link", url);
        }
    }
}, false);
