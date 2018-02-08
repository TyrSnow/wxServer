cnpm install
cnpm run stop
set WX_TOKEN=$1 && egg-scripts start --daemon
exit
