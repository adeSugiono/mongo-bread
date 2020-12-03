
Error from chokidar



I have had this error too. Try

$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
and
$ sudo sysctl -p

This document helped me
