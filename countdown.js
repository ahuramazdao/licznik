// Funkcja inicjalizująca licznik
function initKlubCountdown() {
  // Tworzymy strukturę HTML
  const countdownEl = document.getElementById('klub-countdown-timer');
  
  // Funkcja formatująca liczby
  function formatNumber(num) {
    return num < 10 ? "0" + num : num;
  }
  
  // Funkcja aktualizująca licznik
  function updateCountdown() {
    // Data docelowa: 28 marca 2025, 24:00 (czyli 29 marca, 00:00)
    const targetDate = new Date('2025-03-29T00:00:00+01:00');
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference <= 0) {
      // Czas minął - wyświetl komunikat o zakończeniu naboru
      countdownEl.innerHTML = `
        <div class="countdown-background"></div>
        <div class="countdown-container">
          <div class="countdown-ended">Nabór do Programu KLUB został zakończony</div>
        </div>
      `;
      clearInterval(timerInterval);
      return;
    }
    
    // Jeśli czas nie minął, zbuduj standardowy licznik
    countdownEl.innerHTML = `
      <div class="countdown-background"></div>
      <div class="countdown-container">
        <div class="countdown-title">Do końca naboru do Programu KLUB pozostało:</div>
        <div class="countdown-timer">
          <div class="countdown-unit">
            <div id="klub-days" class="countdown-value">${formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24)))}</div>
            <div class="countdown-label">dni</div>
          </div>
          
          <div class="countdown-separator">:</div>
          
          <div class="countdown-unit">
            <div id="klub-hours" class="countdown-value">${formatNumber(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))}</div>
            <div class="countdown-label">godz</div>
          </div>
          
          <div class="countdown-separator">:</div>
          
          <div class="countdown-unit">
            <div id="klub-minutes" class="countdown-value">${formatNumber(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))}</div>
            <div class="countdown-label">min</div>
          </div>
          
          <div class="countdown-separator">:</div>
          
          <div class="countdown-unit">
            <div id="klub-seconds" class="countdown-value">${formatNumber(Math.floor((difference % (1000 * 60)) / 1000))}</div>
            <div class="countdown-label">sek</div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Pierwsze wywołanie funkcji
  updateCountdown();
  
  // Aktualizacja co sekundę
  const timerInterval = setInterval(updateCountdown, 1000);
}

// Uruchomienie licznika gdy dokument jest gotowy
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initKlubCountdown);
} else {
  initKlubCountdown();
}
