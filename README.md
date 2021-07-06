#Cześć !

## Wprowadzenie

Prosimy Cię o wykonanie aplikacji js oraz ostylowanie elementów interfejsu użytkownika
przy użyciu css lub sass/less.
Po otrzymaniu Twojego kodu, który ma być odpowiedzią na poniższe zadanie będziemy chcieli ocenić Twój potencjał.

Rozwiązanie zadania chcielibyśmy otrzymać w terminie **7 dni**.

### Opis aplikacji

Potrzebujemy aplikacji, która zaprezentuje dane samochodów bazując na pliku _data.json_ w postaci kafelków na stronie.

Na pojedynczy samochód składają się następujące informacje:

- zdjęcie
- marka
- model
- oznaczenie silnika
- nazwa modelu (ciąg znaków złożony wg wzoru : marka model oznaczenie silnika)
- **dostępność** (dostępne wartości: tak/nie)

Jeżeli samochód jest niedostępny, dany kafelek powinien to odzwierciedlać.

Na każdym kafelku chcemy żeby znalazł się przycisk zmieniający **dostępność** danego samochodu.
Kliknięcie na niego powinno spowodować zmianę stanu **dostępności** danego samochodu.

Oprócz tego, przy każdym z aut powinien znaleźć się przycisk **usuń**,
który, po kliknięciu powoduje usunięcie auta.

Aplikacja powinna być napisana w taki sposób aby umożliwiać jej przegląd zarówno w przeglądarce jak i na urządzeniach **mobilnych**.
Aplikacja powinna zostać pokryta **testami**.

Do napisania aplikacji użyj RactaJS najlepiej w połącznieu z Typescriptem lub czystego Typscript ewnetulanie JavaScript.

### Wygląd

Przykładowy wygląd kafelków został przedstawiony w pliku _sample_tiles.png_, ale pozostawiamy Ci dowolność co do ostatecznego wyglądu.
Chcemy jedynie aby na kafelku znalazły się:

- zdjęcie - jeśli dostępne,
- marka,
- model,
- rodzaj silnika,
- przycisk umożliwiający usunięcie danego kafelka,
- przycisk zmieniający dostępność danej pozycji.

Pozycje niedostępne powinny zostać wyświetlone w sposób wyróżniający się od reszty, np. czerwona otoczka.

### Zasoby

- w repozytorium zadania znajdziesz plik _data.json_, który jest Twoim źródłem danych
- znajdziesz poglądowy obrazek (_sample_tiles.png_)

### Kryteria oceny

Podejmiemy się oceny Twojego kodu pod kątem:

- znajomości języka i wachlarz funkcji natywnych które używasz
- ustrukturyzowania i organizacji kodu w plikach
- dbania o czytelność kodu - kod powinien być napisany zgodnie ze standardem https://standardjs.com/
- testy
- zgodności rozwiązania z treścią zadania

### Wskazówki

- jeżeli korzystasz z sass'a, do budowania wynikowego css'a idealnie byłoby użyć webpacka,
  jeżeli użyjesz czegoś innego opisz nam w README jak zbudować aplikację
- niezbędne będzie użycie AJAX'a do pobrania danych z pliku json
- jeżeli opis zadania jest dla Ciebie niejasny, napisz na adres ``developers.php@edpauto.com``, postaramy
  się odpowiedzieć na pytania
- styl kodowania css - preferujemy wcięcia na dwie spacje
- styl kodowania js - postaraj trzymać się zasad opisanych na ``https://standardjs.com/``

### Schemat pracy z repozytorium

Prosimy Cię o utworzenie kopii (NIE FORK'a) aktualnego repozytorium na bitbuckecie / githubie / gitlabie oraz wysłanie adresu repozytorium na adres: developers.php@edpauto.com.

Pracuj na gałęzi odchodzącej od mastera. Zespół chciałby wykonać CODE review projektu, który wykonujesz.

Powodzenia
