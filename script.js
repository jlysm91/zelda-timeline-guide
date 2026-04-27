const branchLabels = {
  origin: "공통 흐름",
  fallen: "패배한 세계",
  child: "어린 시절",
  adult: "어른 시절",
  wild: "야숨·왕눈"
};

const imageFiles = {
  sky: "skyward-sword.jpg",
  cap: "minish-cap.jpg",
  four: "four-swords.jpg",
  time: "ocarina-of-time.jpg",
  dark: "a-link-to-the-past.jpg",
  island: "links-awakening.jpg",
  oracle: "oracle-series.jpg",
  lorule: "a-link-between-worlds.jpg",
  trio: "tri-force-heroes.jpg",
  echo: "echoes-of-wisdom.jpg",
  classic: "the-legend-of-zelda.jpg",
  courage: "adventure-of-link.jpg",
  mask: "majoras-mask.jpg",
  twilight: "twilight-princess.jpg",
  fourplus: "four-swords-adventures.jpg",
  sea: "wind-waker.jpg",
  hourglass: "phantom-hourglass.jpg",
  train: "spirit-tracks.jpg",
  wild: "breath-of-the-wild.jpg",
  tears: "tears-of-the-kingdom.jpg"
};

const series = [
  {
    title: "스카이워드 소드",
    year: "2011",
    branch: "origin",
    art: "sky",
    summary: "마스터 소드와 하이랄 신화의 기원",
    story: "하늘섬 스카이로프트에 살던 링크가 지상으로 떨어진 젤다를 찾기 위해 모험을 떠납니다. 이 여정에서 여신 하일리아, 마스터 소드, 저주의 순환이라는 시리즈의 뿌리가 형성됩니다."
  },
  {
    title: "이상한 모자",
    year: "2004",
    branch: "origin",
    art: "cap",
    summary: "피콜과 바티, 작은 세계의 모험",
    story: "젤다가 바티의 저주로 돌이 되자 링크는 말하는 모자 에제로와 함께 몸을 작게 만들어 피콜 세계를 오갑니다. 작지만 넓은 세계를 탐험하는 동화적인 분위기가 강합니다."
  },
  {
    title: "4개의 검",
    year: "2002",
    branch: "origin",
    art: "four",
    summary: "포 소드와 네 명의 링크",
    story: "봉인되었던 바티가 다시 깨어나 젤다를 납치합니다. 링크는 포 소드를 뽑아 네 명으로 나뉘고, 협력의 힘으로 바티를 다시 봉인합니다."
  },
  {
    title: "시간의 오카리나",
    year: "1998",
    branch: "origin",
    art: "time",
    summary: "연표가 갈라지는 중심 사건",
    story: "코키리 숲의 소년 링크는 젤다와 만나 가논돌프의 야망을 막으려 합니다. 시간 이동과 최종 결말 때문에 젤다 세계관의 대표적인 분기점이 됩니다."
  },
  {
    title: "신들의 트라이포스",
    year: "1991",
    branch: "fallen",
    art: "dark",
    summary: "빛의 세계와 어둠의 세계",
    story: "마법사 아가님이 하이랄을 장악하고 젤다를 위협합니다. 링크는 빛의 세계와 어둠의 세계를 오가며 가논의 부활을 막고 트라이포스의 힘을 되찾습니다."
  },
  {
    title: "꿈꾸는 섬",
    year: "1993",
    branch: "fallen",
    art: "island",
    summary: "코호린트 섬과 바람의 물고기",
    story: "폭풍을 만나 표류한 링크는 코호린트 섬에서 깨어납니다. 섬을 떠나기 위해 바람의 물고기를 깨워야 하지만, 그 선택에는 쓸쓸한 진실이 따릅니다."
  },
  {
    title: "이상한 나무열매",
    year: "2001",
    branch: "fallen",
    art: "oracle",
    summary: "계절과 시간을 다루는 두 모험",
    story: "링크는 홀로드럼과 라브렌느로 향해 계절과 시간을 어지럽히는 적들을 막습니다. 두 이야기는 가논 부활의 음모로 이어집니다."
  },
  {
    title: "신들의 트라이포스 2",
    year: "2013",
    branch: "fallen",
    art: "lorule",
    summary: "하이랄과 로우랄",
    story: "유가가 사람들을 그림으로 만들며 하이랄을 위협합니다. 링크는 벽화처럼 벽에 들어가는 힘을 얻고, 하이랄과 로우랄의 운명을 함께 마주합니다."
  },
  {
    title: "트라이포스 삼총사",
    year: "2015",
    branch: "fallen",
    art: "trio",
    summary: "세 용사의 협력 모험",
    story: "히토피아 왕국의 공주가 마녀에게 저주를 받습니다. 세 명의 용사는 서로의 키를 쌓고 힘을 합치며 던전을 공략합니다."
  },
  {
    title: "지혜의 투영",
    year: "2024",
    branch: "fallen",
    art: "echo",
    summary: "젤다가 주인공이 되는 하이랄 구출",
    story: "하이랄 곳곳에 균열이 생기고 링크와 왕까지 사라집니다. 젤다는 신비한 힘으로 사물의 메아리를 만들어 직접 왕국을 구합니다."
  },
  {
    title: "젤다의 전설",
    year: "1986",
    branch: "fallen",
    art: "classic",
    summary: "초대작의 가논 토벌",
    story: "가논이 힘의 트라이포스를 빼앗자 젤다는 지혜의 트라이포스를 여러 조각으로 숨깁니다. 링크는 조각을 모아 가논을 쓰러뜨리고 젤다를 구합니다."
  },
  {
    title: "링크의 모험",
    year: "1987",
    branch: "fallen",
    art: "courage",
    summary: "잠든 젤다와 용기의 트라이포스",
    story: "링크는 잠든 젤다 공주를 깨우기 위해 용기의 트라이포스를 찾는 여정을 떠납니다. 초대작 이후의 하이랄을 배경으로 합니다."
  },
  {
    title: "무주라의 가면",
    year: "2000",
    branch: "child",
    art: "mask",
    summary: "타르미나와 3일의 반복",
    story: "과거로 돌아온 링크는 타르미나에 도착합니다. 달이 떨어지기까지 3일이 남은 세계에서 시간을 되돌리며 사람들을 구하고 재앙을 막습니다."
  },
  {
    title: "황혼의 공주",
    year: "2006",
    branch: "child",
    art: "twilight",
    summary: "그림자 세계와 늑대 링크",
    story: "하이랄이 황혼에 삼켜지고 링크는 늑대의 모습이 됩니다. 링크는 미드나와 함께 그림자 세계의 침공을 추적합니다."
  },
  {
    title: "4개의 검+",
    year: "2004",
    branch: "child",
    art: "fourplus",
    summary: "섀도 링크와 다시 깨어난 위협",
    story: "하이랄에 검은 구름이 드리우고 섀도 링크가 나타납니다. 링크는 다시 포 소드를 뽑아 네 명으로 나뉘어 위협에 맞섭니다."
  },
  {
    title: "바람의 지휘봉",
    year: "2002",
    branch: "adult",
    art: "sea",
    summary: "바다에 잠긴 하이랄",
    story: "가논이 다시 나타났지만 영웅이 돌아오지 않자 하이랄은 거대한 바다 아래 봉인됩니다. 섬마을 소년 링크는 테트라와 함께 대해원을 항해합니다."
  },
  {
    title: "몽환의 모래시계",
    year: "2007",
    branch: "adult",
    art: "hourglass",
    summary: "유령선과 해왕의 바다",
    story: "바람의 지휘봉 이후, 링크와 테트라는 새로운 바다로 항해합니다. 유령선에 얽힌 사건으로 테트라가 사라지고, 링크는 해왕의 세계에서 모험합니다."
  },
  {
    title: "대지의 기적",
    year: "2009",
    branch: "adult",
    art: "train",
    summary: "새로운 하이랄 왕국",
    story: "새 대륙에 세워진 하이랄에서 철로가 사라지는 이상 현상이 일어납니다. 견습 기관사 링크와 영혼이 된 젤다가 힘을 합쳐 위협을 막습니다."
  },
  {
    title: "야생의 숨결",
    year: "2017",
    branch: "wild",
    art: "wild",
    summary: "100년 뒤 깨어난 링크",
    story: "재앙 가논과의 전투에서 크게 패한 뒤, 링크는 100년 동안 잠들어 있다가 기억을 잃은 채 깨어납니다. 광대한 하이랄을 누비며 힘과 기억을 되찾습니다."
  },
  {
    title: "왕국의 눈물",
    year: "2023",
    branch: "wild",
    art: "tears",
    summary: "하늘과 지저로 확장된 대격변",
    story: "하이랄 성 지하에서 벌어진 사건 이후, 하늘섬과 지저 세계가 드러납니다. 링크는 사라진 젤다와 하이랄의 진실을 찾아 나섭니다."
  }
];

const revealItems = document.querySelectorAll(".reveal, .reveal-group");
let revealObserver;

function revealElement(element) {
  element.classList.add("is-visible");
}

function observeRevealElement(element, index = 0) {
  element.style.transitionDelay = `${Math.min(index * 24, 180)}ms`;
  if (revealObserver) {
    revealObserver.observe(element);
  } else {
    revealElement(element);
  }
}

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealElement(entry.target);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.02 });

  revealItems.forEach((item, index) => observeRevealElement(item, index));
} else {
  revealItems.forEach(revealElement);
}

function artSvg(type) {
  const palette = {
    sky: ["#4fb3a4", "#e8bb4f"],
    cap: ["#2f8f67", "#e8bb4f"],
    four: ["#58b9a8", "#688fd0"],
    time: ["#688fd0", "#e8bb4f"],
    dark: ["#c35a49", "#2d1a2b"],
    island: ["#58b9a8", "#e8bb4f"],
    oracle: ["#2f8f67", "#c35a49"],
    lorule: ["#8367c7", "#e8bb4f"],
    trio: ["#e8bb4f", "#58b9a8"],
    echo: ["#e8bb4f", "#e6d8ff"],
    classic: ["#2f8f67", "#e8bb4f"],
    courage: ["#e8bb4f", "#688fd0"],
    mask: ["#c35a49", "#58b9a8"],
    twilight: ["#688fd0", "#c35a49"],
    fourplus: ["#58b9a8", "#c35a49"],
    sea: ["#58b9a8", "#688fd0"],
    hourglass: ["#e8bb4f", "#58b9a8"],
    train: ["#688fd0", "#e8bb4f"],
    wild: ["#2f8f67", "#e8bb4f"],
    tears: ["#58b9a8", "#d7f7ff"]
  };
  const [a, b] = palette[type] || ["#58b9a8", "#e8bb4f"];
  const icon = {
    sky: `<path d="M98 132c46-56 94-56 142 0" fill="none" stroke="${b}" stroke-width="10" stroke-linecap="round"/><path d="M176 48 130 142h92L176 48Z" fill="${b}" opacity=".9"/>`,
    cap: `<path d="M112 138c24-54 78-84 142-78-36 20-50 52-52 86" fill="${a}" opacity=".95"/><circle cx="116" cy="142" r="18" fill="${b}"/>`,
    four: `<g fill="${b}"><path d="M180 38 210 94h-60z"/><path d="M126 98 156 154H96z"/><path d="M234 98 264 154h-60z"/><path d="M180 150 210 206h-60z"/></g>`,
    time: `<circle cx="180" cy="112" r="58" fill="none" stroke="${b}" stroke-width="10"/><path d="M180 70v48l34 28" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round"/>`,
    dark: `<path d="M72 164c38-70 76-92 118-54 42-38 80-16 118 54" fill="${a}" opacity=".82"/><path d="M180 54 214 124h-68z" fill="${b}"/>`,
    island: `<path d="M72 154c70 28 146 28 216 0" fill="none" stroke="${a}" stroke-width="14" stroke-linecap="round"/><path d="M158 142c6-38 24-62 54-78" fill="none" stroke="${b}" stroke-width="9" stroke-linecap="round"/><circle cx="214" cy="62" r="20" fill="${b}"/>`,
    oracle: `<circle cx="136" cy="108" r="44" fill="${a}" opacity=".86"/><path d="M218 60v100M178 108h80" stroke="${b}" stroke-width="11" stroke-linecap="round"/>`,
    lorule: `<path d="M180 178 132 84h96z" fill="${a}"/><path d="M108 68h144v100H108z" fill="none" stroke="${b}" stroke-width="9"/>`,
    trio: `<circle cx="124" cy="116" r="30" fill="${a}"/><circle cx="180" cy="82" r="30" fill="${b}"/><circle cx="236" cy="116" r="30" fill="${a}"/>`,
    echo: `<path d="M126 70h108v98H126z" fill="none" stroke="${b}" stroke-width="9"/><path d="M154 98h108v98H154z" fill="none" stroke="${a}" stroke-width="9" opacity=".9"/>`,
    classic: `<path d="M180 52 224 150h-88z" fill="${b}"/><path d="M102 166h156" stroke="${a}" stroke-width="12" stroke-linecap="round"/>`,
    courage: `<path d="M180 48 236 164H124z" fill="none" stroke="${b}" stroke-width="11"/><path d="M180 82v92" stroke="${a}" stroke-width="10" stroke-linecap="round"/>`,
    mask: `<path d="M104 86c36-40 116-40 152 0v64c-30 38-122 38-152 0V86Z" fill="${a}" opacity=".9"/><circle cx="146" cy="122" r="12" fill="${b}"/><circle cx="214" cy="122" r="12" fill="${b}"/>`,
    twilight: `<path d="M92 166 180 58l88 108H92Z" fill="${a}" opacity=".78"/><path d="M116 72c72 14 120 54 144 120" fill="none" stroke="${b}" stroke-width="10" stroke-linecap="round"/>`,
    fourplus: `<path d="M112 70h136v110H112z" fill="none" stroke="${a}" stroke-width="9"/><path d="M180 48 214 116h-68z" fill="${b}"/>`,
    sea: `<path d="M66 150c36-22 72-22 108 0s72 22 120 0" fill="none" stroke="${a}" stroke-width="12" stroke-linecap="round"/><path d="M180 62 246 138H114z" fill="${b}" opacity=".85"/>`,
    hourglass: `<path d="M130 56h100l-50 54 50 54H130l50-54-50-54Z" fill="none" stroke="${b}" stroke-width="10"/><path d="M180 110v36" stroke="${a}" stroke-width="9" stroke-linecap="round"/>`,
    train: `<path d="M92 136h176v46H92z" fill="${a}" opacity=".88"/><path d="M118 102h92v34h-92z" fill="${b}"/><circle cx="132" cy="188" r="14" fill="#071112"/><circle cx="230" cy="188" r="14" fill="#071112"/>`,
    wild: `<path d="M70 166 136 82l44 56 34-42 76 70H70Z" fill="${a}" opacity=".86"/><circle cx="248" cy="66" r="22" fill="${b}"/>`,
    tears: `<path d="M112 164 180 48l68 116H112Z" fill="${a}" opacity=".76"/><path d="M180 72c20 28 30 50 30 66a30 30 0 0 1-60 0c0-16 10-38 30-66Z" fill="${b}" opacity=".9"/>`
  }[type] || "";

  return `
    <svg class="series-visual" viewBox="0 0 360 220" role="img" aria-label="작품 분위기를 나타내는 상징 그림">
      <defs>
        <linearGradient id="grad-${type}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${a}" stop-opacity=".32"/>
          <stop offset="1" stop-color="${b}" stop-opacity=".14"/>
        </linearGradient>
      </defs>
      <rect width="360" height="220" fill="#071112"/>
      <rect width="360" height="220" fill="url(#grad-${type})"/>
      <circle cx="292" cy="50" r="44" fill="${b}" opacity=".16"/>
      <path d="M0 184c54-32 100-36 146-12s84 26 132-8c26-18 54-22 82-12v68H0z" fill="#020807" opacity=".72"/>
      ${icon}
      <path d="M24 28h312v164H24z" fill="none" stroke="${b}" stroke-opacity=".24"/>
    </svg>
  `;
}

function mediaMarkup(type, title) {
  const imageName = imageFiles[type] || `${type}.jpg`;
  const imageSrc = `assets/images/${imageName}`;
  return `
    <figure class="media-frame">
      <img class="series-photo" src="${imageSrc}" alt="${title} 이미지" loading="lazy">
      ${artSvg(type)}
    </figure>
  `;
}

function enableMediaFallbacks(scope = document) {
  scope.querySelectorAll(".media-frame img").forEach((image) => {
    image.addEventListener("load", () => {
      image.closest(".media-frame")?.classList.add("has-photo");
    }, { once: true });

    image.addEventListener("error", () => {
      const frame = image.closest(".media-frame");
      frame?.classList.add("use-fallback");
      image.remove();
    }, { once: true });
  });
}

function renderSeries() {
  const grid = document.querySelector("[data-series-grid]");
  if (!grid) return;

  grid.innerHTML = series.map((item) => `
    <article class="series-card ${item.branch} reveal" data-branch="${item.branch}">
      ${mediaMarkup(item.art, item.title)}
      <div class="series-info">
        <div class="series-meta">
          <span class="series-branch">${branchLabels[item.branch]}</span>
          <span class="series-year">${item.year}</span>
        </div>
        <h3>${item.title}</h3>
        <p><strong>${item.summary}</strong></p>
        <p>${item.story}</p>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".series-card").forEach((card, index) => {
    observeRevealElement(card, index);
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((control) => control.classList.remove("is-active"));
      button.classList.add("is-active");
      document.querySelectorAll(".series-card").forEach((card) => {
        card.classList.toggle("is-hidden", filter !== "all" && card.dataset.branch !== filter);
      });
    });
  });

  enableMediaFallbacks(grid);
}

function renderFeatureArt() {
  document.querySelectorAll("[data-art-slot]").forEach((slot) => {
    const label = slot.dataset.artSlot === "tears" ? "왕국의 눈물" : "야생의 숨결";
    slot.innerHTML = mediaMarkup(slot.dataset.artSlot, label);
    enableMediaFallbacks(slot);
  });
}

renderSeries();
renderFeatureArt();
