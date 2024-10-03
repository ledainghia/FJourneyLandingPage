pipeline {
    agent any

    stages {
        stage('Packaging') {
            steps {
                    sh 'docker build --pull --rm -f Dockerfile -t fjourneylandingpage:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker tag fjourneylandingpage:latest chalsfptu/fjourneylandingpage:latest'
                    sh 'docker push chalsfptu/fjourneylandingpage:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying and cleaning'
                sh 'docker container stop fjourneylandingpage || echo "this container does not exist"'
                sh 'echo y | docker system prune'
                sh 'docker container run -d --name fjourneylandingpage -p 3030:3000 chalsfptu/fjourneylandingpage'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
