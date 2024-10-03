pipeline {
    agent any

    stages {
        stage('Packaging') {
            steps {
                    sh 'docker build --pull --rm -f Dockerfile -t FjourneyLandingPage:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker tag FjourneyLandingPage:latest chalsfptu/FjourneyLandingPage:latest'
                    sh 'docker push chalsfptu/FjourneyLandingPage:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying and cleaning'
                sh 'docker container stop FjourneyLandingPage || echo "this container does not exist"'
                sh 'echo y | docker system prune'
                sh 'docker container run -d --name FjourneyLandingPage -p 3030:3000 chalsfptu/FjourneyLandingPage'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
