# Installation | 安装
## Install Ros2 on Raspberry Pi 3B+
目前需要安装的一台边缘设备是RPI OS的树莓派3B+，Arm32的，这里讲一下Arm64是三级支持(Tier 1)，而Arm32是三级支持(Tier 3)，Tier 1意味着ROS2的包和二进制文件可以直接用，而Tier 3则需要自己编译源码，事件紧急，开docker开启Tier 1！
```bash
docker build -t ros_docker .
```