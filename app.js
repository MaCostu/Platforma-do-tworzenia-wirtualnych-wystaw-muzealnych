(function () {
  const STORAGE_KEY = "museonet_json_db_v16_gosc_logi";
  const SESSION_KEY = "museonet_current_user_v16_gosc_logi";

  const fallbackDb = {
    "users": [
      {
        "id": "u-admin",
        "role": "admin",
        "name": "Administrator",
        "institutionName": "MuseoNet",
        "email": "admin@museonet.local",
        "password": "Admin123!",
        "status": "Aktywny"
      },
      {
        "id": "u-museum",
        "role": "museum",
        "name": "Muzeum Narodowe Demo",
        "institutionName": "Muzeum Narodowe Demo",
        "email": "muzeum@demo.pl",
        "password": "Muzeum123!",
        "status": "Aktywny"
      },
      {
        "id": "u-visitor",
        "role": "visitor",
        "name": "Zwiedzający Demo",
        "institutionName": "",
        "email": "zwiedzajacy@demo.pl",
        "password": "Zwiedzajacy123!",
        "status": "Aktywny"
      }
    ],
    "exhibitions": [
      {
        "id": "ex-001",
        "title": "Sztuka średniowieczna w przestrzeni muzealnej",
        "description": "Wystawa prezentuje klimat dawnej sali muzealnej z ikonami, iluminowanymi manuskryptami oraz obiektami sakralnymi. Ekspozycja skupia się na symbolice koloru, złoconych detalach oraz roli sztuki religijnej w kulturze średniowiecza.",
        "longDescription": "Zwiedzający poznaje przykładową narrację wystawy poświęconej sztuce średniowiecznej. Centralnym motywem jest połączenie obrazu, księgi i obiektu sakralnego. Opisy podkreślają znaczenie światła, złota, ornamentu oraz ręcznej pracy dawnych warsztatów. Taka forma prezentacji dobrze nadaje się do edukacyjnego omówienia eksponatów, bez konieczności fizycznej obecności w muzeum.",
        "museumEmail": "muzeum@demo.pl",
        "category": "Sztuka",
        "layout": "Sala klasyczna",
        "status": "Opublikowana",
        "createdAt": "2025-04-08T10:00:00.000Z",
        "updatedAt": "2025-04-08T10:00:00.000Z",
        "views": 32,
        "totalTime": 620,
        "cover": "assets/sztuka-sredniowieczna.jpg",
        "education": "Wystawa może zostać wykorzystana jako materiał pomocniczy na lekcjach historii sztuki, religioznawstwa oraz edukacji kulturowej.",
        "path": "Zwiedzanie rozpoczyna się od panelu z ikoną, następnie przechodzi do manuskryptu, a kończy na opisie obiektu sakralnego umieszczonego w centrum sali.",
        "exhibits": [
          {
            "id": "obj-001",
            "name": "Rzeźba gotycka",
            "description": "Przykładowy eksponat sakralny przedstawiający stylizowaną postać o wydłużonych proporcjach i dekoracyjnym układzie szat. Obiekt pokazuje, jak sztuka średniowieczna łączyła funkcję estetyczną z przekazem symbolicznym.",
            "author": "Nieznany warsztat",
            "year": "XV w.",
            "category": "Rzeźba"
          },
          {
            "id": "obj-002",
            "name": "Manuskrypt iluminowany",
            "description": "Karta rękopisu ozdobiona ornamentem, inicjałem i barwną miniaturą. Eksponat pokazuje znaczenie ksiąg jako nośników wiedzy, religii i prestiżu społecznego.",
            "author": "Skryptorium klasztorne",
            "year": "XIV w.",
            "category": "Dokument"
          }
        ]
      },
      {
        "id": "ex-003",
        "title": "Rzeźba antyczna i architektura",
        "description": "Ekspozycja przedstawia salę z marmurowymi popiersiami, posągami oraz detalami architektonicznymi inspirowanymi sztuką antyczną. Główny nacisk położono na proporcje, harmonię i sposób prezentowania postaci ludzkiej.",
        "longDescription": "Wystawa pokazuje, jak kultura antyczna wpływała na późniejsze formy muzealnej prezentacji sztuki. Jasne rzeźby ustawione na ciemnych postumentach tworzą czytelny kontrast i pozwalają skupić uwagę na sylwetce, geście oraz materiale. Opisy eksponatów tłumaczą rolę popiersi, kolumn i fragmentów architektury w budowaniu wyobrażenia o dawnych cywilizacjach.",
        "museumEmail": "muzeum@demo.pl",
        "category": "Rzeźba",
        "layout": "Sala klasyczna",
        "status": "Opublikowana",
        "createdAt": "2025-04-08T10:00:00.000Z",
        "updatedAt": "2025-04-08T10:00:00.000Z",
        "views": 27,
        "totalTime": 455,
        "cover": "assets/rzezba-antyczna.jpg",
        "education": "Ekspozycja pomaga wyjaśnić podstawowe pojęcia historii sztuki: kanon, proporcja, kompozycja, kontrapost oraz detal architektoniczny.",
        "path": "Zwiedzanie prowadzi od popiersi bocznych przez centralną rzeźbę do krótkiego omówienia elementów architektonicznych.",
        "exhibits": [
          {
            "id": "obj-006",
            "name": "Popiersie marmurowe",
            "description": "Popiersie stanowi przykład sposobu upamiętniania osób ważnych społecznie. Uwagę zwracają idealizowane rysy twarzy, spokojny wyraz oraz wyraźne opracowanie włosów.",
            "author": "Warsztat rzymski",
            "year": "I w.",
            "category": "Rzeźba"
          },
          {
            "id": "obj-007",
            "name": "Fragment kolumny",
            "description": "Element architektoniczny pokazujący znaczenie rytmu i porządku w budowlach antycznych. W opisie zaakcentowano funkcję kolumny jako części konstrukcji i dekoracji.",
            "author": "Nieznany",
            "year": "II w.",
            "category": "Architektura"
          }
        ]
      },
      {
        "id": "ex-004",
        "title": "Historia techniki i wynalazków",
        "description": "Wystawa edukacyjna prezentuje wybrane obiekty związane z rozwojem techniki, pomiarów, fotografii i komunikacji. Przedmioty pokazano w układzie przypominającym nowoczesną salę ekspozycyjną.",
        "longDescription": "Ekspozycja została przygotowana jako przystępna opowieść o rozwoju myśli technicznej. Zestawiono w niej mechanizmy, aparaty i przyrządy naukowe, aby pokazać przejście od prostych narzędzi pomiarowych do urządzeń rejestrujących obraz i przekazujących informacje. Dłuższe opisy pomagają zrozumieć, że każdy eksponat jest częścią większego procesu cywilizacyjnego.",
        "museumEmail": "muzeum@demo.pl",
        "category": "Technika",
        "layout": "Sala nowoczesna",
        "status": "Opublikowana",
        "createdAt": "2025-04-08T10:00:00.000Z",
        "updatedAt": "2025-04-08T10:00:00.000Z",
        "views": 38,
        "totalTime": 540,
        "cover": "assets/historia-techniki.jpg",
        "education": "Materiał nadaje się do omówienia historii wynalazków, rozwoju fotografii, pomiarów czasu oraz technicznych podstaw komunikacji.",
        "path": "Zwiedzanie rozpoczyna się od instrumentów pomiarowych, przechodzi przez mechanizmy zegarowe i kończy na urządzeniach rejestrujących obraz.",
        "exhibits": [
          {
            "id": "obj-008",
            "name": "Mechanizm zegarowy",
            "description": "Eksponat pokazuje zasadę działania układu zębatek, który pozwalał odmierzać czas. Wystawa wyjaśnia, dlaczego precyzyjny pomiar czasu był ważny dla nauki, transportu i życia codziennego.",
            "author": "Muzeum Techniki",
            "year": "XIX w.",
            "category": "Technika"
          },
          {
            "id": "obj-009",
            "name": "Aparat fotograficzny",
            "description": "Historyczny aparat pokazuje rozwój metod utrwalania obrazu. Opis zwraca uwagę na obudowę, obiektyw, mieszek oraz rolę fotografii w dokumentowaniu rzeczywistości.",
            "author": "Nieznany",
            "year": "XX w.",
            "category": "Technika"
          }
        ]
      }
    ],
    "favorites": {},
    "logs": []
  };

  let db = null;
  let currentUser = null;
  let view = "public";
  let selectedId = null;
  let activeViewerStart = null;
  let activeViewerId = null;
  let editingId = null;

  const app = document.getElementById("app");

  function uid(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function cleanDb() {
    if (!db) return;
    db.exhibitions = (db.exhibitions || []).filter(e =>
      e.id !== "ex-002" && !String(e.title || "").toLowerCase().includes("impresjon")
    );
    db.users = db.users || [];
    db.favorites = db.favorites || {};
    db.logs = db.logs || [];
    db.failedLogins = db.failedLogins || {};
  }

  function saveDb() {
    cleanDb();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }

  function getDb() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  async function initDb() {
    const stored = getDb();
    if (stored && stored.users && stored.exhibitions) {
      db = stored;
      cleanDb();
      saveDb();
      return;
    }

    try {
      const response = await fetch("database/db.json", { cache: "no-store" });
      if (!response.ok) throw new Error("Brak pliku db.json");
      db = await response.json();
    } catch {
      db = clone(fallbackDb);
    }

    cleanDb();
    saveDb();
  }

  function getGuestUser() {
    return {
      id: "u-guest",
      role: "guest",
      name: "Gość",
      institutionName: "",
      email: "gosc@museonet.local",
      status: "Aktywny"
    };
  }

  function loadSession() {
    const email = localStorage.getItem(SESSION_KEY);
    if (email === "__guest__") {
      currentUser = getGuestUser();
      return;
    }
    currentUser = email ? db.users.find(u => u.email === email) || null : null;
  }

  function saveSession(user) {
    currentUser = user;
    if (user && user.role === "guest") localStorage.setItem(SESSION_KEY, "__guest__");
    else if (user) localStorage.setItem(SESSION_KEY, user.email);
    else localStorage.removeItem(SESSION_KEY);
  }

  function roleLabel(role) {
    if (role === "admin") return "Administrator";
    if (role === "museum") return "Muzeum";
    if (role === "guest") return "Gość";
    return "Zwiedzający";
  }

  function countsAsVisit() {
    return currentUser && (currentUser.role === "visitor" || currentUser.role === "guest");
  }

  function statusBadge(status) {
    const cls = status === "Opublikowana" ? "green" : status === "Szkic" ? "yellow" : "blue";
    return `<span class="badge ${cls}">${escapeHtml(status)}</span>`;
  }

  function defaultCover(title, category) {
    const label = encodeURIComponent(title || "Nowa wystawa");
    const sub = encodeURIComponent(category || "ekspozycja cyfrowa");
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 560 360'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230f172a'/%3E%3Cstop offset='1' stop-color='%231e3a8a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='560' height='360' rx='34' fill='url(%23g)'/%3E%3Crect x='70' y='64' width='420' height='225' rx='20' fill='%23111c33' stroke='%2338bdf8' stroke-width='4'/%3E%3Crect x='105' y='98' width='105' height='155' rx='8' fill='%23d4af37'/%3E%3Crect x='235' y='98' width='105' height='155' rx='8' fill='%2360a5fa'/%3E%3Crect x='365' y='98' width='80' height='155' rx='8' fill='%23f97316'/%3E%3Ctext x='34' y='315' font-family='Arial' font-size='24' font-weight='700' fill='%23f8fafc'%3E${label}%3C/text%3E%3Ctext x='34' y='340' font-family='Arial' font-size='16' fill='%23cbd5e1'%3E${sub}%3C/text%3E%3C/svg%3E`;
  }

  function header() {
    if (!currentUser) return "";
    return `
      <div class="header">
        <div class="header-inner">
          <div class="logo"><div class="logo-mark">M</div><div>MuseoNet</div></div>
          <div class="nav">
            <button data-view="public" class="${view === "public" ? "active" : ""}">Wystawy</button>
            ${currentUser.role === "museum" ? `<button data-view="museum" class="${view === "museum" ? "active" : ""}">Panel muzeum</button>` : ""}
            ${currentUser.role === "admin" ? `<button data-view="admin" class="${view === "admin" ? "active" : ""}">Admin</button>` : ""}
            ${currentUser.role === "admin" ? `<button data-view="json" class="${view === "json" ? "active" : ""}">Baza JSON</button>` : ""}
            <button class="secondary" data-action="logout">Wyloguj</button>
          </div>
        </div>
      </div>`;
  }

  function render() {
  closeViewerTiming();

  if (!currentUser) {
    app.innerHTML = renderAuth();
    return;
  }

  let body = "";

  if (selectedId) {
    body = renderViewer(selectedId);
  } else if (view === "public") {
    body = renderPublic();
  } else if (view === "museum") {
    body = currentUser.role === "museum" ? renderMuseum() : renderPublic();
  } else if (view === "admin") {
    body = currentUser.role === "admin" ? renderAdmin() : renderPublic();
  } else if (view === "json") {
    body = currentUser.role === "admin" ? renderJson() : renderPublic();
  } else {
    body = renderPublic();
  }

  app.innerHTML = header() + `<main class="container">${body}</main>`;
}

  function renderAuth() {
    return `
      <main class="container">
        <section class="hero auth-hero">
          <div class="card auth-info-card">
            <h1>Platforma do tworzenia wirtualnych wystaw muzealnych</h1>
            <p>Aplikacja demonstracyjna umożliwia tworzenie, publikowanie i przeglądanie cyfrowych wystaw muzealnych. Dane użytkowników, wystaw, opisów i statystyk są przechowywane lokalnie jako JSON w pamięci przeglądarki.</p>
            <div class="demo-preview-grid">
              <img src="assets/sztuka-sredniowieczna.jpg" alt="Miniatura wystawy sztuki średniowiecznej" />
              <img src="assets/rzezba-antyczna.jpg" alt="Miniatura wystawy rzeźby antycznej" />
              <img src="assets/historia-techniki.jpg" alt="Miniatura wystawy historii techniki" />
            </div>
            <div class="credentials-box">
              <h3>Dane testowe do logowania</h3>
              <p class="footer-note">Przepisz wybrany e-mail i hasło do formularza logowania po prawej stronie.</p>
              <div class="credentials-grid">
                <div><b>Zwiedzający</b><span>zwiedzajacy@demo.pl</span><span>Zwiedzajacy123!</span></div>
                <div><b>Muzeum</b><span>muzeum@demo.pl</span><span>Muzeum123!</span></div>
                <div><b>Administrator</b><span>admin@museonet.local</span><span>Admin123!</span></div>
              </div>
            </div>
          </div>
          <div class="card login-box">
            <h2>Logowanie</h2>
            <p class="muted">Wpisz dane jednego z kont testowych.</p>
            <div class="tabs">
              <button class="small" data-auth-tab="login">Logowanie</button>
              <button class="small secondary" data-auth-tab="register">Rejestracja zwiedzającego</button>
            </div>
            <div id="authArea">${renderLoginForm()}</div>
            <div class="guest-box">
              <button type="button" class="secondary" data-guest>Wejdź jako gość</button>
              <p class="footer-note">Tryb gościa pozwala przeglądać wystawy bez logowania.</p>
            </div>
          </div>
        </section>
      </main>`;
  }

  function renderLoginForm() {
    return `
      <form data-form="login">
        <label>E-mail<input name="email" type="email" required placeholder="np. zwiedzajacy@demo.pl" /></label>
        <label>Hasło<input name="password" type="password" required placeholder="wpisz hasło" /></label>
        <button type="submit">Zaloguj</button>
      </form>`;
  }

  function renderRegisterForm() {
    return `
      <form data-form="register">
        <label>Nazwa użytkownika<input name="displayName" required placeholder="np. Jan Kowalski" /></label>
        <label>E-mail<input name="email" type="email" required placeholder="np. jan@test.pl" /></label>
        <label>Hasło<input name="password" type="password" required minlength="8" placeholder="minimum 8 znaków" /></label>
        <button type="submit">Zarejestruj zwiedzającego</button>
      </form>`;
  }

  function renderPublic() {
    if (selectedId) return renderViewer(selectedId);

    const published = db.exhibitions
      .filter(e => e.status === "Opublikowana")
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    return `
      <section class="panel">
        <div class="row">
          <div>
            <h2>Dostępne wystawy</h2>
            <p class="muted">Lista wystaw opublikowanych dla zwiedzających.</p>
          </div>
          <span class="badge blue">Zalogowano jako: ${escapeHtml(roleLabel(currentUser.role))}</span>
        </div>
      </section>
      <section class="grid">
        ${published.map(e => exhibitionCard(e, true)).join("") || `<div class="card">Brak opublikowanych wystaw.</div>`}
      </section>`;
  }

  function exhibitionCard(e, publicMode) {
    const favs = db.favorites[currentUser.email] || [];
    const isFav = favs.includes(e.id);

    return `
      <div class="card exhibition-card">
        <img class="cover" src="${escapeHtml(e.cover || defaultCover(e.title, e.category))}" alt="Miniatura wystawy: ${escapeHtml(e.title)}" loading="lazy" />
        <div class="row">
          ${statusBadge(e.status)}
          <span class="badge">${escapeHtml(e.category || "Bez kategorii")}</span>
        </div>
        <h3>${escapeHtml(e.title)}</h3>
        <p>${escapeHtml(e.description)}</p>
        <div>
          <span class="badge">Eksponaty: ${e.exhibits.length}</span>
          <span class="badge">Odwiedziny: ${e.views || 0}</span>
          <span class="badge">Układ: ${escapeHtml(e.layout || "brak")}</span>
        </div>
        <div class="actions">
          <button class="small" data-open="${e.id}">Otwórz wystawę</button>
          ${publicMode && currentUser.role !== "guest" ? `<button class="small secondary" data-fav="${e.id}">${isFav ? "Usuń z ulubionych" : "Dodaj do ulubionych"}</button>` : ""}
          ${currentUser.role === "museum" && e.museumEmail === currentUser.email ? `<button class="small secondary" data-edit="${e.id}">Edytuj</button><button class="small danger" data-delete="${e.id}">Usuń</button>` : ""}
        </div>
      </div>`;
  }

  function renderViewer(id) {
    const e = db.exhibitions.find(x => x.id === id);
    if (!e) {
      selectedId = null;
      return renderPublic();
    }

    activeViewerStart = Date.now();
    activeViewerId = id;

    return `
      <section class="panel">
        <button class="secondary" data-back>← Wróć</button>
      </section>
      <section class="viewer simple-viewer">
        <div class="image-panel">
          <img class="viewer-cover single-cover" src="${escapeHtml(e.cover || defaultCover(e.title, e.category))}" alt="Grafika wystawy: ${escapeHtml(e.title)}" />
        </div>
        <div class="panel viewer-info">
          <h2>${escapeHtml(e.title)}</h2>
          ${statusBadge(e.status)}
          <p>${escapeHtml(e.description)}</p>

          <div class="stat-grid small-stats">
            <div class="stat">Eksponaty<b>${e.exhibits.length}</b></div>
            <div class="stat">Odwiedziny<b>${e.views || 0}</b></div>
            <div class="stat">Czas łączny<b>${e.totalTime || 0}s</b></div>
            <div class="stat">Kategoria<b>${escapeHtml(e.category)}</b></div>
          </div>

          <h3>Opis wystawy</h3>
          <div class="description-box">${escapeHtml(e.longDescription || e.description)}</div>

          <h3>Ścieżka zwiedzania</h3>
          <div class="description-box">${escapeHtml(e.path || "Zwiedzanie prowadzi przez kolejne sekcje tematyczne wystawy.")}</div>

          <h3>Informacje edukacyjne</h3>
          <div class="description-box">${escapeHtml(e.education || "Wystawa może zostać wykorzystana jako materiał edukacyjny.")}</div>

          <h3>Eksponaty</h3>
          <div class="list">
            ${e.exhibits.map(ex => `
              <div class="item">
                <h3>${escapeHtml(ex.name)}</h3>
                <p>${escapeHtml(ex.description)}</p>
                <span class="badge">Autor: ${escapeHtml(ex.author)}</span>
                <span class="badge">Okres: ${escapeHtml(ex.year)}</span>
                <span class="badge">Typ: ${escapeHtml(ex.category)}</span>
              </div>`).join("")}
          </div>
        </div>
      </section>`;
  }

  function renderMuseum() {
    const mine = db.exhibitions
      .filter(e => e.museumEmail === currentUser.email)
      .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    const edited = editingId ? db.exhibitions.find(e => e.id === editingId) : null;

    return `
      <section class="panel">
        <h2>Panel muzeum</h2>
        <p class="muted">Tworzenie, edycja i publikacja wystaw cyfrowych.</p>
      </section>

      <section class="grid two">
        <div class="panel">
          <h3>${edited ? "Edytuj wystawę" : "Nowa wystawa"}</h3>
          <form data-form="exhibition">
            <label>Tytuł<input name="title" required value="${escapeHtml(edited?.title || "")}" /></label>
            <label>Krótki opis<textarea name="description" required>${escapeHtml(edited?.description || "")}</textarea></label>
            <label>Dłuższy opis wystawy<textarea name="longDescription" placeholder="Kilka zdań do widoku szczegółowego">${escapeHtml(edited?.longDescription || "")}</textarea></label>

            <div class="form-grid">
              <label>Kategoria<input name="category" value="${escapeHtml(edited?.category || "Sztuka")}" /></label>
              <label>Układ sali<select name="layout">
                <option ${edited?.layout === "Sala klasyczna" ? "selected" : ""}>Sala klasyczna</option>
                <option ${edited?.layout === "Galeria liniowa" ? "selected" : ""}>Galeria liniowa</option>
                <option ${edited?.layout === "Sala nowoczesna" ? "selected" : ""}>Sala nowoczesna</option>
              </select></label>
            </div>

            <label>Ścieżka zwiedzania<textarea name="path">${escapeHtml(edited?.path || "")}</textarea></label>
            <label>Informacje edukacyjne<textarea name="education">${escapeHtml(edited?.education || "")}</textarea></label>

            <h3>Przykładowy eksponat</h3>

            <div class="form-grid">
              <label>Nazwa eksponatu<input name="exhibitName" value="${escapeHtml(edited?.exhibits?.[0]?.name || "")}" /></label>
              <label>Autor<input name="author" value="${escapeHtml(edited?.exhibits?.[0]?.author || "")}" /></label>
              <label>Okres<input name="year" value="${escapeHtml(edited?.exhibits?.[0]?.year || "")}" /></label>
              <label>Typ eksponatu<input name="exhibitCategory" value="${escapeHtml(edited?.exhibits?.[0]?.category || "Eksponat")}" /></label>
            </div>

            <label>Opis eksponatu<textarea name="exhibitDescription">${escapeHtml(edited?.exhibits?.[0]?.description || "")}</textarea></label>

            <div class="actions">
              <button type="submit">Zapisz wystawę</button>
              ${edited ? `<button type="button" class="secondary" data-cancel-edit>Anuluj</button>` : ""}
            </div>
          </form>
        </div>

        <div class="panel">
          <h3>Statystyki moich wystaw</h3>
          ${statsBlock(mine)}
        </div>
      </section>

      <section class="panel">
        <h3>Moje wystawy</h3>
        <div class="grid">${mine.map(e => exhibitionCard(e, false)).join("") || `<div class="item">Brak wystaw.</div>`}</div>
      </section>`;
  }

  function statsBlock(list) {
    const views = list.reduce((s, e) => s + (e.views || 0), 0);
    const time = list.reduce((s, e) => s + (e.totalTime || 0), 0);
    const published = list.filter(e => e.status === "Opublikowana").length;
    const exhibits = list.reduce((s, e) => s + (e.exhibits || []).length, 0);

    return `
      <div class="stat-grid">
        <div class="stat">Wystawy<b>${list.length}</b></div>
        <div class="stat">Opublikowane<b>${published}</b></div>
        <div class="stat">Eksponaty<b>${exhibits}</b></div>
        <div class="stat">Odwiedziny<b>${views}</b></div>
      </div>
      <p class="footer-note">Łączny czas przebywania na wystawach: ${time}s</p>`;
  }

  function formatDate(value) {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "-";
    return date.toLocaleString("pl-PL");
  }

  function renderFailedLoginsTable() {
    const rows = Object.entries(db.failedLogins || {})
      .sort((a, b) => b[1] - a[1])
      .map(([email, count]) => `
        <tr>
          <td>${escapeHtml(email)}</td>
          <td>${count}</td>
        </tr>`).join("");

    return `
      <div class="table-wrap compact-table">
        <table>
          <thead><tr><th>E-mail</th><th>Liczba błędnych prób</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="2">Brak błędnych prób logowania.</td></tr>`}</tbody>
        </table>
      </div>`;
  }

  function renderLogsTable() {
    const rows = (db.logs || [])
      .slice()
      .reverse()
      .slice(0, 20)
      .map(log => `
        <tr>
          <td>${formatDate(log.date || log.createdAt)}</td>
          <td>${escapeHtml(log.email || log.user || "system")}</td>
          <td>${escapeHtml(log.action || log.type || "Akcja")}</td>
          <td>${escapeHtml(log.title || log.details || log.exhibitionId || "-")}</td>
        </tr>`).join("");

    return `
      <div class="table-wrap compact-table">
        <table>
          <thead><tr><th>Data</th><th>Użytkownik</th><th>Akcja</th><th>Szczegóły</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="4">Brak logów aktywności.</td></tr>`}</tbody>
        </table>
      </div>`;
  }

  function renderAdmin() {
    const sortedExhibitions = db.exhibitions
      .slice()
      .sort((a, b) => new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0));

    return `
      <section class="panel">
        <h2>Panel administratora</h2>
        <p class="muted">Podgląd użytkowników, wystaw, błędnych logowań i logów aktualizacji.</p>
      </section>

      <section class="grid two">
        <div class="panel">
          <h3>Użytkownicy</h3>
          <div class="table-wrap">
            <table>
              <thead>
                <tr><th>E-mail</th><th>Rola</th><th>Status</th><th>Akcja</th></tr>
              </thead>
              <tbody>
                ${db.users.map(u => `
                  <tr>
                    <td>${escapeHtml(u.email)}</td>
                    <td>${roleLabel(u.role)}</td>
                    <td>${escapeHtml(u.status)}</td>
                    <td>${u.role !== "admin" ? `<button class="small secondary" data-toggle-user="${u.id}">${u.status === "Aktywny" ? "Zablokuj" : "Odblokuj"}</button>` : "-"}</td>
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel">
          <h3>Cały system</h3>
          ${statsBlock(db.exhibitions)}
          <div class="actions">
            <button class="secondary" data-export>Eksportuj JSON</button>
            <button class="danger" data-reset>Reset bazy</button>
          </div>
        </div>
      </section>

      <section class="grid two admin-extra-grid">
        <div class="panel">
          <h3>Nieudane logowania</h3>
          <p class="muted">Licznik błędnych prób logowania zapisany w pamięci przeglądarki.</p>
          ${renderFailedLoginsTable()}
        </div>
        <div class="panel">
          <h3>Logi aktywności</h3>
          <p class="muted">Ostatnie operacje: logowania, utworzenie, edycja, usunięcie i otwarcie wystawy.</p>
          ${renderLogsTable()}
        </div>
      </section>

      <section class="panel">
        <h3>Wszystkie wystawy</h3>
        <div class="grid">${sortedExhibitions.map(e => exhibitionCard(e, false)).join("")}</div>
      </section>`;
  }

  function renderJson() {
    return `
      <section class="panel">
        <h2>Baza danych JSON w pamięci przeglądarki</h2>
        <p class="muted">Aktualny stan aplikacji zapisany w localStorage. Dostęp do tego widoku ma tylko administrator.</p>
        <div class="actions">
          <button data-export>Eksportuj JSON</button>
          <button class="secondary" data-import-open>Importuj JSON</button>
          <button class="danger" data-reset>Reset bazy</button>
        </div>
        <input type="file" id="importFile" accept="application/json,.json" style="display:none" />
      </section>
      <pre class="json-box">${escapeHtml(JSON.stringify(db, null, 2))}</pre>`;
  }

  function closeViewerTiming() {
    if (activeViewerStart && activeViewerId) {
      const e = db.exhibitions.find(x => x.id === activeViewerId);

      if (e && countsAsVisit()) {
        e.totalTime = (e.totalTime || 0) + Math.max(1, Math.round((Date.now() - activeViewerStart) / 1000));
        saveDb();
      }

      activeViewerStart = null;
      activeViewerId = null;
    }
  }

  function handleLogin(form) {
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const user = db.users.find(u => u.email.toLowerCase() === email && u.password === password);

    if (!user || user.status !== "Aktywny") {
      const failedEmail = email || "brak e-maila";
      db.failedLogins[failedEmail] = (db.failedLogins[failedEmail] || 0) + 1;
      db.logs.push({
        id: uid("log"),
        action: "Nieudane logowanie",
        email: failedEmail,
        details: `Próba nr ${db.failedLogins[failedEmail]}`,
        date: new Date().toISOString()
      });
      saveDb();
      showNotice(`Nieprawidłowy e-mail, hasło albo konto jest zablokowane. Błędna próba: ${db.failedLogins[failedEmail]}.`, true);
      return;
    }

    db.logs.push({
      id: uid("log"),
      action: "Logowanie",
      email: user.email,
      date: new Date().toISOString()
    });

    saveSession(user);
    view = user.role === "admin" ? "admin" : "public";
    selectedId = null;
    saveDb();
    render();
  }

  function handleRegister(form) {
    const name = form.displayName.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;

    if (db.users.some(u => u.email.toLowerCase() === email)) {
      showNotice("Ten e-mail jest już zajęty.", true);
      return;
    }

    const user = {
      id: uid("u"),
      role: "visitor",
      name,
      institutionName: "",
      email,
      password,
      status: "Aktywny"
    };

    db.users.push(user);
    db.logs.push({
      id: uid("log"),
      action: "Rejestracja zwiedzającego",
      email,
      date: new Date().toISOString()
    });

    saveDb();
    saveSession(user);
    view = "public";
    selectedId = null;
    render();
  }

  function handleExhibition(form) {
    const existing = editingId ? db.exhibitions.find(e => e.id === editingId) : null;

    const exhibit = {
      id: existing?.exhibits?.[0]?.id || uid("obj"),
      name: form.exhibitName.value.trim() || "Eksponat wystawy",
      description: form.exhibitDescription.value.trim() || "Opis eksponatu dodany przez muzeum.",
      author: form.author.value.trim() || "Nieznany",
      year: form.year.value.trim() || "brak danych",
      category: form.exhibitCategory.value.trim() || "Eksponat"
    };

    const data = {
      title: form.title.value.trim(),
      description: form.description.value.trim(),
      longDescription: form.longDescription.value.trim() || form.description.value.trim(),
      category: form.category.value.trim() || "Sztuka",
      layout: form.layout.value,
      path: form.path.value.trim(),
      education: form.education.value.trim(),
      updatedAt: new Date().toISOString(),
      exhibits: [exhibit]
    };

    if (existing) {
      Object.assign(existing, data);
      db.logs.push({
        id: uid("log"),
        action: "Edytowano wystawę",
        email: currentUser.email,
        title: existing.title,
        date: new Date().toISOString()
      });
    } else {
      const newExhibition = {
        id: uid("ex"),
        ...data,
        museumEmail: currentUser.email,
        status: "Opublikowana",
        createdAt: new Date().toISOString(),
        views: 0,
        totalTime: 0,
        cover: defaultCover(data.title, data.category)
      };
      db.exhibitions.push(newExhibition);
      db.logs.push({
        id: uid("log"),
        action: "Utworzono wystawę",
        email: currentUser.email,
        title: newExhibition.title,
        date: new Date().toISOString()
      });
    }

    editingId = null;
    saveDb();
    showNotice("Wystawa została zapisana.");
    render();
  }

  function showNotice(text, error) {
    const box = document.createElement("div");
    box.className = error ? "error floating" : "notice floating";
    box.textContent = text;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 2600);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "museonet-baza.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function resetDb() {
    db = clone(fallbackDb);
    cleanDb();
    db.logs.push({
      id: uid("log"),
      action: "Reset bazy",
      email: currentUser ? currentUser.email : "system",
      date: new Date().toISOString()
    });
    saveDb();
    selectedId = null;
    editingId = null;
    render();
  }

  document.addEventListener("click", event => {
    const target = event.target.closest("button, [data-guest], [data-open], [data-fav], [data-edit], [data-delete], [data-publish], [data-toggle-user]");
    if (!target) return;

    if (target.hasAttribute("data-guest")) {
      const guest = getGuestUser();
      saveSession(guest);
      db.logs.push({
        id: uid("log"),
        action: "Wejście jako gość",
        email: guest.email,
        date: new Date().toISOString()
      });
      saveDb();
      view = "public";
      selectedId = null;
      editingId = null;
      render();
      return;
    }

    if (target.dataset.authTab === "login") {
      document.getElementById("authArea").innerHTML = renderLoginForm();
      return;
    }

    if (target.dataset.authTab === "register") {
      document.getElementById("authArea").innerHTML = renderRegisterForm();
      return;
    }

    if (target.dataset.view) {
      view = target.dataset.view;
      selectedId = null;
      editingId = null;
      render();
      return;
    }

    if (target.dataset.action === "logout") {
      closeViewerTiming();
      saveSession(null);
      view = "public";
      selectedId = null;
      editingId = null;
      render();
      return;
    }

    if (target.dataset.open) {
      const e = db.exhibitions.find(x => x.id === target.dataset.open);

      if (e && countsAsVisit()) {
        e.views = (e.views || 0) + 1;
        db.logs.push({
          id: uid("log"),
          action: "Otwarcie wystawy",
          exhibitionId: target.dataset.open,
          email: currentUser.email,
          title: e.title,
          date: new Date().toISOString()
        });
        saveDb();
      }

      selectedId = target.dataset.open;
      view = "public";
      render();
      return;
    }

    if (target.hasAttribute("data-back")) {
      selectedId = null;
      render();
      return;
    }

    if (target.dataset.fav) {
      const list = db.favorites[currentUser.email] || [];

      if (list.includes(target.dataset.fav)) {
        db.favorites[currentUser.email] = list.filter(id => id !== target.dataset.fav);
      } else {
        db.favorites[currentUser.email] = [...list, target.dataset.fav];
      }

      saveDb();
      render();
      return;
    }

    if (target.dataset.edit) {
      editingId = target.dataset.edit;
      view = "museum";
      selectedId = null;
      render();
      return;
    }

    if (target.hasAttribute("data-cancel-edit")) {
      editingId = null;
      render();
      return;
    }

    if (target.dataset.delete) {
      if (confirm("Usunąć wystawę?")) {
        const removed = db.exhibitions.find(e => e.id === target.dataset.delete);
        db.exhibitions = db.exhibitions.filter(e => e.id !== target.dataset.delete);
        db.logs.push({
          id: uid("log"),
          action: "Usunięto wystawę",
          email: currentUser.email,
          title: removed ? removed.title : target.dataset.delete,
          date: new Date().toISOString()
        });
        saveDb();
        render();
      }
      return;
    }

    if (target.dataset.publish) {
      const e = db.exhibitions.find(x => x.id === target.dataset.publish);
      if (e) {
        e.status = e.status === "Opublikowana" ? "Szkic" : "Opublikowana";
        e.updatedAt = new Date().toISOString();
        db.logs.push({
          id: uid("log"),
          action: e.status === "Opublikowana" ? "Opublikowano wystawę" : "Cofnięto do szkicu",
          email: currentUser.email,
          title: e.title,
          date: new Date().toISOString()
        });
      }
      saveDb();
      render();
      return;
    }

    if (target.dataset.toggleUser) {
      const u = db.users.find(x => x.id === target.dataset.toggleUser);
      if (u) {
        u.status = u.status === "Aktywny" ? "Zablokowany" : "Aktywny";
        db.logs.push({
          id: uid("log"),
          action: u.status === "Aktywny" ? "Odblokowano użytkownika" : "Zablokowano użytkownika",
          email: currentUser.email,
          details: u.email,
          date: new Date().toISOString()
        });
      }
      saveDb();
      render();
      return;
    }

    if (target.hasAttribute("data-export")) {
      exportJson();
      return;
    }

    if (target.hasAttribute("data-reset")) {
      resetDb();
      return;
    }

    if (target.hasAttribute("data-import-open")) {
      const input = document.getElementById("importFile");
      if (input) input.click();
    }
  });

  document.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;

    if (form.dataset.form === "login") handleLogin(form);
    if (form.dataset.form === "register") handleRegister(form);
    if (form.dataset.form === "exhibition") handleExhibition(form);
  });

  document.addEventListener("change", event => {
    if (event.target.id !== "importFile") return;

    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);

        if (!imported.users || !imported.exhibitions) {
          throw new Error("Niepoprawny format");
        }

        db = imported;
        cleanDb();
        db.logs.push({
          id: uid("log"),
          action: "Import JSON",
          email: currentUser ? currentUser.email : "system",
          date: new Date().toISOString()
        });
        saveDb();
        selectedId = null;
        render();
      } catch {
        showNotice("Nie udało się zaimportować JSON.", true);
      }
    };

    reader.readAsText(file);
  });

  window.addEventListener("beforeunload", closeViewerTiming);

  initDb().then(() => {
    loadSession();
    render();
  });
})();
