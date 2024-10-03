pipeline {
    agent any

    stages {
        stage('Packaging') {
            steps {
                    sh 'docker build --pull --rm -f Dockerfile -t fjourneyLandingPage:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'docker tag fjourneyLandingPage:latest chalsfptu/fjourneyLandingPage:latest'
                    sh 'docker push chalsfptu/fjourneyLandingPage:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying and cleaning'
                sh 'docker container stop fjourneyLandingPage || echo "this container does not exist"'
                sh 'echo y | docker system prune'
                sh 'docker container run -d --name fjourneyLandingPage -p 3030:3000 chalsfptu/fjourneyLandingPage'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
