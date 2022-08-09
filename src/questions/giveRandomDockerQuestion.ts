const giveRandomDockerQuestion = () => {
  const data = `
  #### Q1. What is a Dockerfile?
  @@
  - [ ] running instance of a Docker image
  - [x] text file that contains all the commands needed to build a given image
  - [ ] Docker image that gets built by running a Docker command
  - [ ] website where you can download Docker images
  @@
  #### Q2. What is the the command used to find images in the docker Registry?
  @@
  - [ ] docker ls -a
  - [ ] docker pull
  - [x] docker search
  - [ ] none of the above
  @@
  #### Q3. Which command will map port 80 in the container to port 5001 on the Docker host?
  @@
  - [x] docker run -p 5001:80
  - [ ] docker run -p 80:5001
  - [ ] docker run expose 80:5001
  - [ ] docker run expose 5001:80
  @@
  #### Q4. The docker history command shows output similar to which of the following?
  @@
  - [x] Dockerfile
  - [ ] docker layers
  - [ ] docker-compose.yaml
  - [ ] docker images
  @@
  #### Q5. Which of the following correctly describes a Docker container?
  @@
  - [ ] A text file describing the dependencies of an application.
  - [ ] An online registry of Docker images.
  - [ ] A package consisting of an application and all its dependencies.
  - [x] An instance of an application created from a Docker image.
  @@
  #### Q6. What is the atomic unit of scheduling in Docker.
  @@
  - [x] the container
  - [ ] the image
  - [ ] the pod
  - [ ] the job
  @@
  #### Q7. Which Docker CLI commands can be used in a sequence to create a Docker image?
  @@
  - [ ] docker container run, and docker image commit.
  - [x] docker container run, and docker container commit.
  - [ ] docker container ls, and docker image commit.
  - [ ] docker container diff, and docker container commit.
  @@
  #### Q8. How to find container metadata location using Docker commands?
  @@
  - [ ] docker build
  - [x] docker inspect
  - [ ] docker version
  - [ ] docker info
  @@
  #### Q9. Which of the following Dockerfile instructions will define the process that keeps the container running?
   Commands defined using this instruction CANNOT be overridden at the command line during container initialization.
  @@
  - [x] ENTRYPOINT
  - [ ] RUN
  - [ ] CMD
  - [ ] START
  @@
  #### Q10. Which of the following is not part of Kubernetes Worker nodes?
  @@
  - [ ] Kube Proxy
  - [ ] Kubelet
  - [x] Kube-scheduler
  - [ ] Container Runtime
  @@
  #### Q11. What syntax can be used to convert a Dockerfile into an Image?
  @@
  - [ ] docker create -t <image_name>:<tag_name>
  - [ ] docker run -t <image_name>:<tag_name> 
  - [ ] docker convert -t <image_name>:<tag_name>
  - [x] docker build -t <image_name>:<tag_name>
  @@
  #### Q12. A Docker container is an instance of an image with a specific configuration
  @@
  - [ ] false
  - [x] true
  @@
  #### Q13. List inactive and active containers
  @@
  - [x] docker ps -a
  - [ ] docker ps
  - [ ] docker ps -l
  - [ ] docker ps -d
  @@
  #### Q14. Which Dockerfile instruction indicates what base image to use?
  @@
  - [x] FROM
  - [ ] ENTRYPOINT
  - [ ] BASE
  - [ ] USING
  @@
  #### Q15. Which of the following explains the relationship between a Docker image and Docker container?
  @@
  - [x] Docker container is a running instance of an image.
  - [ ] Docker container is used to start a Docker image.
  - [ ] Docker container is a collection of image layers.
  - [ ] docker container is two or more images that share a common execution environment.
  @@
  #### Q16. What's the good analogy for docker exec?
  @@
  - [ ]  Allows you to run additional processes outside a container.
  - [x]  Allows you to run additional processes in a container.
  - [ ] It's similar to installing software.
  - [ ] Allows you to run additional processes in new containers.
  @@
  #### Q17. What options are available for getting source code into Docker Containers?
  @@
  - [ ] Use the Dockerfile "EMBEDCODE" instruction.
  - [ ] Create a custom container with the source code and use the "mount" command to point to your dev machine.
  - [ ] None of these.
  - [x] Create a custom docker image with the source code or create a data volume pointing to your dev machine.
  @@
  #### Q18. What command-line switch can be used to define a custom Dockerfile file name (such as dockerfile.node) when building a custom image?
  @@
  - [ ] -v
  - [ ] -t
  - [x] -f
  - [ ] -customfile
  @@
  #### Q19. What does ECS stand for?
  @@
  - [ ] Elastic Container Serverless
  - [x] Elastic Container Service
  - [ ] Elastic Compute Service
  - [ ] Elastic Cubernetes Service
  @@
  #### Q20. What Dockerfile instruction must appear first in the file?
  @@
  - [x] FROM
  - [ ] IMAGE
  - [ ] ENV
  - [ ] RUN
  @@
  #### Q21. Command to create cluster in docker ?
  @@
  - [ ] K8s
  - [ ] docker swarm
  - [x] all of the above
  - [ ] apache mesos
  @@
  #### Q22. A Docker registry is a place to store and distribute Docker...
  @@
  - [ ] Files
  - [x] Images
  - [ ] Codes
  - [ ] All of the above
  @@
  #### Q23. What is the purpose of an image?
  @@
  - [x] To provide the filesystem for an application.
  - [ ] To provide a traditional process for an application.
  - [ ] To provide the network configuration for an application's network stack.
  - [ ] To provide an isolated process for an application.
  @@
  #### Q24. How does the dockerd expose the Docker API?
  @@
  - [ ] gRPC on a Unix socket.
  - [x] As a versioned HTTP(S) REST interface.
  @@
  #### Q25. Which of following statements is true about the architecture of Docker?
  @@
  - [x] All answers are true.
  - [ ] The architecture is client-server.
  - [ ] Docker containers are run as root.
  - [ ] The daemon must be run as root.
  @@
  #### Q26. Which of the following statements regarding the ephemerality of containers is FALSE?
  @@
  - [ ] Containerized applications tend to be easier to scale.
  - [x] Containers require IT Ops to build individual instances.
  - [ ] Containers starts ridiculously fast.
  - [ ] Containers can be packaged and instantiated directly from developer IDEs.
  @@
  #### Q27. What key concepts does Docker rely on?
  @@
  - [ ] Images and virtual machines
  - [ ] Images and archives
  - [x] Images and containers
  - [ ] Virtual machines and LXC
  @@
  #### Q28. What is NOT a type of networking mode for ECS?
  @@
  - [x] macvlan
  - [ ] none
  - [ ] bridge
  - [ ] host
  @@
  #### Q29. This command uploads your local image to your Docker Registry
  @@
  - [x] docker push
  - [ ] docker build
  - [ ] docker tag
  - [ ] docker run
  @@
  #### Q30. This Dockerfile command specifies the base image to use when creating a Docker image
  @@
  - [ ] ADD
  - [ ] COPY
  - [ ] CMD
  - [x] FROM
  @@
  #### Q31. Which of the following is not a recommended Dockerfile Directive?
  @@
  - [ ] FROM
  - [ ] COPY
  - [ ] LABEL
  - [x] MAINTAINER
  @@
  #### Q32. Which of the following Network interface gets created when you install Docker runtime on Docker host?
  @@
  - [ ] Docker1
  - [x] Docker0
  - [ ] eth0
  - [ ] eth1
  @@
  #### Q33. Which of the following is not a component of Docker Architecture?
  @@
  - [ ] Docker Engine
  - [ ] Docker Runtime
  - [x] Docker Machine
  - [ ] Docker Registry
  @@
  #### Q34. How to update a service ?
  @@
  - [ ] docker update service --image <imgName> <srvName>
  - [ ] docker service update <srvName>
  - [ ] docker update service --image <imgName
  - [x] docker service update --image <imgName> <srvName>
  @@
  #### Q35. How's retrived token of manager?
  @@
  - [x] docker swarm join-token -q manager
  - [ ] docker join-token -q manager
  - [ ] docker join-token manager
  - [ ] none of the above
  @@
  #### Q36. What is the name it receives the main orchestration server?
  @@
  - [x] manager
  - [ ] worker
  - [ ] node control
  - [ ] node administrator
  @@
  #### Q37. What's the main goal for use to docker swarm or k8s or mesos or etc ?
  @@
  - [ ] high level of availability
  - [ ] container orchestration
  - [x] all of the above
  - [ ] manage multiple containers deployed
  @@
  #### Q38. This command takes a snapshot of your current Docker container and puts it in a new image
  @@
  - [ ] docker pull
  - [ ] docker push
  - [ ] docker tag
  - [x] docker commit
  @@
  #### Q39. What is a dangling image?
  @@
  - [x] An image that's not associated with a tag.
  - [ ] An intermediate part of the chain of image layer.
  - [ ] An image that's not associated with a volume.
  - [ ] An image that's not associated with a running container.
  @@
  #### Q40. Which of the following docker commands will build a container image using instructions in a Dockerfile?
  @@
  - [ ] docker commit create
  - [ ] docker image create
  - [ ] docker commit build
  - [x] docker image build
  @@
  #### Q41. Which of the following best describes a Docker Image?
  @@
  - [x]  read-only template for starting one or more containers.
  - [ ] data volume that can be mounted inside of a container.
  - [ ] point-to-time snapshot of a container used for backups.
  - [ ] read-write template for starting one or more containers.
  @@
  #### Q42.  What format does Docker use to export images?
  @@
  - [ ] Image
  - [ ] iso
  - [ ] zip
  - [x] tar
  @@
  #### Q43. Which command allows you to access the live output of processes running inside a container?
  @@
  - [ ] docker exec
  - [x] docker attach
  - [ ] docker inspect
  - [ ] docker run
  @@
  #### Q44. To delete all containers that have stopped using the command?
  @@
  - [ ] docker rm -f
  - [ ] docker rmi
  - [x] docker prune
  - [ ] none of the above
  @@
  #### Q45. What is the function of the CMD instruction if the ENTRYPOINT instruction is also used?
  @@
  - [ ] CMD instructions get ignored.
  - [ ] CMD instructions override ENTRYPOINT instructions.
  - [x] CMD instructions get interpreted as arguments to ENTRYPOINT.
  - [ ] CMD instructions are used to create the environment in which ENTRYPOINT instructions run.
  @@
  #### Q46. Does Fargate on ECS support the bridge networking mode?
  @@
  - [ ] True
  - [x] False
  @@
  #### Q47. Is Fargate on ECS ISO 27001 compliant?
  @@
  - [x] True
  - [ ] False
  @@
  #### Q48. What do you have to manage when running Fargate on ECS?
  @@
  - [ ] Docker Engine
  - [ ] Updates
  - [ ] Operating System
  - [x] Tasks
  @@
  #### Q49. What Docker command shows running containers?
  @@
  - [ ] docker images
  - [ ] docker show
  - [ ] docker list
  - [x] docker ps
  @@
  #### Q50. What Docker command do you use to create and run a container?
  @@
  - [ ] docker exec
  - [ ] docker pull
  - [ ] docker start
  - [x] docker run
  @@
  #### Q51. It is a persistent background process that manages Docker images, containers, networks, and storage volumes.
  @@
  - [ ] Docker Host
  - [ ] Docker Virtual Machine
  - [ ] Docker Background Manager
  - [x] Docker Daemon`;

  const dataArray = data.split('####').slice(1);

  const wrongQuestions = localStorage.getItem('wrong Docker questions');
  const wrongEntries: string[] = [];
  if (wrongQuestions) {
    dataArray.forEach(
      (questionEntry: string) =>
        JSON.parse(wrongQuestions).some((wrongQuestion: string) =>
          questionEntry.includes(wrongQuestion)
        ) && wrongEntries.push(questionEntry)
    );
  }

  const finalDataArray = [...dataArray, ...wrongEntries];

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomDockerQuestion;
