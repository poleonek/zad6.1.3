CREATE_TABLE=$(docker container exec -it frontend sh -c "curl -X POST http://backend:3001/api/create-table")

POST_DATA=$(
  docker container exec -it frontend sh -c 'curl -X POST \
  http://backend:3001/api/add \
  -H "Content-Type: application/json" \
  -d "{ \
    \"name\":\"asdf\", \
    \"value\":\"fdsa\" \
  }"'
)

BASIC=$(docker container exec -it frontend sh -c "curl -X GET backend:3001/api/basic_endpoint")
ACCESS_DB=$(docker container exec -it frontend sh -c "curl -X GET backend:3001/api/access_db_endpoint")

echo "Table create res: $CREATE_TABLE"
echo "Post data res: $POST_DATA"
echo "Basic endpoint response: $BASIC"
echo "Access db endpoint response: $ACCESS_DB"
