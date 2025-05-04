pushd frontend
docker build . -t frontend_image
popd

pushd backend
docker build . -t backend_image
popd

docker network create frontend_network
docker network create backend_network

docker volume create db_volume
