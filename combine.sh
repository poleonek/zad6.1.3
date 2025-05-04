echo "Setting up networks and volume for database container, building container images"
./setup.sh

echo ""
echo "Running the containers"
./run_containers.sh

echo ""
echo "Waiting 15s for db to finish starting up..."
sleep 15

echo ""
echo "Testing endpoints"
./test.sh
