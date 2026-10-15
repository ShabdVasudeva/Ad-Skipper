setInterval(() => {
    // 1. Check if an ad is actively playing
    const adShowing = document.querySelector('.ad-showing') || document.querySelector('.ytp-ad-player-overlay');
    
    if (adShowing) {
        const video = document.querySelector('video');
        if (video) {
            // Fast forward the ad instantly to the end
            video.currentTime = video.duration - 0.1;
            console.log("Ad skipped via fast-forward.");
        }
    }
    
    // 2. Click standard 'Skip' buttons immediately if they appear
    const skipButtons = [
        '.ytp-ad-skip-button', 
        '.ytp-ad-skip-button-modern', 
        '.ytp-skip-ad-button',
        'button[aria-label^="Skip ad"]'
    ];
    
    skipButtons.forEach(selector => {
        const button = document.querySelector(selector);
        if (button && button.offsetParent !== null) {
            button.click();
            console.log("Ad skipped via click.");
        }
    });
}, 250); // Checks 4 times every second