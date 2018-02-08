rm -r wxServer/*
tar -zxvf wxServer.tar.gz ./wxServer
cd wxServer
cnpm install
cnpm run stop
cnpm run start
exit
