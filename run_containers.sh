DB_HOST="db"
DB_PORT="3306"
DB_DATABASE="db"
DB_USER="user"
DB_PASSWORD="user"

docker container run -d \
  --name backend \
  --network backend_network \
  --network frontend_network \
  --env DB_HOST=$DB_HOST \
  --env DB_PORT=$DB_PORT \
  --env DB_DATABASE=$DB_DATABASE \
  --env DB_USER=$DB_USER \
  --env DB_PASSWORD=$DB_PASSWORD \
  backend_image

docker container run -d \
  --name db \
  --network backend_network \
  --env MYSQL_DATABASE=$DB_DATABASE \
  --env MYSQL_USER=$DB_USER \
  --env MYSQL_PASSWORD=$DB_PASSWORD \
  --env MYSQL_ROOT_PASSWORD=$DB_PASSWORD \
  -v db_volume:/var/lib/mysql \
  mysql

docker container run -d \
  --name frontend \
  --network frontend_network \
  -p 8080:8080 \
  frontend_image
