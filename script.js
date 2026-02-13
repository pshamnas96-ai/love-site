let opened = new Set();

const stories = [
  "Enikk ipzhum aa day orkumpo enthoo oru vallaatha feel aaan kunjaa,Azone nu vannathum fisrt meeting day il ningl aa room ile shelf nn oru file edth povunnathum okke enik ntho mind angnee nikkind,ath kazhinj pinne ningle neryt kanunnath aa food issue il aayrnu.Sherkum ann ningle kandilla nn vijarikk, ee oru rltn nadakkuernno? Nk thoniyla.Enthayaalum ellaarum parayne sherya.Padachon ellaam time aavumpo nammlk ethicherum, Like thaankale nk kityepole. ipo thona ann aa food nte issue illaayyrnnu enkil nammal ippo ingne oru rltn il aavulayrnnu",
  "Ningl ente life ilek enter cheythath sherkum random aayternnu, athyaayth nan manassil polum karuthytla ingne oru sambhvm nadakkum nn.",
  "Ith enthaanenn choichaaaaal... Nk pani aaypo nan chumma aa chumakk ulla aaa eethokyo aracha marunn kondran paranjtha, but ath ningl karyayt edkm enn nan krthyyla,inglk ath ethretholam undenn aryla... but nk ath ingl vijaarikknekaaalum ethreyooo ethreyooo kuuduthal  feel aan ippzhum aaloikmpo. Because, nk ingne aarum effort edth onnm cheyth tharal illa,uppem ummem ozhich.Ann aa marunn kodnna ann shrkm ingl nte ullil kery bloodyy fooool",
  "Ithinippo prethyekich reasons onnulla, nk ini inhgle vidaan kazhyula ikkaakkeeee... chlpo nan deshyathil oru limit um illaand enthum parayndaavum bt athin anusarich ninglum behave cheyyan thudangyaa nan avde theerum... ningl athonnm karyaakand ingne nikknond aan nan ingne ingle veruppikne.I LOVE YOU SOOOOOO MUCHHH KAKUOOOO"
];

const titles = [
  "The day we met",
  "When everything changed",
  "Moments I’ll never forget",
  "Why it’s always you"
];

function show(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ✅ UPDATED MUSIC FUNCTION (Loop + Fade In) */
function startLove() {
  const music = document.getElementById("bgMusic");

  if (music) {
    music.loop = true;     // 🔁 Infinite loop
    music.volume = 0;      // 🔇 Start silent
    music.currentTime = 0;

    music.play().then(() => {

      // 🎶 Smooth Fade In
      let fade = setInterval(() => {
        if (music.volume < 0.6) {
          music.volume += 0.01;   // Smaller = slower fade
        } else {
          music.volume = 0.6;
          clearInterval(fade);
        }
      }, 100);

    }).catch(err => {
      console.log("Music play blocked:", err);
    });

  } else {
    console.log("Audio element not found");
  }

  show("story");
}

function openStory(i) {
  opened.add(i);
  document.getElementById("storyTitle").innerText = titles[i];
  document.getElementById("storyText").innerText = stories[i];
  document.getElementById("storyModal").style.display = "flex";

  if (opened.size === 4) {
    const btn = document.getElementById("storyNext");
    btn.disabled = false;
    btn.classList.remove("locked");
    btn.innerText = "Continue to Memories💖";
    btn.onclick = () => show("memories");
  }
}

function closeStory() {
  document.getElementById("storyModal").style.display = "none";
}

function unlock(el) {
  el.classList.add("unlocked");
}

/* Valentine NO popup */
const dialogues = [
  "nadakkuuuula😝",
  "escape cheyyan pattuula😂",
  "u r mine😌",
  "love you daa ❤️"
];

let d = 0;
const popup = document.getElementById("popup");
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";

    popup.innerText = dialogues[d++ % dialogues.length];
    popup.style.display = "block";
    popup.style.opacity = "1";

    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => popup.style.display = "none", 500);
    }, 3000);
  });
}

function yes() {
  show("yesPage");
  typeEffect();
  kissRain();
}

/* Typing */
const loveText = "Kakuuu,Sathyam paranjaal njan ith ezhuthumbozhum chiri varunnu.Aa Azone... aa food issue...ippo sherkm aloikmpo chiri vara.Pinne enikk pani aayappo marunn kond vannath, care kaanichath, aa silent concern... athokke oru point-il enikk manassilaayi: “eda, ith chumma alla”. Appo thottu njan already loose aayi 😌 Nee arinjillaayirikkam, pakshe ann thanne ente heart-il raashikkaakuu enna character permenent aayipoi.";

let i = 0;

function typeEffect() {
  if (i < loveText.length) {
    document.getElementById("typeText").innerHTML += loveText.charAt(i++);
    setTimeout(typeEffect, 60);
  }
}

/* Lips */
function kissRain() {
  setInterval(() => {
    const k = document.createElement("div");
    k.innerText = "💋";
    k.style.position = "fixed";
    k.style.left = Math.random() * 100 + "%";
    k.style.top = Math.random() * 100 + "%";
    k.style.fontSize = (10 + Math.random() * 40) + "px";
    document.body.appendChild(k);
    setTimeout(() => k.remove(), 3000);
  }, 300);
}
