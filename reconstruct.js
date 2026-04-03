const fs = require('fs');

const navContent = fs.readFileSync('nav.txt', 'utf8');
const footerContent = fs.readFileSync('footer.txt', 'utf8');

const html404 = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <!-- Favicon -->
  <link rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗝️</text></svg>">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Page not found — VaultEscape. Return to our homepage or explore our escape rooms." />
  <title>404 — Page Not Found | VaultEscape</title>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/rtl.css">
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="flex flex-col min-h-screen">
` + navContent + `
  <div class="error-page" style="flex:1; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
    <div class="relative z-1 container text-center">
      <div class="scales-float fs-2xl mb-4">🚪</div>
      <div class="error-404" style="font-size: 8rem; font-weight: 800; color: var(--clr-primary); line-height: 1;">404</div>
      <h1 class="fs-2xl mb-2 mt-2">Escape Unsuccessful</h1>
      <p class="max-w-500 mx-auto mb-6 fs-md text-muted">The room you're looking for doesn't exist or is currently locked. Let's get you back to the main lobby.</p>
      
      <div class="flex gap-2 justify-center flex-wrap mb-8">
        <a href="index.html" class="btn btn-primary btn-lg">← Back to Lobby</a>
        <a href="services.html" class="btn btn-outline btn-lg">View Rooms</a>
      </div>

      <!-- Quick links -->
      <div class="flex flex-wrap gap-2 justify-center max-w-600 mx-auto">
        <a href="services.html" class="tag cursor-pointer">🗝️ Rooms</a>
        <a href="about.html" class="tag cursor-pointer">📖 Our Story</a>
        <a href="contact.html" class="tag cursor-pointer">📞 Contact</a>
        <a href="login.html" class="tag cursor-pointer"><i data-lucide="user"></i> Player Portal</a>
      </div>
    </div>
    <!-- Decorative background number -->
    <div class="bg-number" style="position:absolute; font-size: 30vw; font-weight: 900; opacity: 0.03; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; white-space: nowrap;">404</div>
  </div>
` + footerContent + `
  <script src="assets/js/main.js"></script>
</body>
</html>`;

fs.writeFileSync('template/404.html', html404);

const htmlComingSoon = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <!-- Favicon -->
  <link rel="icon"
    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🗝️</text></svg>">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="VaultEscape is building something new. Stay tuned for an exciting update to our immersive escape rooms." />
  <title>Coming Soon | VaultEscape</title>
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/rtl.css">
  <style>
    /* Specific overrides for Coming Soon to maintain the cinematic vibe */
    body { 
      min-height: 100vh; 
      background: linear-gradient(135deg, var(--clr-primary-dark) 0%, var(--clr-primary) 60%, rgba(201,168,76,0.1) 100%); 
      display: flex; flex-direction: column; align-items: center; justify-content: center; 
      padding: var(--sp-6) var(--sp-4); text-align: center; position: relative; overflow: hidden; 
    }
    body::before { 
      content: ''; position: absolute; inset: 0; 
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E"); 
    }
    .coming-soon-content { position: relative; z-index: 1; max-width: 700px; width: 100%; }
  </style>
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
  <!-- Decorative rotating rings -->
  <div class="spin" style="position:absolute; width:600px; height:600px; border:1px solid rgba(201,168,76,0.08); border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none"></div>
  <div class="spin" style="position:absolute; width:800px; height:800px; border:1px solid rgba(201,168,76,0.04); border-radius:50%; top:50%; left:50%; transform:translate(-50%,-50%); pointer-events:none; animation-duration:30s"></div>

  <div class="coming-soon-content reveal">
    <!-- Logo -->
    <a href="index.html" class="nav-logo mb-6 justify-center text-white" style="display:flex;align-items:center;gap:8px;text-decoration:none">
      <div class="logo-icon white" style="width:32px;height:32px"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--clr-accent)">
            <path
              d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3zm-1 11.268A2.001 2.001 0 0 1 12 18a2.001 2.001 0 0 1-1-3.732V13h2v1.268z" />
          </svg></div>
      <span class="fs-xl text-white" style="font-weight:700">Vault<em class="text-accent no-italic" style="color:var(--clr-accent)">Escape</em></span>
    </a>

    <!-- Badge -->
    <div class="badge-pill pulse mb-4" style="background:var(--clr-accent);color:var(--clr-primary-dark);display:inline-block;padding:4px 12px;border-radius:99px;font-size:0.75rem;font-weight:600">
      🔓 Opening Soon
    </div>

    <h1 class="text-white fs-3xl mb-3 lh-11" style="font-size:2.5rem;line-height:1.2;font-weight:700;margin-bottom:16px">
      A New Mystery <span class="text-accent" style="color:var(--clr-accent)">Awaits</span>
    </h1>
    <p class="text-light-muted fs-md max-w-500 mx-auto mb-10" style="color:rgba(255,255,255,0.7);margin-bottom:40px;line-height:1.6">
      VaultEscape is preparing a completely reimagined escape room experience. Harder puzzles, terrifying twists, and an unforgettable story.
    </p>

    <!-- Countdown Timer -->
    <div id="countdown-timer" class="flex align-start justify-center gap-2 mb-10" style="color:white;display:flex;justify-content:center;gap:12px;margin-bottom:40px">
      <div class="cd-unit"><div class="cd-num fw-700 fs-2xl" id="days" style="font-size:2rem;font-weight:700">14</div><div class="cd-label text-accent fs-xs ls-8 uppercase text-muted" style="color:var(--clr-accent);font-size:0.75rem;letter-spacing:1px;text-transform:uppercase">Days</div></div>
      <div class="cd-sep fw-700 fs-2xl text-muted" style="font-size:2rem;font-weight:700;color:rgba(255,255,255,0.5)">:</div>
      <div class="cd-unit"><div class="cd-num fw-700 fs-2xl" id="hours" style="font-size:2rem;font-weight:700">08</div><div class="cd-label text-accent fs-xs ls-8 uppercase text-muted" style="color:var(--clr-accent);font-size:0.75rem;letter-spacing:1px;text-transform:uppercase">Hours</div></div>
      <div class="cd-sep fw-700 fs-2xl text-muted" style="font-size:2rem;font-weight:700;color:rgba(255,255,255,0.5)">:</div>
      <div class="cd-unit"><div class="cd-num fw-700 fs-2xl" id="mins" style="font-size:2rem;font-weight:700">45</div><div class="cd-label text-accent fs-xs ls-8 uppercase text-muted" style="color:var(--clr-accent);font-size:0.75rem;letter-spacing:1px;text-transform:uppercase">Minutes</div></div>
      <div class="cd-sep fw-700 fs-2xl text-muted" style="font-size:2rem;font-weight:700;color:rgba(255,255,255,0.5)">:</div>
      <div class="cd-unit"><div class="cd-num fw-700 fs-2xl" id="secs" style="font-size:2rem;font-weight:700">22</div><div class="cd-label text-accent fs-xs ls-8 uppercase text-muted" style="color:var(--clr-accent);font-size:0.75rem;letter-spacing:1px;text-transform:uppercase">Seconds</div></div>
    </div>

    <!-- Email Signup -->
    <div class="max-w-500 mx-auto mb-10" style="max-width:500px;margin:0 auto 40px auto">
      <p class="text-light-muted fs-sm mb-3" style="color:rgba(255,255,255,0.7);margin-bottom:12px;font-size:0.875rem">Be the first player to enter.</p>
      <form data-validate-form data-success-msg="You're on the list!" class="flex gap-2" style="display:flex;gap:8px">
        <div class="flex-1 relative" style="flex:1">
          <input type="email" class="form-control" data-validate="required,email" placeholder="your@email.com" style="width:100%;background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:4px; padding:0 16px; color:white; height:52px"/>
          <div class="form-error text-red fs-xs mt-1 absolute"></div>
        </div>
        <button type="submit" class="btn btn-accent px-6 h-52 flex-shrink-0" style="height:52px;background:var(--clr-accent);color:var(--clr-primary-dark);border:none;border-radius:4px;padding:0 24px;font-weight:600;cursor:pointer">Notify Me →</button>
      </form>
    </div>

    <!-- Features -->
    <div class="grid-3 mb-10 text-left" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:40px;text-align:left">
      <div class="bg-white-transparent p-4 rounded-md" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:16px;border-radius:8px">
        <div class="fs-xl mb-2" style="font-size:1.5rem;margin-bottom:8px">⚙️</div>
        <div class="fw-600 text-white fs-sm mb-1" style="font-weight:600;color:white;margin-bottom:4px">Mechanical Marvels</div>
        <p class="fs-xs text-light-muted" style="font-size:0.75rem;color:rgba(255,255,255,0.7);margin:0">No more simple padlocks</p>
      </div>
      <div class="bg-white-transparent p-4 rounded-md" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:16px;border-radius:8px">
        <div class="fs-xl mb-2" style="font-size:1.5rem;margin-bottom:8px">🎭</div>
        <div class="fw-600 text-white fs-sm mb-1" style="font-weight:600;color:white;margin-bottom:4px">Live Actors</div>
        <p class="fs-xs text-light-muted" style="font-size:0.75rem;color:rgba(255,255,255,0.7);margin:0">Immersive theatrical horror</p>
      </div>
      <div class="bg-white-transparent p-4 rounded-md" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);padding:16px;border-radius:8px">
        <div class="fs-xl mb-2" style="font-size:1.5rem;margin-bottom:8px">🏆</div>
        <div class="fw-600 text-white fs-sm mb-1" style="font-weight:600;color:white;margin-bottom:4px">Leaderboards</div>
        <p class="fs-xs text-light-muted" style="font-size:0.75rem;color:rgba(255,255,255,0.7);margin:0">Compete globally for records</p>
      </div>
    </div>

    <!-- Footer Standalone -->
    <div class="border-top pt-6" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:24px">
      <p class="text-light-muted fs-sm mb-3" style="color:rgba(255,255,255,0.7);margin-bottom:12px;font-size:0.875rem">Questions? VaultEscape lobby is still open.</p>
      <div class="flex gap-2 justify-center flex-wrap mb-6" style="display:flex;justify-content:center;gap:8px;margin-bottom:24px">
        <a href="index.html" class="btn btn-outline-white btn-sm" style="border:1px solid rgba(255,255,255,0.5);color:white;padding:6px 12px;border-radius:4px;text-decoration:none;font-size:0.875rem">View Current Rooms</a>
        <a href="contact.html" class="btn btn-accent btn-sm" style="background:var(--clr-accent);color:var(--clr-primary-dark);padding:6px 12px;border-radius:4px;text-decoration:none;font-size:0.875rem;font-weight:600">Contact Us</a>
      </div>
      <div class="flex gap-2 justify-center mt-6" style="display:flex;justify-content:center;gap:8px;margin-top:24px">
        <button class="nav-toggle-btn" style="color:white;background:rgba(255,255,255,0.1);border:none;padding:8px;border-radius:4px;cursor:pointer" data-theme-toggle>🌙</button>
        <button class="nav-toggle-btn fs-xs p-2 h-auto w-auto" style="color:white;background:rgba(255,255,255,0.1);border:none;padding:8px;border-radius:4px;cursor:pointer;font-size:0.75rem" data-rtl-toggle>RTL →</button>
      </div>
      <p class="text-light-muted fs-xs mt-6 opacity-30" style="color:rgba(255,255,255,0.3);font-size:0.75rem;margin-top:24px">&copy; 2026 VaultEscape. All rights reserved.</p>
    </div>
  </div>

  <script src="assets/js/main.js"></script>
</body>
</html>`;

fs.writeFileSync('template/coming-soon.html', htmlComingSoon);

console.log("Reconstructed 404.html and coming-soon.html");
