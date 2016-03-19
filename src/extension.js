var markdown = Array.prototype.map.call(document.querySelectorAll("a.yt-uix-sessionlink.yt-ui-ellipsis.yt-ui-ellipsis-2.spf-link"), element => `- [me] Watch [${element.textContent}](${element.href}) ${(element.parentNode.querySelector(".accessible-description") || {textContent:""}).textContent.trim()}`).join("\r\n") + "\r\n";
prompt("Press Ctrl+C to copy:", markdown);
