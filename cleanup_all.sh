./cleanup_containers.sh

docker network rm frontend_network backend_network
docker volume rm db_volume
