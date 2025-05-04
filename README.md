`./combine.sh` - wykonuje wszystkie skrypty po kolei bez cleanupu.
`setup.sh` - inicjalizacja sieci, wolumenów, budowa obrazów.
`run_containers.sh` - uruchamianie kontenerów
`test.sh` - test endpointów kontenera backend.
`cleanup_containers.sh` - zatrzymuje i usuwa kontenery.
`cleanup_all` - zatrzymuje i usuwa kontenery, usuwa sieci i wolumeny.


Aby przetestować:
`./combine.sh`
`./cleanup_all.sh`
