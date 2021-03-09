echo What should the version be?
read VERSION

ssh root@<ip> "
docker pull <person>/<repo>:latest
docker tag <person>/<repo>:latest dokku/<repo>:$VERSION
dokku tags:deploy <repo> $VERSION"