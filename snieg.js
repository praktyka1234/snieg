
const kontener = document.getElementById("snieg");

        // Wysokość śniegu w różnych miejscach ekranu
        const szerokosc = 10;
        let kupki = [];

        function ustawSzerokosc() {
            const liczba = Math.ceil(window.innerWidth / szerokosc);

            kupki = Array(liczba).fill(0);
        }

        ustawSzerokosc();

        window.addEventListener("resize", ustawSzerokosc);

        function dodajSnieg() {

            const plat = document.createElement("div");

            plat.className = "plat";
            plat.textContent = "❄";

            const rozmiar = 15 + Math.random() * 15;

            const x = Math.random() * window.innerWidth;

            plat.style.left = x + "px";
            plat.style.fontSize = rozmiar + "px";

            const czas = 4 + Math.random() * 4;

            plat.style.animationDuration = czas + "s";

            kontener.appendChild(plat);

            const kolumna = Math.min(
                Math.floor(x / szerokosc),
                kupki.length - 1
            );

            const wysokosc = rozmiar * 0.7;

            plat.addEventListener("animationend", function() {

                plat.style.animation = "none";

                // Zwiększanie kupki śniegu
                kupki[kolumna] += wysokosc;

                // Zatrzymanie płatka na powierzchni śniegu
                plat.style.top = "auto";
                plat.style.bottom = kupki[kolumna] - wysokosc + "px";
                plat.style.left = x + "px";

                // Płatek zostaje na dole
            });
        }

