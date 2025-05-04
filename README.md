# zad 6.1.3

## Opis skryptów

`./combine.sh` - wykonuje wszystkie skrypty po kolei bez cleanupu.

`setup.sh` - inicjalizacja sieci, wolumenów, budowa obrazów.

`run_containers.sh` - uruchamianie kontenerów

`test.sh` - test endpointów kontenera backend.

`cleanup_containers.sh` - zatrzymuje i usuwa kontenery.

`cleanup_all.sh` - zatrzymuje i usuwa kontenery, usuwa sieci i wolumeny.

## Aby przetestować

```bash
./combine.sh
# ./test.sh może być uruchomione dowolną liczbę razy przed cleanupem.
./cleanup_all.sh
```
