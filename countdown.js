// Funkcja inicjalizująca licznik
function initKlubCountdown() {
  // Tworzymy strukturę HTML
  const countdownEl = document.getElementById('klub-countdown-timer');
  
  // Wypełniamy HTML dla licznika
  countdownEl.innerHTML = `
    <div class="countdown-background"></div>
    <div class="countdown-container">
      <div class="countdown-title">Do końca naboru do Programu KLUB pozostało:</div>
      <div class="countdown-timer">
        <div class="countdown-unit">
          <div id="klub-days" class="countdown-value">00</div>
          <div class="countdown-label">dni</div>
        </div>
        
        <div class="countdown-separator">:</div>
        
        <div class="countdown-unit">
          <div id="klub-hours" class="countdown-value">00</div>
          <div class="countdown-label">godz</div>
        </div>
        
        <div class="countdown-separator">:</div>
        
        <div class="countdown-unit">
          <div id="klub-minutes" class="countdown-value">00</div>
          <div class="countdown-label">min</div>
        </div>
        
        <div class="countdown-separator">:</div>
        
        <div class="countdown-unit">
          <div id="klub-seconds" class="countdown-value">00</div>
          <div class="countdown-label">sek</div>
        </div>
      </div>
    </div>
  `;
  
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
      // Czas minął
      document.getElementById('klub-days').textContent = '00';
      document.getElementById('klub-hours').textContent = '00';
      document.getElementById('klub-minutes').textContent = '00';
      document.getElementById('klub-seconds').textContent = '00';
      clearInterval(timerInterval);
      return;
    }
    
    // Obliczanie dni, godzin, minut i sekund
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Aktualizacja elementów na stronie
    document.getElementById('klub-days').textContent = formatNumber(days);
    document.getElementById('klub-hours').textContent = formatNumber(hours);
    document.getElementById('klub-minutes').textContent = formatNumber(minutes);
    document.getElementById('klub-seconds').textContent = formatNumber(seconds);
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
