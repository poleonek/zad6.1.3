# zad 6.1.3
## Opis

Frontend jest budowany wieloetapowo. Najpierw w obrazie node robiony jest build
a następnie wynik kopiowany jest do kontenera nginx. Jest to aplikacja react.

Backend jest zbudowany na obrazie node, używa expressjs.

Ponieważ backend dla celów akademickich jest zamknięty na dostęp spoza sieci
dockerowej, niemożliwe jest wysłanie zapytania z poziomu przeglądarki, która
naturalnie nie ma dostępu do tej sieci.

## Opis skryptów

`combine.sh` - wykonuje wszystkie skrypty po kolei bez cleanupu.

`setup.sh` - inicjalizacja sieci, wolumenów, budowa obrazów.

`run_containers.sh` - uruchamianie kontenerów

`test.sh` - test endpointów kontenera backend z konteneru frontend.

`cleanup_containers.sh` - zatrzymuje i usuwa kontenery.

`cleanup_all.sh` - zatrzymuje i usuwa kontenery, usuwa sieci i wolumeny.

## Aby przetestować

```bash
./combine.sh
# ./test.sh
# ./cleanup_containers.sh
# ./run_containers.sh
# ./test.sh # wolumen zachował dane
./cleanup_all.sh
```
