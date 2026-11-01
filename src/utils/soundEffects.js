// Audio / volume has been completely removed per user request
class SoundManager {
  init() {}
  toggle() { return false; }
  isEnabled() { return false; }
  playHoverSound() {}
  playClickSound() {}
  playSuccessSound() {}
  playModeToggleSound() {}
}

export const sounds = new SoundManager();
